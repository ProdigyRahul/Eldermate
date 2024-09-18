/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { model, Model, Schema, Document, Types } from 'mongoose';
import bcrypt from 'bcrypt';
import config from '../config/config';

// Interface for OtpVerification document
export interface IOtpVerification extends Document {
    userId: Types.ObjectId;
    otp: string;
    createdAt: Date;
    expiresAt: Date;
}

// Interface for OtpVerification model
interface IOtpVerificationModel extends Model<IOtpVerification> {
    createOtp(userId: string | Types.ObjectId): Promise<string>;
    validateOtp(userId: string | Types.ObjectId, otp: string): Promise<boolean>;
}

// Define OtpVerification schema
const otpVerificationSchema = new Schema<IOtpVerification, IOtpVerificationModel>({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    expiresAt: {
        type: Date,
        required: true,
        expires: 0 // This will automatically remove the document when it expires
    }
});

// Hash OTP before saving
otpVerificationSchema.pre('save', async function (next) {
    if (this.isModified('otp')) {
        this.otp = await bcrypt.hash(this.otp, 10);
    }
    next();
});

// Static method to create a new OTP
otpVerificationSchema.statics.createOtp = async function (userId: string | Types.ObjectId) {
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
    const userObjectId = typeof userId === 'string' ? new Types.ObjectId(userId) : userId;

    const expiresAt = new Date(Date.now() + config.OTP_EXPIRE * 1000); // Convert seconds to milliseconds

    const otpVerification = new this({
        userId: userObjectId,
        otp: otp,
        expiresAt: expiresAt
    });

    await otpVerification.save();
    return otp;
};

// Static method to validate an OTP
otpVerificationSchema.statics.validateOtp = async function (userId: string | Types.ObjectId, otp: string) {
    const userObjectId = typeof userId === 'string' ? new Types.ObjectId(userId) : userId;

    const otpVerification = await this.findOne({
        userId: userObjectId,
        expiresAt: { $gt: new Date() } // Check if the OTP hasn't expired
    });

    if (!otpVerification) {
        return false;
    }

    const isValid = await bcrypt.compare(otp, otpVerification.otp);
    if (isValid) {
        await otpVerification.deleteOne(); // Remove the OTP after successful validation
    }
    return isValid;
};

// Create and export the OtpVerification model
const OtpVerification = model<IOtpVerification, IOtpVerificationModel>('OtpVerification', otpVerificationSchema);

export default OtpVerification;


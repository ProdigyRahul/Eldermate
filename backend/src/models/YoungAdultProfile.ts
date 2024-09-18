import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';

export interface IYoungAdultProfile extends Document {
    userId: IUser['_id'];
    skills: string[];
    servicesOffered: string[];
    hourlyRate: number;
    isVolunteer: boolean;
    backgroundCheck: {
        status: 'Pending' | 'Approved' | 'Rejected';
        completedAt?: Date;
    };
}

const YoungAdultProfileSchema: Schema = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        skills: [{ type: String }],
        servicesOffered: [{ type: String }],
        hourlyRate: { type: Number, min: 0 },
        isVolunteer: { type: Boolean, default: false },
        backgroundCheck: {
            status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
            completedAt: { type: Date }
        }
    },
    { timestamps: true }
);

export const YoungAdultProfile = mongoose.model<IYoungAdultProfile>('YoungAdultProfile', YoungAdultProfileSchema);


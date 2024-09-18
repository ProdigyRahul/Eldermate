import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    dateOfBirth: Date;
    gender: 'Male' | 'Female' | 'Other';
    role: 'Elder' | 'Young Adult';
    address: {
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    };
    profilePicture?: string;
    bio?: string;
    interests: string[];
    languages: string[];
    rating: number;
    servicesCompleted: number;
    createdAt: Date;
    updatedAt: Date;
    lastLogin: Date;
}

const UserSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        phoneNumber: { type: String, required: true },
        dateOfBirth: { type: Date, required: true },
        gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
        role: { type: String, enum: ['Elder', 'Young Adult'], required: true },
        address: {
            street: { type: String, required: true },
            city: { type: String, required: true },
            state: { type: String, required: true },
            zipCode: { type: String, required: true },
            country: { type: String, required: true }
        },
        profilePicture: { type: String },
        bio: { type: String },
        interests: [{ type: String }],
        languages: [{ type: String }],
        rating: { type: Number, default: 0 },
        servicesCompleted: { type: Number, default: 0 },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
        lastLogin: { type: Date }
    },
    { timestamps: true }
);

export const User = mongoose.model<IUser>('User', UserSchema);

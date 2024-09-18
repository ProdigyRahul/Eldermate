import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';

export interface IElderlyProfile extends Document {
    userId: IUser['_id'];
    emergencyContact: {
        name: string;
        relationship: string;
        phoneNumber: string;
    };
    medicalConditions: string[];
    mobilityNeeds?: string;
    preferredActivities: string[];
    dietaryRestrictions: string[];
}

const ElderlyProfileSchema: Schema = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        emergencyContact: {
            name: { type: String, required: true },
            relationship: { type: String, required: true },
            phoneNumber: { type: String, required: true }
        },
        medicalConditions: [{ type: String }],
        mobilityNeeds: { type: String },
        preferredActivities: [{ type: String }],
        dietaryRestrictions: [{ type: String }]
    },
    { timestamps: true }
);

export const ElderlyProfile = mongoose.model<IElderlyProfile>('ElderlyProfile', ElderlyProfileSchema);

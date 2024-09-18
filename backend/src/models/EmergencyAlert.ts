import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';

export interface IEmergencyAlert extends Document {
    elderlyId: IUser['_id'];
    alertType: 'Health' | 'Safety' | 'Other';
    description: string;
    location: {
        address: string;
        coordinates?: [number, number];
    };
    resolvedAt?: Date;
}

const EmergencyAlertSchema: Schema = new Schema(
    {
        elderlyId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        alertType: { type: String, enum: ['Health', 'Safety', 'Other'], required: true },
        description: { type: String, required: true },
        location: {
            address: { type: String, required: true },
            coordinates: { type: [Number], index: '2dsphere' }
        },
        resolvedAt: { type: Date }
    },
    { timestamps: true }
);

export const EmergencyAlert = mongoose.model<IEmergencyAlert>('EmergencyAlert', EmergencyAlertSchema);


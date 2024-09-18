import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';

export interface IAvailability extends Document {
    userId: IUser['_id'];
    day: string;
    startTime: string;
    endTime: string;
    location: string;
}

const AvailabilitySchema: Schema = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        day: { type: String, required: true },
        startTime: { type: String, required: true },
        endTime: { type: String, required: true },
        location: { type: String, required: true }
    },
    { timestamps: true }
);

export const Availability = mongoose.model<IAvailability>('Availability', AvailabilitySchema);


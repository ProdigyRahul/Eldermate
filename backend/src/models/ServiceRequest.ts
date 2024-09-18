import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';

export interface IServiceRequest extends Document {
    elderlyId: IUser['_id'];
    youngAdultId?: IUser['_id'];
    serviceType:
        | 'Companionship'
        | 'Walking Assistance'
        | 'Technical Support'
        | 'Grocery Shopping'
        | 'Transportation'
        | 'Meal Preparation'
        | 'Household Tasks';
    description: string;
    status: 'Pending' | 'Accepted' | 'Completed' | 'Cancelled';
    scheduledDate: Date;
    startTime: string;
    endTime: string;
    duration: number;
    location: {
        address: string;
        coordinates?: [number, number];
    };
    notes?: string;
}

const ServiceRequestSchema: Schema = new Schema(
    {
        elderlyId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        youngAdultId: { type: Schema.Types.ObjectId, ref: 'User' },
        serviceType: {
            type: String,
            enum: [
                'Companionship',
                'Walking Assistance',
                'Technical Support',
                'Grocery Shopping',
                'Transportation',
                'Meal Preparation',
                'Household Tasks'
            ],
            required: true
        },
        description: { type: String, required: true },
        status: { type: String, enum: ['Pending', 'Accepted', 'Completed', 'Cancelled'], default: 'Pending' },
        scheduledDate: { type: Date, required: true },
        startTime: { type: String, required: true },
        endTime: { type: String, required: true },
        duration: { type: Number, required: true },
        location: {
            address: { type: String, required: true },
            coordinates: { type: [Number], index: '2dsphere' }
        },
        notes: { type: String }
    },
    { timestamps: true }
);

export const ServiceRequest = mongoose.model<IServiceRequest>('ServiceRequest', ServiceRequestSchema);

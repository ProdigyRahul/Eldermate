import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';
import { IServiceRequest } from './ServiceRequest';

export interface IPayment extends Document {
    serviceRequestId: IServiceRequest['_id'];
    payerId: IUser['_id'];
    payeeId: IUser['_id'];
    amount: number;
    status: 'Pending' | 'Completed' | 'Failed' | 'Refunded';
    paymentMethod: string;
    completedAt?: Date;
}

const PaymentSchema: Schema = new Schema(
    {
        serviceRequestId: { type: Schema.Types.ObjectId, ref: 'ServiceRequest', required: true },
        payerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        payeeId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        amount: { type: Number, required: true, min: 0 },
        status: { type: String, enum: ['Pending', 'Completed', 'Failed', 'Refunded'], default: 'Pending' },
        paymentMethod: { type: String, required: true },
        completedAt: { type: Date }
    },
    { timestamps: true }
);

export const Payment = mongoose.model<IPayment>('Payment', PaymentSchema);


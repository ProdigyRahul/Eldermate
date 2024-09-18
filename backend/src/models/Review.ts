import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';
import { IServiceRequest } from './ServiceRequest';

export interface IReview extends Document {
    serviceRequestId: IServiceRequest['_id'];
    reviewerId: IUser['_id'];
    revieweeId: IUser['_id'];
    rating: number;
    comment?: string;
}

const ReviewSchema: Schema = new Schema(
    {
        serviceRequestId: { type: Schema.Types.ObjectId, ref: 'ServiceRequest', required: true },
        reviewerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        revieweeId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        rating: { type: Number, required: true, min: 1, max: 5 },
        comment: { type: String }
    },
    { timestamps: true }
);

export const Review = mongoose.model<IReview>('Review', ReviewSchema);


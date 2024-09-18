import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';

export interface INotification extends Document {
    userId: IUser['_id'];
    message: string;
    type: 'Service Request' | 'Reminder' | 'Alert' | 'Emergency';
    isRead: boolean;
    link?: string;
    readAt?: Date;
}

const NotificationSchema: Schema = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        message: { type: String, required: true },
        type: { type: String, enum: ['Service Request', 'Reminder', 'Alert', 'Emergency'], required: true },
        isRead: { type: Boolean, default: false },
        link: { type: String },
        readAt: { type: Date }
    },
    { timestamps: true }
);

export const Notification = mongoose.model<INotification>('Notification', NotificationSchema);


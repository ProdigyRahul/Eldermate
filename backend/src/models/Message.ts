import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';

export interface IMessage extends Document {
    senderId: IUser['_id'];
    receiverId: IUser['_id'];
    content: string;
    read: boolean;
}

const MessageSchema: Schema = new Schema(
    {
        senderId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        receiverId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        content: { type: String, required: true },
        read: { type: Boolean, default: false }
    },
    { timestamps: true }
);

export const Message = mongoose.model<IMessage>('Message', MessageSchema);


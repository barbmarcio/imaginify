import { Schema, model, models } from "mongoose";

export interface UserInterface extends Document {
    clerkId: string;
    email: string;
    username: string;
    photo: string;
    firstName: string;
    lastName: string;
    planId: string;
    creditBalance: number;
}

const UserSchema = new Schema({
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    photo: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    planId: { type: String, default: 1 },
    creditBalance: { type: Number, default: 10 },
});

export const User = models?.User || model('User', UserSchema)
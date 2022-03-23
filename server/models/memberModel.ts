import {model, Schema} from "mongoose";
import {Members} from "../types/members";

export const memberSchema = new Schema<Members>({
    crewId: Number,
    id: Number,
    userId: Number,
    image: String,
    name: String,
});
export const MemberModel = model<Members>('Member', memberSchema);
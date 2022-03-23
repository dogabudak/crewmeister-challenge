import {model, Schema} from "mongoose";
import {Absences} from "../types/absences";

export const absenceSchema = new Schema<Absences>({
    admitterId: { type: Number, required: false },
    admitterNote: String,
    confirmedAt: Date,
    createdAt: Date,
    crewId: Number,
    endDate: String,
    id: Number,
    memberNote: String,
    rejectedAt: { type: Date, required: false },
    startDate: String,
    type: String,
    userId: Number
});

export const AbsenceModel = model<Absences>('Absences', absenceSchema);

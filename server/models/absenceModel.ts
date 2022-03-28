import {model, Schema} from "mongoose";
import {Absences} from "../types/absences";

export const absenceSchema = new Schema<Absences>({
    admitterId: { type: Number, required: false },
    admitterNote: String,
    confirmedAt: { type: Date, required: false },
    createdAt: Date,
    crewId: Number,
    endDate: Date,
    id: Number,
    memberNote: String,
    rejectedAt: { type: Date, required: false },
    startDate: Date,
    type: String,
    userId: Number
});

export const AbsenceModel = model<Absences>('Absences', absenceSchema);

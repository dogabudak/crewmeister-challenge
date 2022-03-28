import {Member} from "@type/Member.type";

export enum AbsenceType {
  sickness,
  vacation
}
export type Absence = {
  admitterId?: number
  admitterNote: string
  confirmedAt: Date
  createdAt: Date
  crewId: number
  endDate: string
  id: number
  memberNote: string
  rejectedAt?: Date
  startDate: string
  type: AbsenceType
  userId: number
  member: Member
};

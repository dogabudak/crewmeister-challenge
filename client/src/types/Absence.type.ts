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
  type: string
  userId: number
};

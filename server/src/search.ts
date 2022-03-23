import {AbsenceModel} from "../models/absenceModel";

const limit = 10;
export const absences = async (search) => {
    const count = await AbsenceModel.count(search);
    const records = await AbsenceModel.aggregate([
        //{ $match: { answer: 42 } },
        //{ "$sort": { "score": { "$meta": "textScore" } } },
        { "$limit": limit },
        { "$skip": limit * search.page },
        {$lookup:{ from: 'members', localField: 'userId', foreignField: 'userId', as: 'member' }},
        {$unwind:'$member'},
        {$project:{_id: 0, __v: 0}}
    ])
    return {count, records}
}

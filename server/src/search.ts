import moment from 'moment'
import {AbsenceModel} from "../models/absenceModel";

const limit = 10;
export const absences = async (search) => {
    const {page} = search
    const query = searchObjectToMatchQuery(search)
    // @ts-ignore
    console.log(JSON.stringify(query))
    const count = await AbsenceModel.count(query);
    const records = await AbsenceModel.aggregate()
        .match(query)
        .limit(limit)
        .skip(limit * page)
        .lookup({
            from: 'members',
            localField: 'userId',
            foreignField: 'userId',
            as: 'member'
        }).unwind('$member').project({_id: 0, __v: 0})
    return {count, records}
}

const searchObjectToMatchQuery = (search) => {
    const searchObject = {$and: []}
    // Remove undefined values
    Object.keys(search).forEach((key) => ((search[key] === 'undefined' || search[key] === undefined) ? delete search[key] : {}));
    if (search.type) {
        searchObject.$and.push({type: search.type})
    }
    if (search.startDate && search.endDate) {
        const startDate = moment(search.startDate,'DD-MM-YYYY').toDate()
        const endDate = moment(search.endDate,'DD-MM-YYYY').toDate()
        const dates = {$or: []}
        dates.$or.push({$and: [{startDate: {$gte: startDate}},{endDate: {$gte: startDate}}]})
        //dates.$or.push({$and:[{startDate: {$gte: startDate}},{endDate: {$lte: endDate}}]})
        //dates.$or.push({$and:[{startDate: {$lte: endDate}},{endDate: {$gte: endDate}}]})
        searchObject.$and.push(dates)
    }
    return searchObject.$and.length ? searchObject: {}
}
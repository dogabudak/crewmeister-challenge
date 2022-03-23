import {AbsenceModel} from "../models/absenceModel";
import {MemberModel} from "../models/memberModel";

const limit = 10;
export const absences = async (search) => {
    const count = await AbsenceModel.count(search);
    const records = await AbsenceModel.find({}, {_id: 0, __v: 0}, {limit, skip: limit * search.page});
    return {count, records}
}

import fs from 'fs';
import path from 'path';
import {Absences} from "../types/absences";
import {Members} from "../types/members";
import { connect } from 'mongoose';
import {AbsenceModel} from "../models/absenceModel";
import {MemberModel} from "../models/memberModel";

const ABSENCES_PATH = path.join(__dirname, 'json_files', 'absences.json');
const MEMBERS_PATH = path.join(__dirname, 'json_files', 'members.json');

const readJsonFile = (path) => new Promise((resolve) => fs.readFile(path, 'utf8', (_, data) => resolve(data)))
    .then((data) => JSON.parse(data as string) )
    .then((data) => data.payload as Absences[] | Members[]);

export const members = () => readJsonFile(MEMBERS_PATH);
export const absences = () => readJsonFile(ABSENCES_PATH);

(async ()=>{
    // TODO move this to .env
    await connect('mongodb://localhost:27017/test');
    const membersCollection = await members()
    const absensesCollection = await absences()
    await AbsenceModel.insertMany(absensesCollection)
    await MemberModel.insertMany(membersCollection)
})()
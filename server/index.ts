import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { absences } from "./src/search";
import {connect} from "mongoose";

const app = express()
//TODO put this to docker file
const apiPort = 7001

app.use(bodyParser.json())
app.use(cors())
app.options('*', cors())

connect('mongodb://localhost:27017/test');

app.get('/absences', async (req, res) => {
    try {
        const query = req.query
        const results = await absences(query)
        res.send(results)
    } catch (e) {
        console.error(`Unable to process the request: ${e}`)
        res.sendStatus(500)
    }
})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))


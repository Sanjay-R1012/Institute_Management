import express from 'express'
import { config } from 'dotenv'
import { connect } from 'mongoose'
import cors from 'cors'
import CourseRouter from './Course/courseController.js'

const app = express()
app.use(express.json())
app.use(cors())
config()

app.use('/course/',CourseRouter)

const Start = async () => {

    await connect(process.env.mongodb_string)
    app.listen(process.env.port, () => console.log(`Serving on the port ${process.env.port}...`))
}
Start()
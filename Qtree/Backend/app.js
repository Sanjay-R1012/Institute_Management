import express from 'express'
import { config } from 'dotenv'
import { connect } from 'mongoose'
import cors from 'cors'
import CourseRouter from './Course/courseController.js'
import StaffRouter from './Staff/staffController.js'
import StudentRouter from './Student/studentController.js'

const app = express()
app.use(express.json())
app.use(cors())
config()

app.use('/course/',CourseRouter)
app.use('/staff/',StaffRouter)
app.use('/student/',StudentRouter)

const Start = async () => {

    await connect(process.env.mongodb_string)
    app.listen(process.env.port, () => console.log(`Serving on the port ${process.env.port}...`))
}
Start()
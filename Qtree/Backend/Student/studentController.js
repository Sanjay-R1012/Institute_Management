import express from 'express'
import { Student } from './studentModel.js'
import { authentication } from '../Authentication/authentication.js'

const StudentRouter =express.Router()

StudentRouter.get('/data/',authentication,async(request,response) => {

    const student_data = await Student.find({})

    response.json(student_data)
})

StudentRouter.post('/add/', async (request, response) => {

    const new_student = new Student(request.body)

    await new_student.save()

    response.json("Data Saved")

})

StudentRouter.patch('/update/:id/', async(request, response) => {

    const {id} = request.params

    console.log(id)

    await Student.findByIdAndUpdate(id, request.body)

    response.json('Data Updated')

})

StudentRouter.delete('/delete/:id/', async(request, response) => {
    const {id} = request.params

    await Student.findByIdAndDelete(id)

    const student_data = await Student.find({})

    response.json(student_data)

})

export default StudentRouter
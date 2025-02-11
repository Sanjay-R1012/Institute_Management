import express from 'express'
import { Course } from './courseModel.js'

const CourseRouter =express.Router()

CourseRouter.get('/data/',async(request,response) => {

    const course_data = await Course.find({})

    response.json(course_data)
})

CourseRouter.post('/add/', async (request, response) => {

    const new_course = new Course(request.body)

    await new_course.save()

    response.json("Data Saved")

})

CourseRouter.patch('/update/:id/', async(request, response) => {

    const {id} = request.params

    console.log(id)

    await Course.findByIdAndUpdate(id, request.body)

    response.json('Data Updated')

})

CourseRouter.delete('/delete/:id/', async(request, response) => {
    const {id} = request.params

    await Course.findByIdAndDelete(id)

    const course_data = await Course.find({})

    response.json(course_data)

})

export default CourseRouter
import mongoose from "mongoose";

const CourseSchema = mongoose.Schema({

    course_name : String,
    duration : String,
    tools :String,
    prog_lang : String,
    syllabus : String
})

export const Course = mongoose.model('course', CourseSchema)
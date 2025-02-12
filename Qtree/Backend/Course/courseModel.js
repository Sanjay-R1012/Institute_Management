import mongoose from "mongoose";

const CourseSchema = mongoose.Schema({

    course_name : String,
    duration : String,
    tools :Array,
    prog_lang : Array,
    syllabus : String
})

export const Course = mongoose.model('course', CourseSchema)
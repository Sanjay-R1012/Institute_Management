import mongoose from "mongoose";

const StudentSchema = mongoose.Schema({

      studentname : String,
      coursename : String,
      enrolldate : String,
      email : String,
      classtype : String,
      staff:String
})

export const Student = mongoose.model('student', StudentSchema)
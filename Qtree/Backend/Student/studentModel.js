import mongoose from "mongoose";

const StudentSchema = mongoose.Schema({

      studentname : String,
      coursename : String,
      enrolldate : String,
      email : String,
      password : String,
      classtype : String,
      batchno:String,
      staff:String
})

export const Student = mongoose.model('student', StudentSchema)
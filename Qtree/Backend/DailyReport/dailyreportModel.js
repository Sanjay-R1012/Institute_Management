import mongoose from "mongoose";

const ReportSchema = mongoose.Schema({
    date:String,
    attendance : Object,
    todayactivity : String,
    staff : String,
    batch:String
    
})

export const Report = mongoose.model('report', ReportSchema)
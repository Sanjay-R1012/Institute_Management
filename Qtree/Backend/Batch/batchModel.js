import mongoose from "mongoose";

const BatchSchema = mongoose.Schema({

    batchno:String,
    coursename:String,
    classtype:String,
    startingdate:String,
    staff:String,
    selectedtimerange:String,
    selectedstudents:Array
})

export const Batch = mongoose.model('batch', BatchSchema)
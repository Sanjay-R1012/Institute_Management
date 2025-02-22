import mongoose from "mongoose";

const StaffSchema = mongoose.Schema({

      staffname : String,
      handlingcourse : String,
      joiningdate : String,
      email : String,
      classtype : String
})

export const Staff = mongoose.model('staff', StaffSchema)
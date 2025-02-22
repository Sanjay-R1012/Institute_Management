import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: String,
})


export const User = mongoose.model('user', UserSchema)

const RefreshTokenSchema = mongoose.Schema(
    {
        refresh_token:{
            type:String,
            required:true
        }
    }
)

export const RefreshToken = mongoose.model('RefreshToken',RefreshTokenSchema)
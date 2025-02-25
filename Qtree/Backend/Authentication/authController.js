import express, { response } from 'express'
import { User } from './authModel.js'
import crypto from 'crypto'
import { RefreshToken } from './authModel.js'
import jwt from 'jsonwebtoken'

const AuthRouter = express.Router()

AuthRouter.post('/create/user/', async (request, response) => {

    const new_user = new User(request.body)
 
    await new_user.save()
 
    response.json('User Created')
 })

AuthRouter.post('/user/role/', async (request, response) => {

    const user_data = await User.find({email:request.body.email})
    console.log(user_data)
 
    response.json(user_data[0].role)
   
 })

 AuthRouter.patch('/user/update/', async(request, response) => {
 
     let user =await User.find({email:request.body.email})

     const id = user[0]._id

     console.log(id)

     await User.findByIdAndUpdate(id,request.body)
 
     response.json('Data Updated')
 
 })

 AuthRouter.get('/generate/key/',async(request,response)=>{

    const key =crypto.randomBytes(64).toString('hex')

    response.json(key)
})


AuthRouter.post('/login/', async (request, response) => {

    let user_data = await User.find({email: request.body.email})

    if (user_data.length === 0) {

        response.json({
            status: false,
            message: "Invalid Username"
        })
    }
    else {
        if (user_data[0].password === request.body.password) {

            const User ={
                email:request.body.email
            }

            const access_token =jwt.sign(User,process.env.ACCESS_KEY)

            const refresh_token =jwt.sign(User,process.env.REFRESH_KEY)

            const new_token= new RefreshToken({refresh_token})

            await new_token.save()

            response.json({
                status:true,
                access_token,
                refresh_token
            })

        }
        else {
            response.json({
                status: false,
                message: "Invalid Password"
            })
        }
    }
})

AuthRouter.post('/logout/', async (request, response) => {
    let refresh_token1 = request.body.refresh_token

    await RefreshToken.deleteOne({refresh_token:refresh_token1})

    response.json('log Out Successful')

})

AuthRouter.post('/token/', async (request, response) => {
    const refresh_token =request.body.refresh_token

    console.log(refresh_token, "refresh_token")
   
    if(refresh_token == null){
        return response.status(404).json('No token found')
    }

    const token_check = await RefreshToken.findOne({refresh_token:refresh_token})

    console.log(token_check)

    if(token_check == null){
        return response.status(403).json('Invalid Token')
    }


    jwt.verify(refresh_token,process.env.REFRESH_KEY,(error,user) => {

        if(error){
            return response.status(403).json('Token Verifivation Failed')
        }

        const access_token = jwt.sign({email:user.email},process.env.ACCESS_KEY)

        response.json({
            access_token:access_token
        })
    })
})

export default AuthRouter
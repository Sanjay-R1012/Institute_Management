import express from 'express'
import { Staff } from './staffModel.js'
import { authentication } from '../Authentication/authentication.js'

const StaffRouter =express.Router()

StaffRouter.get('/data/',authentication,async(request,response) => {

    const staff_data = await Staff.find({})

    response.json(staff_data)
})

StaffRouter.post('/add/', async (request, response) => {

    const new_staff = new Staff(request.body)

    await new_staff.save()

    response.json("Data Saved")

})

StaffRouter.patch('/update/:id/', async(request, response) => {

    const {id} = request.params

    console.log(id)

    await Staff.findByIdAndUpdate(id, request.body)

    response.json('Data Updated')

})

StaffRouter.delete('/delete/:id/', async(request, response) => {
    const {id} = request.params

    await Staff.findByIdAndDelete(id)

    const staff_data = await Staff.find({})

    response.json(staff_data)

})

export default StaffRouter
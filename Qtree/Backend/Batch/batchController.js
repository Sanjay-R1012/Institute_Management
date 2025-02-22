import express from 'express'
import { Batch } from './batchModel.js'
import { authentication } from '../Authentication/authentication.js'

const BatchRouter =express.Router()

BatchRouter.get('/data/',authentication,async(request,response) => {

    const batch_data = await Batch.find({})

    response.json(batch_data)
})

BatchRouter.post('/add/', async (request, response) => {

    const new_batch = new Batch(request.body)

    await new_batch.save()

    response.json("Data Saved")

})

BatchRouter.patch('/update/:id/', async(request, response) => {

    const {id} = request.params

    console.log(id)

    await Batch.findByIdAndUpdate(id, request.body)

    response.json('Data Updated')

})

BatchRouter.delete('/delete/:id/', async(request, response) => {
    const {id} = request.params

    await Batch.findByIdAndDelete(id)

    const batch_data = await Batch.find({})

    response.json(batch_data)

})

export default BatchRouter
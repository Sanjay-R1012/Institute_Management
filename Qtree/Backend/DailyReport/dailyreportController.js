import express from 'express'
import { Report } from './dailyreportModel.js'
import { authentication } from '../Authentication/authentication.js'

const ReportRouter =express.Router()

ReportRouter.get('/data/',async(request,response) => {

    const reoprt_data = await Report.find({})

    response.json(reoprt_data)
})

ReportRouter.post('/add/',authentication,async (request, response) => {

    const new_reoprt = new Report(request.body)

    await new_reoprt.save()

    response.json("Data Saved")

})

ReportRouter.patch('/update/:id/', async(request, response) => {

    const {id} = request.params

    console.log(id)

    await Report.findByIdAndUpdate(id, request.body)

    response.json('Data Updated')

})

ReportRouter.delete('/delete/:id/', async(request, response) => {
    const {id} = request.params

    await Report.findByIdAndDelete(id)

    const reoprt_data = await Report.find({})

    response.json(reoprt_data)

})

export default ReportRouter
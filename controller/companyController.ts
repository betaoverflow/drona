import express, { Request, Response } from 'express'
import log from '../log'

var router = express.Router()
var ObjectId = require('mongoose').Types.ObjectId
var { company } = require('../models/company')

// get all opportunities
router.get('/', (_, res: Response) => {
    company.find((err: any, response: any) => {
        if (!err) res.send(response)
        else log.error('Error while getting all companies ')
    })
})

// post an opportunity
router.post('/', (req: Request, res: Response) => {
    var newCompany = new company({
        url: req.body.url,
        tag: req.body.tag,
        company: req.body.company,
        role: req.body.role,
        logo: req.body.logo,
    })

    newCompany.save((err: any, response: any) => {
        if (!err) res.send(response)
        else log.error('Error while creating new opportunities')
    })
})

// update a particular opportunity
router.put('/moderator/:id', (req: Request, res: Response) => {
    if (!ObjectId.isValid(req.params.id)) return res.status(400).send('No opportunity with given Id: ' + req.params.id)

    var updateOpportunity = {
        url: req.body.url,
        tag: req.body.tag,
        company: req.body.company,
        role: req.body.role,
        logo:req.body.logo,
        isApproved: req.body.isApproved,
    }

    company.findByIdAndUpdate(req.params.id, { $set: updateOpportunity }, (err: any, response: any) => {
        if (!err) res.send(response)
        else log.info('Error while updating an opportunity: ' + JSON.stringify(err, undefined, 2))
    })
})

// delete a particular opportunity
router.delete('/moderator/:id', (req: Request, res: Response) => {
    if (!ObjectId.isValid(req.params.id)) return res.status(400).send('No opportunity with given id ' + req.params.id)

    company.findByIdAndRemove(req.params.id, (err: any, response: any) => {
        if (!err) res.send(response)
        else log.info('Error while deleting a question' + JSON.stringify(err, undefined, 2))
    })
})

module.exports = router

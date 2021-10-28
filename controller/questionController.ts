import express, { Request, Response, NextFunction } from 'express'
import log from '../log'

var router = express.Router()
var ObjectId = require('mongoose').Types.ObjectId
var { Question } = require('../models/question')

// get all questions
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    Question.find((err: any, response: any) => {
        if (!err) res.send(response)
        else log.error('Error while retrieving all questions: ' + JSON.stringify(err, undefined, 2))
    })
})

// post questions
router.post('/', (req: Request, res: Response) => {
    var newQuestion = new Question({
        title: req.body.title,
        message: req.body.message,
    })

    newQuestion.save((err: any, response: any) => {
        if (!err) res.send(response)
        else log.error('Error while creating new question: ' + JSON.stringify(err, undefined, 2))
    })
})

// update a particular question
router.put('/moderator/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) return res.status(400).send('No question with given Id: ' + req.params.id)

    var updateQuestion = {
        title: req.body.title,
        message: req.body.message,
        isApproved: req.body.isApproved,
    }

    Question.findByIdAndUpdate(req.params.id, { $set: updateQuestion }, (err: any, response: any) => {
        if (!err) res.send(response)
        else log.info('Error while updating a question: ' + JSON.stringify(err, undefined, 2))
    })
})

// delete a particular question
router.delete('/moderator/:id', (req: Request, res: Response) => {
    if (!ObjectId.isValid(req.params.id)) return res.status(400).send('No question with given Id: ' + req.params.id)

    Question.findByIdAndRemove(req.params.id, (err: any, response: any) => {
        if (!err) res.send(response)
        else log.info('Error while deleting a question: ' + JSON.stringify(err, undefined, 2))
    })
})

module.exports = router

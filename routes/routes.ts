import express, { Request, Response } from 'express'
var router = express.Router()

router.get('/', (req: Request, res: Response) => {
    return res.json({ TeamName: 'Betaoverflow' })
})

module.exports = router

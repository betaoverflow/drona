import express, { Request, Response } from 'express'

const { generateFile } = require('../utils/generateFile')
const { executeCpp } = require('../bin/excecuteCpp')
const { executePy } = require('../bin/excecutePy')

var router = express.Router()

router.get('/', (req: Request, res: Response) => {
    return res.json({ TeamName: 'Betaoverflow' })
})

router.post('/run', async (req: Request, res: Response) => {
    // using lang as acro for language and setting default as cpp
    const lang: string | undefined = req.body.lang
    const code: string | undefined = req.body.code

    // incase req.body.code was empty
    if (code === undefined) {
        return res.status(400).json({ success: false, error: 'empty file submitted' })
    }

    try {
        // generate a file
        const filepath: any = await generateFile(lang, code)

        let output = 'blah blah'
        // run the file and send the response
        if (lang === 'cpp') {
            output = await executeCpp(filepath)
        }

        if (lang === 'py') {
            output = await executePy(filepath)
        }

        // sending language and code to the server
        return res.json({ filepath, output })
    } catch (err) {
        res.status(500).json({ error: Error })
    }
})

module.exports = router

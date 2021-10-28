import express, { Request, Response } from 'express'
import multer from 'multer'

const { generateFile } = require('../utils/generateFile')
const { executeCpp } = require('../bin/executeCpp')
const { executePy } = require('../bin/excecutePy')

var router = express.Router()

router.get('/', (req: Request, res: Response) => {
    return res.json({ TeamName: 'Betaoverflow' })
})

const fileName = (__dirname + './code.jpeg') as string

// dummy function
// actual: run detection algo and get text
function detectText(filename: any) {
    console.log(filename)
}

router.get('/code', (req: Request, res: Response) => {
    async function valued() {
        const value = await detectText(fileName)
        return res.json({ code: value })
    }
    valued()
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

        let output
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

//callbacks for storing to Disk Storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'lib/')
    },
    filename: function (req, file, cb) {
        cb(null, 'code.jpeg')
    },
})

//Checking if file is of the allowed types
const fileFilter = (req: Request, file: File, cb: any) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png']
    if (allowedFileTypes.includes(file.type)) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

//saving single file to Disk Storage
let upload = multer({ storage, fileFilter: express })

router.post('/add', upload.single('myFile'), function (req, res, next) {
    // req.file is the `myFile` file
    // req.body will hold the text fields, if there were any
})

module.exports = router

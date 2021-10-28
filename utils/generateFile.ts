import fs from 'fs'
import path from 'path'
import { v4 as uuid } from 'uuid'

const dirCode = path.join(__dirname, '../functions/input') as string

// if the code dir is not found , make it synchronously
if (!fs.existsSync(dirCode)) {
    fs.mkdirSync(dirCode, { recursive: true })
}

const generateFile = async (format: string, code: string) => {
    const jobId: string = uuid()

    // create file for every code we write with format being: filename.lang
    const filename = `${jobId}.${format}` as string

    // create the file in code working dir
    const filepath = path.join(dirCode, filename) as string

    // write code in the corresponding filepath, with code being the file content
    await fs.writeFileSync(filepath, code)

    return filepath
}

module.exports = {
    generateFile,
}

import { exec } from 'child_process'

const executePy = (filepath: string) => {
    return new Promise((resolve, reject) => {
        // exec runs 2 child process together
        exec(`python ${filepath}`, (error, stdout, stderr) => {
            error && reject({ error, stderr })
            stderr && reject(stderr)
            resolve(stdout)
        })
    })
}

module.exports = {
    executePy,
}

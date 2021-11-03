import React, { useState, useEffect } from 'react'
import axios from 'axios'
import EditorText from '../components/EditorText'
import langModeMapper from '../utils/langModeMapper'
import PhotoHandler from '../utils/photoHandler'
import { View } from '../components/Themed'

const Editor = () => {
    const [code, setCode] = useState('')
    const [output, setOutput] = useState('')
    const [lang, setLang] = useState('cpp')

    useEffect(() => {
        try {
            axios.get(`/code`).then(function (response) {
                setCode(response.data.code)
            })
        } catch (err) {
            console.log(err)
        }
    }, [])

    const handleSubmit = async () => {
        const payload = JSON.stringify({
            lang: lang,
            code,
        })

        try {
            const { data } = await axios.post(`/run`, payload, {
                headers: { 'Content-Type': 'application/json' },
            })
            setOutput(data.output)
        } catch ({ response }) {
            if (response) {
                setOutput('Compilation Error')
            } else {
                setOutput('Error connecting to server!')
            }
        }
    }

    return (
        <View>
            <View>
                <EditorText props={{ mode: langModeMapper[lang] }} code={code} setCode={setCode} />
            </View>

            <br />
            <PhotoHandler lang={lang} setLang={setLang} handleSubmit={handleSubmit} />

            <View>{output}</View>
        </View>
    )
}

export default Editor

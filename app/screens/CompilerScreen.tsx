import React, { useState } from 'react'
import axios from 'axios'
import { Text, View } from '../components/Themed'
import { TextInput } from 'react-native-gesture-handler'
import { Picker } from '@react-native-picker/picker'
import { Button } from 'react-native'

const Editor = () => {
    const [code, setCode] = useState('')
    const [output, setOutput] = useState('')
    const [lang, setLang] = useState('cpp')

    const handleSubmit = async () => {
        const payload = JSON.stringify({
            lang: lang,
            code,
        })

        try {
            const { data } = await axios.post('http://localhost:8080/run', payload, {
                headers: { 'Content-Type': 'application/json' },
            })
            setOutput(data.output)
        } catch ({ response }) {
            if (response) {
                const errMsg = response.data.err.stderr
                setOutput(errMsg)
            } else {
                setOutput('Error connecting to server!')
            }
        }
    }

    return (
        <View>
            <TextInput style={{ color: '#232323' }} multiline={true} numberOfLines={4} value={code} onChangeText={code => setCode(code)} />

            <View>
                <Picker selectedValue={lang} onValueChange={(value, index) => setLang(value)} mode="dropdown">
                    <Picker.Item label="C++" value="cpp" />
                    <Picker.Item label="Python" value="py" />
                </Picker>
            </View>
            <Button onPress={handleSubmit} title="Submit" />
            {/* <button onClick={handleSubmit}>
                <Text style={{ color: '#000' }}>Submit</Text>
            </button> */}
            <Text>{output}</Text>
        </View>
    )
}

export default Editor

import React, { useState } from 'react'
import axios from 'axios'
import { Text, View } from '../components/Themed'
import { TextInput } from 'react-native-gesture-handler'
import { Picker } from '@react-native-picker/picker'
import { Button } from 'react-native'
import {CameraOptions, launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { getTextFromMaxOcr } from '../components/compiler/maxOcr'
import { readFile } from 'react-native-fs'

const Editor = () => {
    const [code, setCode] = useState('')
    const [output, setOutput] = useState('')
    const [lang, setLang] = useState('cpp')
    const [filepath, setFilepath] = useState(undefined)

    const handleSubmit = async () => {
        
        // Send image file to OCR and get result
        if (filepath) {
            getTextFromMaxOcr(filepath!);
    
            // const payload = JSON.stringify({
            //     lang: lang,
            //     code,
            // })
    
            // try {
            //     const { data } = await axios.post('http://localhost:8080/run', payload, {
            //         headers: { 'Content-Type': 'application/json' },
            //     })
            //     setOutput(data.output)
            // } catch ({ response }) {
            //     if (response) {
            //         const errMsg = response.data.err.stderr
            //         setOutput(errMsg)
            //     } else {
            //         setOutput('Error connecting to server!')
            //     }
            // }
        }
    }

    const cameraOptions:CameraOptions = {
        saveToPhotos: false,
        mediaType: 'photo',
    }

    const imgCallback = (res: any) => {
        console.log(res);
        if ('didCancel' in res) {
            console.log('cancelled by user');
        } else if ('errorCode' in res) {
            console.log(res.errorCode);
        } else if ('errorMessage' in res) {
            console.log(res.errorMessage);
        } else {
            setFilepath(res.assets[0].uri);
        }
    }

    return (
        <View>
            <TextInput style={{ color: '#232323' }} multiline={true} numberOfLines={4} value={code} onChangeText={code => setCode(code)} />
            <Button onPress={props => launchCamera(cameraOptions, imgCallback)} title="Launch Camera" />
            <Button onPress={props=> launchImageLibrary(cameraOptions, imgCallback)} title="Select from gallery" />
            {
                !filepath ? <Text>No file</Text>: <Text> {filepath} </Text>
            }
            <View>
                <Picker selectedValue={lang} onValueChange={(value, index) => setLang(value)} mode="dropdown">
                    <Picker.Item label="C++" value="cpp" />
                    <Picker.Item label="Python" value="py" />
                </Picker>
            </View>
            <Button onPress={handleSubmit} title="Submit" />
            <Text>{output}</Text>
        </View>
    )
}

export default Editor

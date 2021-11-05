import React, { useState } from 'react'
import axios from 'axios'
import { Text, View } from '../components/Themed'
import { TextInput } from 'react-native-gesture-handler'
import { Picker } from '@react-native-picker/picker'
import { Button } from 'react-native'
import { CameraOptions, launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { getTextFromMaxOcr } from '../components/compiler/maxOcr'
import WebViewEditor from './WebViewEditor'
import { StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'

const Editor = () => {
    const [code, setCode] = useState('')
    const [output, setOutput] = useState('')
    const [lang, setLang] = useState('cpp')
    const [filepath, setFilepath] = useState(undefined)

    const handleSubmit = async () => {
        // Send image file to OCR and get result
        const payload = {
            lang,
            code,
        }

        console.log(payload)

        const codeRes = await axios({
            url: 'https://playground-betaoverflow-2.herokuapp.com/run',
            method: 'POST',
            data: payload,
        })

        const OutputLocal = codeRes.data.output

        setOutput(OutputLocal!)
    }

    const cameraOptions: CameraOptions = {
        saveToPhotos: false,
        mediaType: 'photo',
    }

    const imgCallback = async (res: any) => {
        console.log(res)
        if ('didCancel' in res) {
            console.log('cancelled by user')
        } else if ('errorCode' in res) {
            console.log(res.errorCode)
        } else if ('errorMessage' in res) {
            console.log(res.errorMessage)
        } else {
            const filepathLocal = res.assets[0].uri

            const codeFromOcr = await getTextFromMaxOcr(filepathLocal!)
            setFilepath(filepathLocal)
            setCode(codeFromOcr!)
        }
    }

    const handleWebViewResponse = (data: string) => {
        if (data == 'c_cpp' || data === 'python') {
            setLang(data)
        } else {
            setCode(data)
        }
    }

    return (
        <View style={styles.container}>
            <WebView
                source={{ uri: 'file:///android_asset/editor.html' }}
                onMessage={event => handleWebViewResponse(event.nativeEvent.data)}
            />

            <TextInput style={{ color: '#232323' }} multiline={true} numberOfLines={4} value={code} onChangeText={code => setCode(code)} />
            <Button onPress={props => launchCamera(cameraOptions, imgCallback)} title="Launch Camera" />
            <Button onPress={props => launchImageLibrary(cameraOptions, imgCallback)} title="Select from gallery" />
            {!filepath ? <Text>No file</Text> : <Text> {filepath} </Text>}
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

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        paddingBottom: 15,
    },
    block: {
        width: '90%',
        height: 170,
        borderRadius: 20,
        margin: 15,
        padding: 10,
        marginLeft: '5%',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'transparent',
    },
    column1: {
        flex: 0.7,
        backgroundColor: 'transparent',
        padding: 5,
    },
    column2: {
        flex: 0.3,
        backgroundColor: 'transparent',
        paddingTop: 5,
    },
})

export default Editor

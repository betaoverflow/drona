import React, { useState, useRef } from 'react'
import axios from 'axios'
import { Text, View } from '../components/Themed'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Button } from 'react-native'
import { CameraOptions, launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { getTextFromMaxOcr } from '../components/compiler/maxOcr'
import { StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'

const Editor = () => {
    const [code, setCode] = useState('')
    const [output, setOutput] = useState('')
    const [lang, setLang] = useState('cpp')
    const [filepath, setFilepath] = useState(undefined)
    const webviewRef = useRef<any | null>(null)

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
        console.log(OutputLocal)

        setOutput(OutputLocal!)
    }

    const cameraOptions: CameraOptions = {
        saveToPhotos: false,
        mediaType: 'photo',
    }

    const imgCallback = async (res: any) => {
        // console.log(res)
        if ('didCancel' in res) {
            console.log('cancelled by user')
        } else if ('errorCode' in res) {
            console.log(res.errorCode)
        } else if ('errorMessage' in res) {
            console.log(res.errorMessage)
        } else {
            const filepathLocal = res.assets[0].uri

            const codeFromOcr = await getTextFromMaxOcr(filepathLocal!)
            console.log(res)

            setFilepath(filepathLocal)
            setCode(codeFromOcr!)
            console.log(code)

            const run = `editor.session.setValue('${code}')`
            console.log(run)

            if (webviewRef.current) {
                // console.log(webviewRef.current)
                await webviewRef.current.injectJavaScript(run)
            }
        }
    }

    const handleWebViewResponse = (data: string) => {
        console.log(data)
        switch (data) {
            case 'c_cpp':
                setLang('cpp')
                break
            case 'python':
                setLang('py')
                break
            default:
                setCode(data)
        }
    }

    return (
        <View style={styles.container}>
            <View style={{ height: 350 }}>
                <WebView
                    source={{ uri: 'file:///android_asset/editor.html' }}
                    onMessage={event => handleWebViewResponse(event.nativeEvent.data)}
                    ref={webviewRef}
                />
            </View>

            <View>
                <View style={styles.uploader}>
                    <TouchableOpacity
                        onPress={() => launchCamera(cameraOptions, imgCallback)}
                        style={{ ...styles.button, ...styles.m1, ...styles.buttonSmall }}
                    >
                        <Text style={styles.buttonText}>Launch Camera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => launchImageLibrary(cameraOptions, imgCallback)}
                        style={{ ...styles.button, ...styles.m1, ...styles.buttonSmall }}
                    >
                        <Text style={styles.buttonText}>Select from gallery</Text>
                    </TouchableOpacity>
                </View>
                {/* <TextInput style={{ color: '#232323' }} multiline={true} numberOfLines={4} value={code} onChangeText={code => setCode(code)} /> */}

                <TouchableOpacity onPress={handleSubmit} style={{ ...styles.button, ...styles.m3 }}>
                    <Text style={styles.buttonText}>Run Code</Text>
                </TouchableOpacity>
                <Text>{output}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    buttonSmall: {
        width: 150,
    },
    button: {
        height: 40,
        width: 250,
        alignSelf: 'center',
        color: '#fff',
        backgroundColor: '#0B4068',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
    },
    m3: {
        marginTop: 48,
    },
    m2: {
        marginTop: 32,
    },
    m1: {
        marginTop: 16,
    },
    buttonText: {
        color: '#fff',
    },
    uploader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
})

export default Editor

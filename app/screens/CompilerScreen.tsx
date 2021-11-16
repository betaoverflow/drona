import React, { useState, useRef } from 'react'
import axios from 'axios'
import { Text, View } from '../components/Themed'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Button } from 'react-native'
import { CameraOptions, launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { getTextFromMaxOcr } from '../components/compiler/maxOcr'
import { StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'
import { MaterialIcons, AntDesign } from '@expo/vector-icons'
import { COLORS } from '../constants'

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

            <View style={styles.controls}>
                <View style={styles.uploader}>
                    <TouchableOpacity
                        onPress={() => launchCamera(cameraOptions, imgCallback)}
                        style={{ ...styles.button, ...styles.m1, ...styles.buttonSmall }}
                    >
                        <MaterialIcons name={'camera-alt'} size={24} color={'#fff'} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => launchImageLibrary(cameraOptions, imgCallback)}
                        style={{ ...styles.button, ...styles.m1, ...styles.buttonSmall }}
                    >
                        <MaterialIcons name={'upload-file'} size={24} color={'#fff'} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={handleSubmit} style={{ ...styles.button, ...styles.m1, ...styles.primaryBtnColor }}>
                    <AntDesign name="codesquare" size={24} color="white" />
                    <Text style={styles.buttonText}>run code</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.outputArea}>
                <Text style={styles.outputText}>Output</Text>
                <View style={styles.output}>
                    <Text style={styles.buttonText}>{output ? output: 'Click on camera or gallery to upload image, edit and run your code'}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    buttonSmall: {
        width: 70,
        fontWeight: '800',
    },
    outputText: {
        fontSize: 19,
        marginLeft: 18,
        marginBottom: 12,
        fontWeight: '700',
    },
    primaryBtnColor: {
        backgroundColor: COLORS.blue,
    },
    button: {
        height: 40,
        width: 130,
        alignSelf: 'center',
        color: '#fff',
        backgroundColor: '#232323',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
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
    controls: {
        display: 'flex',
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    uploader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: 180,
    },
    outputArea: {
        marginTop: 50,
    },
    output: {
        minHeight: 70,
        width: 369,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#333',
        borderRadius: 12,
        color: '#fff',
        padding: 16,
    },
})

export default Editor

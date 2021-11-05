import WebView from "react-native-webview"
import React from 'react'

const WebViewEditor = () => {
    return <WebView
        source={{uri: 'file:///android_asset/editor.html'}}
    />
}

export default WebViewEditor
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Firebase from './Firebase'
import * as firebase from 'firebase/app'

import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
import { firebaseConfig } from './config/firebase'


export default function App() {
    const isLoadingComplete = useCachedResources()
    const colorScheme = useColorScheme()
    firebase.initializeApp(firebaseConfig)
    if (!isLoadingComplete) {
        return null
    } else {
        return (
            <SafeAreaProvider>
                <Navigation colorScheme={colorScheme} />
                <StatusBar />
                {/* <Firebase /> */}
            </SafeAreaProvider>
        )
    }
}

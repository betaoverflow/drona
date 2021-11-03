import * as React from 'react'
import { StyleSheet } from 'react-native'
import ConfirmedQuestions from '../components/ConfirmedQuestions'
import { Text, View } from '../components/Themed'

export default function TabTwoScreen() {
    return (
        <View style={styles.container}>
            <ConfirmedQuestions />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})

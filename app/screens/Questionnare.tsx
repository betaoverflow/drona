import * as React from 'react'
import { TouchableOpacity, StyleSheet, Linking } from 'react-native'
import ConfirmedQuestions from '../components/ConfirmedQuestions'
import { Text, View } from '../components/Themed'

export default function TabTwoScreen() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://drona-gamma.vercel.app/contribute')}>
                <Text style={styles.title}>CONTRIBUTE</Text>
            </TouchableOpacity>
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
        fontSize: 18,
        fontWeight: 'bold',
        color:"#fff"
    },
    button: {
        backgroundColor: '#232323',
        padding: 15,
        marginTop: 20,
        width: '80%',
        borderRadius: 20,
        alignItems: 'center',
    },
})

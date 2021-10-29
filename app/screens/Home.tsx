import * as React from 'react'
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Text, View } from '../components/Themed'
import { RootTabScreenProps } from '../types'

export default function Home({ navigation }: RootTabScreenProps<'Home'>) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate('Compiler')}>
                    <LinearGradient colors={['#6FB1FC', '#4364F7', '#0052D4']} start={{ x: -0.3, y: 0.2 }} style={styles.block}>
                        <Text style={styles.title}>Run your hand-written code.</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Questionnaire')}>
                    <LinearGradient colors={['#FFAC71', '#FF8450']} start={{ x: -0.3, y: 0.2 }} style={styles.block}>
                        <Text style={styles.title}>Practice from unlimited questions</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Opportunities')}>
                    <LinearGradient colors={['#00CDAC', '#02AAB0']} start={{ x: -0.3, y: 0.2 }} style={styles.block}>
                        <Text style={styles.title}>Get constant updates</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </ScrollView>
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
    block: {
        width: '95%',
        height: '180px',
        borderRadius: 20,
        margin: 10,
        padding: 10,
    },
})

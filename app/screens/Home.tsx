import * as React from 'react'
import { StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Text, View } from '../components/Themed'
import { RootTabScreenProps } from '../types'

export default function Home({ navigation }: RootTabScreenProps<'Home'>) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate('Compiler')} style={{ marginTop: 30 }}>
                    <LinearGradient colors={['#6FB1FC', '#4364F7']} start={{ x: 0, y: 0.2 }} style={styles.block}>
                        <View style={styles.row}>
                            <View style={styles.column1}>
                                <Text style={styles.title}>Run your hand-written code.</Text>
                                <Text>Run your hand-written code and code on your phone in three clicks</Text>
                            </View>
                            <View style={styles.column2}>
                                <Image source={require('../assets/images/test.png')} />
                            </View>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Questionnaire')}>
                    <LinearGradient colors={['#FFAC71', '#FF8450']} start={{ x: 0, y: 0.2 }} style={styles.block}>
                        <View style={styles.row}>
                            <View style={styles.column1}>
                                <Text style={styles.title}>Practice from unlimited questions</Text>
                                <Text>Practice from unlimited questions through crowdsourcing and our editor.</Text>
                            </View>
                            <View style={styles.column2}>
                                <Image source={require('../assets/images/test.png')} />
                            </View>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
                {/* just for testing */}
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <LinearGradient colors={['#FFAC71', '#FF8450']} start={{ x: 0, y: 0.2 }} style={styles.block}>
                        <View style={styles.row}>
                            <View style={styles.column1}>
                                <Text style={styles.title}>TEST</Text>
                                <Text>TEST</Text>
                            </View>
                            <View style={styles.column2}>
                                <Image source={require('../assets/images/test.png')} />
                            </View>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Opportunities')}>
                    <LinearGradient colors={['#00CDAC', '#02AAB0']} start={{ x: 0, y: 0.2 }} style={styles.block}>
                        <View style={styles.row}>
                            <View style={styles.column1}>
                                <Text style={styles.title}>Get constant updates</Text>
                                <Text>Get constant updates on internship, oss, placement, and other opportunities.</Text>
                            </View>
                            <View style={styles.column2}>
                                <Image source={require('../assets/images/test.png')} />
                            </View>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            </ScrollView>
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

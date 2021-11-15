import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { View, Text } from './Themed'
import { Transition, Transitioning } from 'react-native-reanimated'
import { MaterialIcons } from '@expo/vector-icons'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const transition = (
    <Transition.Together>
        <Transition.In type="fade" durationMs={200} />
        <Transition.Change />
        <Transition.Out type="fade" durationMs={200} />
    </Transition.Together>
)

function ConfirmedQuestions() {
    const [currentIndex, setCurrentIndex] = React.useState(null)
    const ref = useRef<any>(null)
    const [questions, setQuestions] = useState<any[]>([])
    useEffect(() => {
        try {
            axios.get(`http://drona-ibm.herokuapp.com/api/questions`).then(function (response) {
                // handle success
                setQuestions(response.data)
            })
        } catch (err) {
            console.log(err)
        }
    }, [])
    return (
        <ScrollView>
            <Transitioning.View ref={ref} transition={transition}>
                <View style={styles.container}>
                    {questions.map(question => {
                        if (question.isApproved == true) {
                            return (
                                <View key={question._id} style={styles.cardContainer}>
                                    <View style={styles.card}>
                                        <Text style={styles.heading}>{question.title}</Text>
                                        <TouchableOpacity
                                            key={question._id}
                                            onPress={() => {
                                                if (ref != null) {
                                                    if (ref.current != null) {
                                                        ref.current.animateNextTransition()
                                                        setCurrentIndex(question._id === currentIndex ? null : question._id)
                                                    }
                                                }
                                            }}
                                            activeOpacity={0.9}
                                        >
                                            <MaterialIcons
                                                name={question._id === currentIndex ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                                                color="#fff"
                                                size={30}
                                            />
                                        </TouchableOpacity>
                                    </View>

                                    {question._id === currentIndex && (
                                        <View style={styles.block}>
                                            <Text style={styles.message}>{question.message}</Text>
                                        </View>
                                    )}
                                </View>
                            )
                        }
                    })}
                </View>
            </Transitioning.View>
        </ScrollView>
    )
}

export default ConfirmedQuestions

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 20,
        marginBottom: 60,
    },
    cardContainer: {
        minWidth: '100%',
        padding: 10,
    },
    card: {
        flexGrow: 1,
        backgroundColor: '#2E2D2D',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-between',
        height: 80,
    },
    block: {
        backgroundColor: '#2E2D2D',
        padding: 20,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    message: {
        color: '#fff',
        fontWeight: 'bold',
    },
})

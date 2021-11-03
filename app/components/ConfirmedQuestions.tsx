import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import baseAddress from '../utils/baseAddress'
import { View, Text } from './Themed'
import { Transition, Transitioning } from 'react-native-reanimated'
import { MaterialIcons } from '@expo/vector-icons'
import { StyleSheet, TouchableOpacity } from 'react-native'

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
            axios.get(`${baseAddress}/api/questions`).then(function (response) {
                // handle success
                setQuestions(response.data)
            })
        } catch (err) {
            console.log(err)
        }
    }, [])
    return (
        <Transitioning.View ref={ref} transition={transition}>
            <View style={styles.container}>
                {questions.map(question => {
                    if (question.isApproved == true) {
                        return (
                            <View key={question._id}>
                                <View style={styles.card}>
                                    <Text>{question.title}</Text>
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
                                    <View>
                                        <Text>{question.message}</Text>
                                    </View>
                                )}
                            </View>
                        )
                    }
                })}
            </View>
        </Transitioning.View>
    )
}

export default ConfirmedQuestions

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    card: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    heading: {
        fontSize: 38,
        fontWeight: '900',
        textTransform: 'uppercase',
        letterSpacing: -2,
    },
    body: {
        fontSize: 20,
        lineHeight: 20 * 1.5,
        textAlign: 'center',
    },
    subCategoriesList: {
        marginTop: 20,
    },
})
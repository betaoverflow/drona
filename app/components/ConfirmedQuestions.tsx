import React, { useState, useEffect } from 'react'
import axios from 'axios'
import baseAddress from '../utils/baseAddress'
import { View, Text } from './Themed'

function ConfirmedQuestions() {
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
        <View>
            {questions.map(question => {
                if (question.isApproved == true) {
                    return (
                        <View key={question._id}>
                            <Text key={question._id}>{question.title}</Text>
                            <Text>{question.message}</Text>
                        </View>
                    )
                }
            })}
        </View>
    )
}

export default ConfirmedQuestions

import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

export default function questionContribute() {
    const [questions, setQuestions] = useState<any[]>([])

    useEffect(() => {
        if (localStorage.getItem('token')) {
            try {
                axios.get(`http://localhost:8080/api/questions`).then(function (response) {
                    // handle success
                    setQuestions(response.data)
                })
            } catch (err) {
                console.log(err)
            }
        } else {
            alert('You are not logged in')
            window.location.href = '/href'
        }
    })

    return (
        <div>
            <h1>Verify Questions</h1>
        </div>
    )
}

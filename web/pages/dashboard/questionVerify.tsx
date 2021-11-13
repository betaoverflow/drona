import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Head from 'next/head'
import styles from '../../styles/Dashboard.module.scss'

function toApprove(id: string) {
    try {
        axios.put(`http://drona-ibm.herokuapp.com/api/questions/moderator/${id}`, { isApproved: 'true' }).then(function (response) {
            // handle success
            console.log(response)
        })
    } catch (err) {
        console.log(err)
    }
}

export default function QuestionContribute() {
    const [questions, setQuestions] = useState<any[]>([])

    useEffect(() => {
        if (localStorage.getItem('token')) {
            try {
                axios.get(`http://drona-ibm.herokuapp.com/api/questions`).then(function (response) {
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
    }, [])

    return (
        <>
            <Head>
                <title>Drona | Question Verify</title>
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/256x256.png"></link>

                <meta name="description" content="Empowering everyone to code with IBM's eye" />
                <link rel="icon" href="/256x256.png" />
            </Head>

            <div className="questions mt2">
                {questions.map(question => {
                    return (
                        <div key={question._id}>
                            <article className={styles.question} style={{ height: '250px', textAlign: 'center' }}>
                                <div key={question._id} className={styles.questionContent}>
                                    <h1 className={styles.questionTitle} key={question._id}>
                                        {question.title}
                                    </h1>
                                    <br />
                                    <p className={styles.questionMessage}>{question.message}</p>
                                    <br />
                                    {question.isApproved ? (
                                        <button className={styles.btnSuccess}> ✅ Approved</button>
                                    ) : (
                                        <button className={styles.btnDanger} onClick={() => toApprove(question._id)}>
                                            {' '}
                                            🙋🏻 Approve
                                        </button>
                                    )}
                                </div>
                            </article>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

export default function opportunityVerify() {
    const [opportunity, setOpportunity] = useState<any[]>([])

    useEffect(() => {
        if (localStorage.getItem('token')) {
            try {
                axios.get(`http://localhost:8080/api/oportunity`).then(function (response) {
                    // handle success
                    setOpportunity(response.data)
                })
            } catch (error) {
                console.log(error)
            }
        } else {
            alert('You are not logged in!')
            window.location.href = '/admin'
        }
    }, [])

    return (
        <div>
            <h1>Opportunity Verify</h1>
        </div>
    )
}

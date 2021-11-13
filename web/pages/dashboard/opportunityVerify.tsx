import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function OpportunityVerify() {
    const [opportunity, setOpportunity] = useState<any[]>([])

    useEffect(() => {
        if (localStorage.getItem('token')) {
            try {
                axios.get(`http://drona-ibm.herokuapp.com/api/oportunity`).then(function (response) {
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
        <>
            <h1>Opportunity Verify</h1>
        </>
    )
}

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Text } from '../Themed'

interface company {
    _id: number
    url: string
    tag: string
    company: string
    role: string
    logo: string
    isApproved: boolean
}

export default async function ConfirmedOpportunity() {
    let opportunity: company[] | null = []
    
    try {
        await axios.get(`http://drona-ibm.herokuapp.com/api/opportunity`).then(function (response) {
            opportunity = response.data
        })
    } catch (error) {
        console.log(error)
    }

    let ConfirmedOpportunities: company[] = []

    ConfirmedOpportunities = opportunity.filter(item => item.isApproved === true);

    return ConfirmedOpportunities
}



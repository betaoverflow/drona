import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../../styles/Dashboard.module.scss'
import Link from 'next/link'

function toApprove(id: string) {
    try {
        axios.put(`http://drona-ibm.herokuapp.com/api/opportunity/moderator/${id}`, { isApproved: 'true' }).then(function (response) {
            // handle success
            console.log(response)
        })
    } catch (err) {
        console.log(err)
    }
}

export default function OpportunityVerify() {
    const [opportunities, setOpportunities] = useState<any[]>([])

    useEffect(() => {
        if (localStorage.getItem('token')) {
            try {
                axios.get(`http://drona-ibm.herokuapp.com/api/opportunity`).then(function (response) {
                    // handle success
                    setOpportunities(response.data)
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
            <Head>
                <title>Drona | Opportunities Verify</title>
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/256x256.png"></link>

                <meta name="description" content="Empowering everyone to code with IBM's eye" />
                <link rel="icon" href="/256x256.png" />
            </Head>

            <div className="opportunities mt2">
                {opportunities.map(opportunity => {
                    return (
                        <div key={opportunity._id}>
                            <article className={styles.opportunity}>
                                <div key={opportunity._id} className={styles.opportunityContent}>
                                    <Link href={opportunity.url}>
                                        <div>
                                            <img src={opportunity.logo} alt="logo" height="150px" width="200px" />
                                            <h1 className={styles.opportunityTitle} key={opportunity._id}>
                                                {opportunity.role} ({opportunity.tag})
                                            </h1>
                                        </div>
                                    </Link>
                                    {opportunity.isApproved ? (
                                        <button className={styles.btnSuccess}> ✅ Approved</button>
                                    ) : (
                                        <button className={styles.btnDanger} onClick={() => toApprove(opportunity._id)}>
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

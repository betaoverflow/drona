import React from 'react'
import { Grid, Button, TextField } from '@material-ui/core'
import Head from 'next/head'
import axios from 'axios'
import { useState } from 'react'
import styles from '../styles/Contribute.module.scss'

async function handleSubmit(url: string, tag: string, company: string, role: string, logo: string) {
    const payload = JSON.stringify({
        url: url,
        tag: tag,
        company: company,
        role: role,
        logo: logo,
    })

    try {
        const data = await axios.post(`http://drona-ibm.herokuapp.com/api/opportunity`, payload, {
            headers: { 'Content-Type': 'application/json' },
        })
        window.location.href = '/opportunity'
        console.log(data, 'Opportunity has been added')
    } catch (err) {
        console.log('Error while adding question to database ' + err)
    }
}

const Opportunities = () => {
    const [url, setUrl] = useState('https://drona-drab.vercel.app/')
    const [tag, setTag] = useState('SDE intern')
    const [company, setCompany] = useState('Drona')
    const [role, setRole] = useState('job')
    const [logo, setLogo] = useState('https://res.cloudinary.com/dguy8qpzi/image/upload/v1635952594/achieve_hmzdar.png')

    return (
        <>
            <Head>
                <title>Drona | Contribute Opportunity </title>
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/256x256.png"></link>

                <meta name="description" content="Empowering everyone to code with IBM's eye" />
                <link rel="icon" href="/256x256.png" />
            </Head>
            <div className={styles.container}>
                <Grid container className={styles.card}>
                    <Grid item xs={12} sm={12} md={7}>
                        <img
                            src="https://res.cloudinary.com/dguy8qpzi/image/upload/v1636637981/drona-opportunity_mt1axs.png"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            alt="Opportunities UI drona"
                        />
                    </Grid>
                    <Grid container item xs={12} sm={12} md={5} alignItems="center" direction="column" style={{ padding: 10 }}>
                        <div className={styles.form}>
                            <div className={styles.name}>DRONA</div>

                            <div className={styles.heading}>Lets make aware them about this!</div>

                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                label="Link"
                                placeholder="Enter the link to apply"
                                margin="normal"
                                type="string"
                                className={styles.formText}
                                onChange={e => setUrl(e.target.value)}
                            />
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                label="Role"
                                placeholder="Enter the job role"
                                margin="normal"
                                type="string"
                                className={styles.formText}
                                onChange={e => setRole(e.target.value)}
                            />
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                label="Company"
                                placeholder="Enter the name of the company"
                                margin="normal"
                                type="string"
                                className={styles.formText}
                                onChange={e => setCompany(e.target.value)}
                            />
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                label="Job"
                                placeholder="Enter the type of job (internship/fulltime)"
                                margin="normal"
                                type="string"
                                className={styles.formText}
                                onChange={e => setTag(e.target.value)}
                            />
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                label="Logo"
                                placeholder="Enter the url of logo"
                                margin="normal"
                                type="string"
                                className={styles.formText}
                                onChange={e => setLogo(e.target.value)}
                            />

                            <br />
                            <Button
                                style={{ backgroundColor: '#000', color: '#FFFFFF', fontWeight: 800 }}
                                onClick={() => handleSubmit(url, tag, company, role, logo)}
                            >
                                Submit
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Opportunities

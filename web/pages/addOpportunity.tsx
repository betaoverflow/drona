import React, { useState } from 'react'
import { Grid, Button, TextField } from '@material-ui/core'
import styles from '../styles/Contribute.module.scss'
import Head from 'next/head'
import axios from 'axios'

async function handleSubmit(url: string, tag: string, company: string, role:string, logo:string) {
    const payload = JSON.stringify({
        url:url,
        tag:tag,
        company:company,
        role:role,
        logo:logo,
    })
    try {
        const data = await axios.post(`http://drona-ibm.herokuapp.com/api/opportunity`, payload, {
            headers: { 'Content-Type': 'application/json' },
        })
        // window.location.href = '/addOpportunity'
        console.log(data, 'Opportunity has been added')
    } catch (error) {
        console.log('Error while adding opportunity to database' + error)
    }
}

const Contribute = () => {
    const [url, setUrl] = useState('')
    const [tag, setTag] = useState('')
    const [company, setCompany] = useState('')
    const [role, setRole] = useState('')
    const [logo, setLogo] = useState('')
    return (
        <>
            <Head>
                <title>Drona | Add Opportunity</title>
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/256x256.png"></link>
                <meta name="description" content="Empowering everyone to code with IBM's eye" />
                <link rel="icon" href="/256x256.png" />
            </Head>
            <div className={styles.container}>
                <Grid container className={styles.card}>
                    <Grid item xs={12} sm={12} md={7}>
                        <img
                            src="https://res.cloudinary.com/dguy8qpzi/image/upload/v1635971918/contribute-img-drona_hjcqbi.png"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            alt="contribute UI fixed"
                        />
                    </Grid>
                    <Grid container item xs={12} sm={12} md={5} alignItems="center" direction="column" style={{ padding: 10 }}>
                        <div className={styles.form}>
                            <div className={styles.headingOpp}>DRONA - Show the power of Crowdsource</div>
        
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                label="Link to Opportunity"
                                margin="normal"
                                type="string"
                                className={styles.formText}
                                onChange={e => setUrl(e.target.value)}
                            />

                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                label="Internship / Job / Other"
                                margin="normal"
                                type="string"
                                className={styles.formText}
                                onChange={e => setTag(e.target.value)}
                            />

                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                label="Company"
                                margin="normal"
                                type="string"
                                className={styles.formText}
                                onChange={e => setCompany(e.target.value)}
                            />

                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                label="Role"
                                margin="normal"
                                type="string"
                                className={styles.formText}
                                onChange={e => setRole(e.target.value)}
                            />

                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                label="Link to logo"
                                margin="normal"
                                type="string"
                                className={styles.formText}
                                onChange={e => setLogo(e.target.value)}
                            />
                            <br />
                            <Button
                                style={{ backgroundColor: '#000', color: '#FFFFFF', fontWeight: 800 }}
                                onClick={() => handleSubmit(url,tag,company,role,logo)}
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

export default Contribute

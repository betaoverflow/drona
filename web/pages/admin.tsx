import React, { useState } from 'react'
import { Grid, Button, TextField } from '@material-ui/core'
import styles from '../styles/admin.module.scss'
import Head from 'next/head'

async function loginUser(email: string, password: string) {
    try {
        const response = await fetch('http://drona-ibm.herokuapp.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })

        const data = await response.json()

        if (data.user) {
            localStorage.setItem('token', data.user)
            window.location.href = '/dashboard'
        } else {
            console.log('Error: Please check your username and password')
        }
    } catch (error) {
        console.log('Error: Please check your username and password')
    }
}

const Admin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <Head>
                <title>Drona | Admin Login</title>
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/256x256.png"></link>

                <meta name="description" content="Empowering everyone to code with IBM's eye" />
                <link rel="icon" href="/256x256.png" />
            </Head>
            <div className={styles.container}>
                <Grid container className={styles.card}>
                    <Grid item xs={12} sm={12} md={7}>
                        <img
                            src="https://res.cloudinary.com/dguy8qpzi/image/upload/v1635971918/login-drona_ae2rap.png"
                            // style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            alt="admin drona UI"
                        />
                    </Grid>
                    <Grid container item xs={12} sm={12} md={5} alignItems="center" direction="column" style={{ padding: 10 }}>
                        <div className={styles.form}>
                            <div className={styles.name}>DRONA</div>

                            <div className={styles.heading}>Log in to your account</div>
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                label="Email address"
                                margin="normal"
                                type="email"
                                className={styles.formText}
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />

                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                label="Password"
                                margin="normal"
                                type="password"
                                className={styles.formText}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <br />
                            <Button
                                style={{ backgroundColor: '#000', color: '#FFFFFF', fontWeight: 800 }}
                                onClick={() => loginUser(email, password)}
                            >
                                Log In
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Admin

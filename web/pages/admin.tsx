import React from "react";
import { Grid, Button, TextField } from "@material-ui/core";
import styles from '../styles/admin.module.scss';

const Admin = () => {
    return(
        <>
        <div>
            <Grid container style={{ minHeight: '100vh' }}>
                <Grid item xs={12} sm={6}>
                    <img
                        src="https://cdn.dribbble.com/users/345970/screenshots/14741336/media/0d7f0ffe406091da256fa30df972e439.png"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </Grid>
                <Grid container item xs={12} sm={6} alignItems="center" direction="column" style={{ padding: 10 }}>
                    <div className={styles.form}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <div className={styles.name}>DRONA</div>

                            <div className={styles.heading}>Log in to your account</div>
                            
                            <div className={styles.login}>Email Address</div>
                            <TextField
                                label="Email address"
                                margin="normal"
                                type="email"
                                // onChange={e => setTitle(e.target.value)}
                                className={styles.formText}
                            />

                            <div className={styles.login}>Password</div>
                            <TextField
                                label="Password"
                                margin="normal"
                                type="password"
                                // onChange={e => setMessage(e.target.value)}
                                className={styles.formText}
                            />
                            <div className={styles.remember}>Keep me logged in</div>

                            <br />
                            <Button color="primary" variant="contained" /*onClick={() => handleSubmit(title, message)}*/>
                                Log In
                            </Button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
        </>
    )
}

export default Admin;
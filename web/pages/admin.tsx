import React from "react";
import { Grid, Button, TextField } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
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
                    <div  className={styles.form}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                            >
                            <div className={styles.name}>DRONA</div>

                            <div className={styles.heading}>Log in to your account</div>
                            
                            {/* <div className={styles.login}>Email Address</div> */}
                            
                            <TextField 
                            id="outlined-basic" 
                            variant="outlined" 
                            label="Email address"
                            margin="normal"
                            type="email"
                            className={styles.formText}
                            // onChange={e => setTitle(e.target.value)}
                            />

                            {/* <div className={styles.login}>Password</div> */}
                            <TextField 
                            id="outlined-basic" 
                            variant="outlined" 
                            label="Password"
                            margin="normal"
                            type="password"
                            className={styles.formText}
                            // onChange={e => setTitle(e.target.value)}
                            />

                            <div className={styles.remember}><Checkbox style={{color: '#0B4068', }}/>Keep me logged in</div>
                            
                            <br />

                            <Button 
                            style={{backgroundColor: '#0B4068', color: '#FFFFFF', width: '160px'}}
                            >Log IN</Button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
        </>
    )
}

export default Admin;
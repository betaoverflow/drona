import Link from 'next/link'
import React from 'react'
import styles from '../../styles/question.module.scss'

const HomeContribute: React.FC = () => {
    return (
    <>
        <div className={styles.contribute}>
            <div className={styles.container}>
                <div className={styles.text} style={{color:"#fff"}}>
                    <h1>Be the senior you wanted<br/>as a junior</h1>
                    <div className={styles.buttons}>
                        <div className={styles.download} ><Link href="/contribute">Contribute</Link></div>
                    </div>
                </div>
                <div className={styles.image}>
                    {/* <div className={styles.arrow}><img src='https://res.cloudinary.com/dguy8qpzi/image/upload/v1636274945/Arrow_xujefk.svg'></img></div> */}
                    <div className={styles.card}><img src='https://res.cloudinary.com/dguy8qpzi/image/upload/v1636727665/image-removebg-preview_17_m6fgpg.png'></img></div>
                </div>
            </div>
        </div>
    </>
    )
}

export default HomeContribute

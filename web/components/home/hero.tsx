import React from 'react'
import styles from '../../styles/Hero.module.scss'
import Link from 'next/link'

const Hero: React.FC = () => {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.leftContainer}>
                <h1 className={styles.heading}> Empowering everyone to code with IBMs eye</h1>
                <p className={styles.subheading}>
                    Play around with code while we make sure you are not lost! Join us and code laptop-free, stay updated and never miss an
                    opportunity again and lastly be interview-ready with our crowdsourced question bank.
                </p>
                <div className={styles.buttons} style={{ justifyItems: 'left' }}>
                    <Link href="https://youtu.be/6pJpVtOlgMc" passHref={true}>
                        <div className={styles.demo}>Watch a demo</div>
                    </Link>
                    <Link href="https://bit.ly/ibmdronaapk" passHref={true}>
                        <div className={styles.download}>Download APK</div>
                    </Link>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <img
                    src="https://res.cloudinary.com/dguy8qpzi/image/upload/v1636871242/screen1_fqyyck.svg"
                    width={300}
                    height={620}
                    className={styles.mainImage}
                    alt="Drona mobile app home screen"
                />
            </div>
        </div>
    )
}

export default Hero

import React from 'react'
import styles from '../../styles/Hero.module.scss'
import Image from 'next/image'
const Hero: React.FC = () => {
    return (
        <div>
            <div style={{ float: 'left' }}>
                <h1 className={styles.heading}>
                    {' '}
                    Empowering everyone <br /> to code with IBM's eye
                </h1>
                <div className={styles.buttons}>
                    <div className={styles.getstarted}>Get Started</div>
                    <div className={styles.download}>Download</div>
                </div>
            </div>
            <div style={{ float: 'right' }}>
                <Image
                    src="https://res.cloudinary.com/dguy8qpzi/image/upload/v1636009473/drona-homeui_xqlfkq.png"
                    width={380}
                    height={700}
                    className={styles.mainImage}
                    alt="Drona mobile app home screen"
                />
            </div>
        </div>
    )
}

export default Hero

import React from 'react'
import styles from '../../styles/Hero.module.scss'
import Image from 'next/image'
const Hero: React.FC = () => {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.leftContainer}>
                <h1 className={styles.heading}> Empowering everyone to code with IBMs eye</h1>
                <p className={styles.subheading}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus velit eget magna tincidunt, nec sollicitudin neque
                    ultrices. Sed lobortis eros sit amet venenatis accumsan. Integer sit amet sollicitudin purus. Proin fringilla iaculis
                    felis in mollis. Donec suscipit iaculis neque, vel ultricies diam consequat non.
                </p>
                <div className={styles.buttons}>
                    <div className={styles.demo}>Watch a demo</div>
                    <div className={styles.download}>Download APK</div>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <img
                    src="https://res.cloudinary.com/dguy8qpzi/image/upload/v1636009473/drona-homeui_xqlfkq.png"
                    width={380}
                    height={700}
                    className={styles.mainImage}
                    alt="Drona mobile app home screen"
                />
            </div>
            {/* <div style={{ float: 'left' }}>
                <h1 className={styles.heading}>
                    {' '}
                    Empowering everyone <br /> to code with IBM's eye
                </h1>
                <p className={styles.subheading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus velit eget magna tincidunt,<br/> nec sollicitudin neque ultrices. Sed lobortis eros sit amet venenatis accumsan. Integer sit<br/> amet sollicitudin purus. Proin fringilla iaculis felis in mollis. Donec suscipit iaculis neque, vel<br/> ultricies diam consequat non. </p>
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
            </div> */}
        </div>
    )
}

export default Hero

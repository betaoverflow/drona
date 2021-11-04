import React from 'react'
import styles from '../../styles/Hero.module.scss'

const Hero: React.FC = () => {
    return (
        <div>
            <div style={{ float: 'left' }}>
                <h1 className={styles.heading}>
                    {' '}
                    Empowering everyone <br /> to code with IBM's eye
                </h1>
            </div>
            <div style={{ float: 'right' }}>
                <img
                    src="https://res.cloudinary.com/dguy8qpzi/image/upload/v1636009473/drona-homeui_xqlfkq.png"
                    className={styles.mainImage}
                />
            </div>
        </div>
    )
}

export default Hero

import React from 'react'
import Link from 'next/link'
import styles from '../../styles/opportunities.module.scss'

const Opportunities: React.FC = () => {
    return (
        <>
            <div className={styles.contribute}>
                <div className={styles.container}>
                    <div className={styles.text} style={{ color: '#fff' }}>
                        <h1>Never miss a deadline again, and stay updated about new opportunities.</h1>
                        <div className={styles.buttons}>
                            <div className={styles.download}>
                                <Link href="/opportunities">View Opportunities</Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.image}>
                        <div className={styles.card}>
                            <img
                                src="https://res.cloudinary.com/dguy8qpzi/image/upload/v1636730647/image-removebg-preview_18_qmg7q2.png"
                                alt="opportunities"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Opportunities

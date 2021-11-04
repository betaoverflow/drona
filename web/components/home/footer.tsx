import React from 'react'
import styles from '../../styles/Footer.module.scss'

const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerText}>
                Engineered with <span style={{ color: '#e25555' }}>&hearts;</span> by BetaOverflow
            </div>
        </div>
    )
}

export default Footer

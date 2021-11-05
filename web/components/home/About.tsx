import React from 'react'
import styles from '../../styles/about.module.scss'

const Aboutcard = (props: any) => {
    return (
        <div className={styles.aboutcard}>
            <div className={styles.cardtext}>
                <div className={styles.cardheading}>{props.Heading}</div>
                <div className={styles.cardsubheading}>{props.Subheading}</div>
            </div>
            <div className={styles.logo}>
                <img src={props.logo} />
                </div>
        </div>
    )
}

const Aboutcarddata = [
    {
        id: 1,
        Heading: 'Run Your Hand-Written Code',
        Subheading: 'Run your hand-written code and code on your phone in three clicks',
        logo: 'https://res.cloudinary.com/dguy8qpzi/image/upload/v1636101907/test2_dw2nae.png',
    },

    {
        id: 2,
        Heading: 'Practice from unlimited questions.',
        Subheading: 'Practice from unlimited questions through crowdsourcing and our editor.',
        logo: 'https://res.cloudinary.com/dguy8qpzi/image/upload/v1636101907/test2_dw2nae.png',
    },

    {
        id: 3,
        Heading: 'Get constant updates',
        Subheading: 'Get constant updates on internship, oss, placement, and other opportunities.',
        logo: 'https://res.cloudinary.com/dguy8qpzi/image/upload/v1636101907/test2_dw2nae.png',
    },
]

const About = () => {
    return (
        <>
            <div className={styles.about}>
                <div className={styles.heading}>What it does</div>
                <div className={styles.aboutcards}>
                    {Aboutcarddata.map(function ncards(val) {
                        return <Aboutcard key={val.id} Heading={val.Heading} Subheading={val.Subheading} logo={val.logo} />
                    })}
                </div>
            </div>
        </>
    )
}

export default About

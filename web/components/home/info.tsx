import React from 'react'
import styles from '../../styles/info.module.scss'

const Infocard = (props: any) => {
    return (
        <div className={styles.infocard}>
            <div className={styles.logo}>
                <img src={props.logo} />
            </div>
            <div className={styles.cardtext}>
                <div className={styles.cardheading}>{props.Heading}</div>
                <div className={styles.cardsubheading}>{props.Subheading}</div>
            </div>
            
        </div>
    )
}

const Infocarddata = [
    {
        id: 1,
        logo: 'https://res.cloudinary.com/dguy8qpzi/image/upload/v1636028569/create_a4ndl4.svg',
        Heading: 'Add your code',
        Subheading: 'Create an account to get started.',
    },

    {
        id: 2,
        logo: 'https://res.cloudinary.com/dguy8qpzi/image/upload/v1636028569/add-content_djg0us.svg',
        Heading: 'Edit',
        Subheading: 'Add code to the compiler.',
    },

    {
        id: 3,
        logo: 'https://res.cloudinary.com/dguy8qpzi/image/upload/v1636028564/launch_q0s5md.svg',
        Heading: 'Run',
        Subheading: 'Now publish to run your code',
    },
]

const Info = () => {
    return (
        <>
            <div className={styles.info}>
                <div className={styles.infoheading}>How it works</div>
                <div className={styles.infocards}>
                    {Infocarddata.map(function ncards(val) {
                        return <Infocard key={val.id} Heading={val.Heading} Subheading={val.Subheading} logo={val.logo} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Info;

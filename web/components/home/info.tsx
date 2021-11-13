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
        // logo: 'https://res.cloudinary.com/dguy8qpzi/image/upload/v1636028569/create_a4ndl4.svg',
        logo: 'https://res.cloudinary.com/dguy8qpzi/image/upload/v1636736018/image-removebg-preview_22_ruqy0s.png',
        Heading: 'Add your code',
        Subheading: 'Click a picture of the code written on the copy.',
    },

    {
        id: 2,
        // logo: 'https://res.cloudinary.com/dguy8qpzi/image/upload/v1636028569/add-content_djg0us.svg',
        logo: 'https://res.cloudinary.com/dguy8qpzi/image/upload/v1636736018/image-removebg-preview_20_pgz4hb.png',
        Heading: 'Upload',
        Subheading: 'Upload the file and select the language.',
    },

    {
        id: 3,
        // logo: 'https://res.cloudinary.com/dguy8qpzi/image/upload/v1636028564/launch_q0s5md.svg',
        logo: 'https://res.cloudinary.com/dguy8qpzi/image/upload/v1636736752/image-removebg-preview_27_lzp8at.png',
        Heading: 'Run',
        Subheading: 'Edit the code in the theme-based editor and run the code.',
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

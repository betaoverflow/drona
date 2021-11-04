import React from 'react';
import Aboutcarddata from './Aboutcarddata';
import styles from '../../styles/about.module.scss';

const Aboutcard = (props) => {
    return(
        <div className={styles.aboutcard}>
            <div className={styles.cardtext}>
                <div className={styles.cardheading}>{props.Heading}</div>
                <div className={styles.cardsubheading}>{props.Subheading}</div>
            </div>
            <div className={styles.logo}>
                <img className={styles.cardlogo} src={props.logo} />
            </div>
        </div>
    )
}

const Aboutcarddata=[
    {
        Heading:"Run Your Hand-Written Code",
        Subheading:"Run your hand-written code and code on your phone in three clicks",
        logo: "https://res.cloudinary.com/dguy8qpzi/image/upload/v1635602419/test_el7hyk.svg",
    },

    {
        Heading:"Practice from unlimited questions.",
        Subheading:"Run your hand-written code and code on your phone in three clicks",
        logo: "https://res.cloudinary.com/dguy8qpzi/image/upload/v1635602419/test_el7hyk.svg",
    },

    {
        Heading:"Get constant updates",
        Subheading:"Run your hand-written code and code on your phone in three clicks",
        logo: "https://res.cloudinary.com/dguy8qpzi/image/upload/v1635602419/test_el7hyk.svg",
    },
]

const About = () => {
    return(
        <>
        <div className={styles.about}>
            <div className={styles.heading}>What it does</div>
            <div className={styles.aboutcards}>
                {Aboutcarddata.map(function ncards(val){
                return(
                    <Aboutcard
                    Heading={val.Heading}
                    Subheading={val.Subheading}
                    logo={val.logo}
                    />
                );
                })}
            </div>
        </div>
        </>
    )
}

export default About;
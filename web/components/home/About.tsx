import React from 'react';
import styles from '../../styles/about.module.scss';

const Aboutcard = (props) => {
    return(
        <div className={styles.aboutcard}>
            <div className={styles.text}>
                <div className={styles.heading}>{props.Heading}</div>
                <div className={styles.heading}>{props.Subheading}</div>
            </div>
            <div className={styles.logo}>
                {props.logo}
            </div>
        </div>
    )
}

const Aboutcarddata=[
    {
        Heading:"Run Your Hand-Written Code",
        Subheading:"Run your hand-written code and code on your phone in three clicks",
        logo: "logo",
    },

    {
        Heading:"Practice from unlimited questions.",
        Subheading:"Run your hand-written code and code on your phone in three clicks",
        logo: "logo",
    },

    {
        Heading:"Get constant updates",
        Subheading:"Run your hand-written code and code on your phone in three clicks",
        logo: "logo",
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
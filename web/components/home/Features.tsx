import React from 'react'
import styles from '../../styles/features.module.scss'

const Featurescard = (props: any) => {
    return (
        <div className={styles.featurescard}>
            <div className={styles.logo}>
                <img src={props.logo} alt="feature logo" />
            </div>
            <div className={styles.cardtext}>
                <div className={styles.cardheading}>{props.Heading}</div>
                <div className={styles.cardsubheading}>{props.Subheading}</div>
            </div>
        </div>
    )
}

const Featurescarddata = [
    {
        id: 1,
        logo: 'https://res.cloudinary.com/dguy8qpzi/image/upload/v1636054981/Feature_Icon_with_circle_wzodhy.svg',
        Heading: 'Code with 3 clicks',
        Subheading: 'Use our easy-to-use application and help code from anywhere with our OCR scanner and compiler.',
    },

    {
        id: 2,
        logo: 'https://res.cloudinary.com/dguy8qpzi/image/upload/v1636054981/Feature_Icon_with_circle4_sg6n5p.svg',
        Heading: 'Get instant notifications on your app',
        Subheading: 'Never miss a deadline again because we will remind you to check out the opportunity everytime we find a new one.',
    },

    {
        id: 3,
        logo: 'https://res.cloudinary.com/dguy8qpzi/image/upload/v1636054981/Feature_Icon_with_circle3_whxif3.svg',
        Heading: 'No more beating around the bush.',
        Subheading:
            'Get the best questions with the power of community specially compiled for your needs practice our questions daily to become interview ready.',
    },
    {
        id: 4,
        logo: 'https://res.cloudinary.com/dguy8qpzi/image/upload/v1636054982/Feature_Icon_with_circle_2_nvhn9u.svg',
        Heading: 'Opportunities that fit your goals',
        Subheading:
            "Stay updated with all the latest and best suited opportunities for you from the world's leading Tech Giants & Startups.",
    },
]

const Features: React.FC = () => {
    return (
        <>
            <div className={styles.features}>
                <div className={styles.leftfeatures}>
                    <div className={styles.featuresheading}>App Features</div>
                    <div className={styles.featurecards}>
                        {Featurescarddata.map(function ncards(val) {
                            return <Featurescard key={val.id} Heading={val.Heading} Subheading={val.Subheading} logo={val.logo} />
                        })}
                    </div>
                </div>
                <div className={styles.rightfeatures}>
                    <div className={styles.image1}>
                        <img
                            // className={styles.mainImage1}
                            src="https://res.cloudinary.com/dguy8qpzi/image/upload/v1636807630/screen3_xyhf08.svg"
                            width={380}
                            height={700}
                            alt="Drona mobile app home screen"
                        />
                    </div>

                    <div className={styles.image2}>
                        <img
                            src="https://res.cloudinary.com/dguy8qpzi/image/upload/v1636807636/screen2_zhwtr8.svg"
                            width={380}
                            height={700}
                            className={styles.mainImage2}
                            alt="Drona mobile app home screen"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features

import React from 'react'
import styles from '../../styles/features.module.scss'
import Image from 'next/image'

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
        Heading: 'Headline',
        Subheading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum porta magna at blandit a.',
    },

    {
        id: 2,
        logo: 'https://res.cloudinary.com/dguy8qpzi/image/upload/v1636054981/Feature_Icon_with_circle4_sg6n5p.svg',
        Heading: 'Headline',
        Subheading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum porta magna at blandit a.',
    },

    {
        id: 3,
        logo: 'https://res.cloudinary.com/dguy8qpzi/image/upload/v1636054981/Feature_Icon_with_circle3_whxif3.svg',
        Heading: 'Headline',
        Subheading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum porta magna at blandit a.',
    },
    {
        id: 4,
        logo: 'https://res.cloudinary.com/dguy8qpzi/image/upload/v1636054982/Feature_Icon_with_circle_2_nvhn9u.svg',
        Heading: 'Headline',
        Subheading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum porta magna at blandit a.',
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
                        <Image
                            className={styles.mainImage1}
                            src="https://res.cloudinary.com/dguy8qpzi/image/upload/v1636807630/screen3_xyhf08.svg"
                            width={380}
                            height={700}
                            alt="Drona mobile app home screen"
                        />
                    </div>

                    <div className={styles.image2}>
                        <Image
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

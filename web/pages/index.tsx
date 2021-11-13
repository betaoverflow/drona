import type { NextPage } from 'next'
import Head from 'next/head'
import { ThemeProvider } from '../components/themeProvider'
import styles from '../styles/Home.module.scss'
import HomeContainer from '../components/home'

const Home: NextPage = () => {
    return (
        <ThemeProvider>
            <div className={styles.container}>
                <Head>
                    <title>Drona</title>
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="apple-touch-icon" href="/256x256.png"></link>

                    <meta name="description" content="Empowering everyone to code with IBM's eye" />
                    <link rel="icon" href="/256x256.png" />
                </Head>

                <HomeContainer />

                <main className={styles.main}></main>
            </div>
        </ThemeProvider>
    )
}

export default Home

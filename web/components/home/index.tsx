import React from 'react'
import Header from '../Header'
import { ThemeProvider } from '../themeProvider'
import About from './About'
import Info from './info'
import Features from './Features'
import HomeContribute from './contribute'
import Footer from './footer'
import Hero from './hero'

const HomeContainer: React.FC = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Info/>
            <HomeContribute />
            <Features/>
            <Footer />
        </>
    )
}

export default HomeContainer

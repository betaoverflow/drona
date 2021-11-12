import React from 'react'
import Header from '../Header'
import { ThemeProvider } from '../themeProvider'
import About from './About'
import Info from './info'
import Compiler from './Compiler'
import Features from './Features'
import HomeContribute from './contribute'
import Footer from './footer'
import Hero from './hero'
import Opportunities from './Opportunities'

const HomeContainer: React.FC = () => {
    return (
        <>
            <Header />
            <Hero />
            <Opportunities/>
            <About />
            <Info/>
            <Compiler/>
            <HomeContribute />
            <Features/>
            <Footer />
        </>
    )
}

export default HomeContainer

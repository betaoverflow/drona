import React from 'react'
import styled from '@emotion/styled'

const Button = styled.span`
    font-size: 25px;
    font-weight: bold;
    color: #000;
    padding: 10px;
    border-radius: 3px;
    margin: 1rem;
    text-decoration: underline;
`

const Heading = styled.span`
    font-family: sans-serif;
    font-size: 25px;
    font-weight: bold;
    margin: 1rem;
`

const Subheading = styled.span`
    font-family: sans-serif;
    font-size: 15px;
`

const Number = styled.span`
    font-family: sans-serif;
    font-size: 270px;
    opacity: 0.2;

    @media (max-width: 800px) {
        font-size: 170px;
    }

    @media (max-width: 500px) {
        font-size: 100px;
    }
`

const Container = styled.span`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Container1 = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Container2 = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const Container3 = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Image = styled.img`
    max-width: 100%;
    @media (max-width: 800px) {
        max-width: 80%;
    }

    @media (max-width: 500px) {
        max-width: 50%;
    }
`

export default function Custom404() {
    return (
        <>
            <Container>
                <Container1>
                    <Subheading>Oops, something went wrong, but</Subheading>
                    <Heading>DONUT WORRY</Heading>
                </Container1>

                <Container2>
                    <Number>4</Number>
                    <Image src="https://res.cloudinary.com/dguy8qpzi/image/upload/v1635785251/donut1_mx9gpv.png" alt="0" />
                    <Number>4</Number>
                </Container2>

                <Container3>
                    <Subheading>It will be fixed soon</Subheading>
                    <Button>
                        <a href="/">Go Back</a>
                    </Button>
                </Container3>
            </Container>
        </>
    )
}

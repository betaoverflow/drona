import React from 'react';
import styled from '@emotion/styled';

const Button = styled.span`
background-color: blue;
color: #fff;
padding: 10px;
border-radius: 3px;
width: 80px;
margin: 1rem;
`

const Heading = styled.span`
font-family: sans-serif;
font-size: 30px;
font-weight: bold;
margin: 1rem;
`

const Subheading = styled.span`
font-family: sans-serif;
font-size: 20px;
`

const Number = styled.span`
font-family: sans-serif;
font-size: 270px;
opacity: 0.2;
`

const Container1 = styled.span`
height: 33vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Container2 = styled.span`
height: 33vh;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`

const Container3 = styled.span`
height: 33vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export default function Custom404() {
    return (
        <>

        <Container1>
            <Subheading>Oops, something went wrong, but</Subheading>
            <Heading>DONUT WORRY</Heading>
        </Container1>

        <Container2>
            <Number>4</Number>
            <img src="https://res.cloudinary.com/dguy8qpzi/image/upload/v1635785251/donut1_mx9gpv.png" alt=""/>
            <Number>4</Number>
        </Container2>
        
        <Container3>
            <Subheading>It will be fixed soon</Subheading>
            <Button>Go back</Button>
        </Container3>

        </>
    )
        
        
}

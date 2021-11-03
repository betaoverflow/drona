import styled from '@emotion/styled'

export const Button = styled.span`
    font-size: 25px;
    font-weight: bold;
    color: #000;
    padding: 10px;
    border-radius: 3px;
    margin: 1rem;
    text-decoration: underline;
`

export const Heading = styled.span`
    font-family: sans-serif;
    font-size: 25px;
    font-weight: bold;
    margin: 1rem;
`

export const Subheading = styled.span`
    font-family: sans-serif;
    font-size: 15px;
`

export const Number = styled.span`
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

export const Container = styled.span`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ContainerCol = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ContainerRow = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const Image = styled.img`
    max-width: 100%;
    @media (max-width: 800px) {
        max-width: 80%;
    }

    @media (max-width: 500px) {
        max-width: 50%;
    }
`


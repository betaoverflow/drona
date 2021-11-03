import React from 'react'
import { Button, Heading, Subheading, Number, Container, ContainerRow, ContainerCol, Image } from '../components/404styles'
import Link from 'next/link'
export default function Custom404() {
    return (
        <>
            <Container>
                <ContainerCol>
                    <Subheading>Oops, something went wrong, but</Subheading>
                    <Heading>DONUT WORRY</Heading>
                </ContainerCol>

                <ContainerRow>
                    <Number>4</Number>
                    <Image src="https://res.cloudinary.com/dguy8qpzi/image/upload/v1635785251/donut1_mx9gpv.png" alt="0" />
                    <Number>4</Number>
                </ContainerRow>

                <ContainerCol>
                    <Subheading>It will be fixed soon</Subheading>
                    <Button>
                        <Link href="/">Go Back</Link>
                    </Button>
                </ContainerCol>
            </Container>
        </>
    )
}

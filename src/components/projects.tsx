import {Box, Grid, GridItem, Heading, Image, Text} from "@chakra-ui/react";
import Link from "next/link";
import * as S from './projects/projects.styled'
import * as H from '../styles/ui.styled'

export default function Projects() {
    return (
        <H.Container>
            <H.TitleH3>Projects</H.TitleH3>
            <S.GridContainer>
                <S.GridItem href={'/asd'}>

                    <S.Picture src='/projects/wtw.png' alt='A website to watch films'
                    />
                    <Heading as={'h5'} fontSize={'s'} m={'10px 0 10px 0'}>What To Watch</Heading>
                    <H.Text>WTW is a streaming service that offers a wide variety
                        of
                        award-winning
                        TV shows,
                        movies</H.Text>

                </S.GridItem>

                <S.GridItem href={'/qwe'}>
                    <S.Picture src='/projects/guitar-shop.png' alt='A website to buy a guitar'
                    />
                    <H.TitleH5 m={'10px 0 10px 0'}>Guitar Shop</H.TitleH5>
                    <H.Text>An online shop that sells awesome guitars</H.Text>
                </S.GridItem>
            </S.GridContainer>
        </H.Container>
    )
}
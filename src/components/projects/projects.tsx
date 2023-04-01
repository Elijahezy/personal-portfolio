import * as S from './projects.styled'
import * as H from '../../styles/ui.styled'

interface ProjectsProps {
    m?: string,
}


export default function Projects({m}: ProjectsProps) {
    return (
        <H.Container p={m}>
            <H.TitleH3 m={'0 0 20px 0'}>Projects</H.TitleH3>
            <S.GridContainer>
                <S.GridItem href={'/projects/wtw'}>
                    <S.PictureContainer>
                        <S.Picture src='/projects/wtw.png' alt='A website to watch films'
                        />
                    </S.PictureContainer>
                    <H.TitleH5 m={'10px 0 10px 0'}>What To Watch</H.TitleH5>
                    <H.Text>WTW is a streaming service that offers a wide variety
                        of
                        award-winning
                        TV shows,
                        movies</H.Text>
                </S.GridItem>
                <S.GridItem href={'/projects/guitar_shop'}>
                    <S.PictureContainer>
                        <S.Picture src='/projects/guitar-shop.png' alt='A website to buy a guitar'
                        />
                    </S.PictureContainer>
                    <H.TitleH5 m={'10px 0 10px 0'}>Guitar Shop</H.TitleH5>
                    <H.Text>An online shop that sells awesome guitars</H.Text>
                </S.GridItem>
            </S.GridContainer>
        </H.Container>
    )
}
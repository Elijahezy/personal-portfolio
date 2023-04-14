import * as S from './bio.styled'
import * as H from '../../styles/ui.styled'

export default function Bio() {
    return (
        <H.Container p={'330px 0 0 0'}>
            <S.About>Hi there! I am a web developer based in the USA</S.About>
            <S.InfoWrapper>
                <S.NameWrapper>
                    <S.Name>
                        Ilia Karavaev
                    </S.Name>
                    React Developer
                </S.NameWrapper>
                <S.ProfileWrapper>
                    <S.ProfilePic src={'/Ilia.jpg'}/>
                </S.ProfileWrapper>
            </S.InfoWrapper>
            <H.TitleH3>About me</H.TitleH3>
            <S.Text>
                I am a coding enthusiast who loves to work with React, TypeScript, Styled Components, and Redux. I find
                it very satisfying to solve coding problems on platforms like Codewars and enjoy the challenge they
                provide. When I{`'`}m not coding, I love to engage in outdoor sports like hiking, boulder climbing, and
                calisthenics to stay active and maintain my health. Lastly, I have a strong desire to explore and travel
                around the USA to experience new adventures and broaden my horizons.
            </S.Text>
        </H.Container>
    )
}
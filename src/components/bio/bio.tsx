import * as S from './bio.styled'
import * as H from '../../styles/ui.styled'

export default function Bio() {
    return (
        <H.Container>
            <S.InfoWrapper>
                <S.NameWrapper>
                    <S.Name>
                        Ilia Karavaev
                    </S.Name>
                    Dev Ninja
                </S.NameWrapper>
                <S.ProfileWrapper>
                    <S.ProfilePic src={'/Ilia.jpg'}/>
                </S.ProfileWrapper>

            </S.InfoWrapper>
            <H.TitleH3>About me</H.TitleH3>
            <S.Text>
                I used to be a private tutor of English language. However, one day I felt like I want to do something
                more complicated. I decided to try coding courses and I felt in love with coding. I finished those
                courses and found an internship at digital agency.
                So now I{`'`}m looking for full time job in the USA at any state.
            </S.Text>
        </H.Container>
    )
}
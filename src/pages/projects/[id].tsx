import Page from "@/components/page/page";
import * as S from './[id].styled';
import * as H from '../../styles/ui.styled'
import {useRouter} from "next/router";
import {ARROW_UP_RIGHT, WTW_DEMO_URL, WTW_SOURCE_URL} from "@/components/consts";
import {Icon} from "@chakra-ui/icon";
import {useBearStore} from "@/store/store";

export default function SingleProjectPage() {
    const id = useRouter().query.id;
    const currentThemeBoolean = useBearStore((state) => state.themeBoolean);

    return (
        <Page>
            <H.Container overflow={'hidden'}>
                <S.BreadCrumbsContainer>
                    <S.ProjectsPageLink href={'/projects'}>Projects</S.ProjectsPageLink>
                    <S.Separator>{`>`}</S.Separator>
                    <S.ProjectName>{id}</S.ProjectName>
                </S.BreadCrumbsContainer>
                <H.Text m={'20px 0 0 0'}>
                    The Online Cinema App is a web-based application that allows users to browse and watch movies
                    online. The app provides a user-friendly interface that makes it easy for users to find movies based
                    on genre, popularity, and other criteria.

                    The frontend of the app is built using HTML, CSS, and JavaScript and provides a sleek and modern
                    user interface. Users can browse movies, add them to their watchlist.
                </H.Text>
                <H.FlexContainer flexDirection={'row'} alignItems={'center'} gap={'10px'} m={'20px 0 5px 0'}>
                    <S.Tag>
                        DEMO
                    </S.Tag>
                    <S.ProjectsPageLink href={WTW_DEMO_URL} target="_blank">
                        Web
                    </S.ProjectsPageLink>
                    <Icon viewBox="0 0 512 512" color={currentThemeBoolean ? '#c56cf0' : '#B53471'} fontSize={'12px'}>
                        <path
                            d={ARROW_UP_RIGHT}
                            fill={'currentColor'}
                        />
                    </Icon>
                </H.FlexContainer>
                <H.FlexContainer flexDirection={'row'} alignItems={'center'} gap={'10px'} m={'0 0 5px 0'}>
                    <S.Tag>
                        SOURCE
                    </S.Tag>
                    <S.ProjectsPageLink href={WTW_SOURCE_URL} target="_blank">
                        Go to source code
                    </S.ProjectsPageLink>
                    <Icon viewBox="0 0 512 512" color={currentThemeBoolean ? '#c56cf0' : '#B53471'} fontSize={'12px'}>
                        <path
                            d={ARROW_UP_RIGHT}
                            fill={'currentColor'}
                        />
                    </Icon>
                </H.FlexContainer>
                <H.FlexContainer flexDirection={'row'} alignItems={'center'} gap={'10px'}>
                    <S.Tag>
                        STACK
                    </S.Tag>
                    React.ts, Redux, Redux-Toolkit, StyledComponents
                </H.FlexContainer>
                <S.Picture src={'/projects/wtw.png'} alt={'wtw films website'}/>
            </H.Container>
        </Page>
    )
}
import Page from "@/components/page/page";
import * as S from '../../components/project-page/project-page.styled';
import * as H from '../../styles/ui.styled'
import {useRouter} from "next/router";
import {ARROW_UP_RIGHT} from "@/components/consts";
import {Icon} from "@chakra-ui/icon";
import {useBearStore} from "@/store/store";

export default function SingleProjectPage() {
    const id = useRouter().query.id;
    const currentThemeBoolean = useBearStore((state) => state.themeBoolean);
    const currentProject = useBearStore((state) => state.projects).find((item) => item.id === id)

    return (
        <Page>
            <H.Container overflow={'hidden'} p={'400px 0 40px 0'}>
                <S.BreadCrumbsContainer>
                    <S.ProjectsPageLink href={'/projects'}>Projects</S.ProjectsPageLink>
                    <S.Separator>{`>`}</S.Separator>
                    <S.ProjectName>{currentProject?.name}</S.ProjectName>
                </S.BreadCrumbsContainer>
                <H.Text m={'20px 0 0 0'}>
                    {currentProject?.description}
                </H.Text>
                <H.FlexContainer flexDirection={'row'} alignItems={'center'} gap={'10px'} m={'20px 0 5px 0'}>
                    <S.Tag>
                        DEMO
                    </S.Tag>
                    <S.ProjectsPageLink href={currentProject?.demoLink || '#'} target="_blank">
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
                    <S.ProjectsPageLink href={currentProject?.sourceLink || '#'} target="_blank">
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
                    {currentProject?.stack}
                </H.FlexContainer>
                <S.Picture src={currentProject?.img} alt={'wtw films website'}/>
            </H.Container>
        </Page>
    )
}
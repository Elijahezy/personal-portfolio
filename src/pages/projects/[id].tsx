import Article from "@/components/layout/article/article";
import * as S from '../../components/project-page/project-page.styled';
import * as H from '../../styles/ui.styled'
import {useRouter} from "next/router";
import {ARROW_UP_RIGHT} from "@/components/consts";
import {Icon} from "@chakra-ui/icon";
import {useBearStore} from "@/store/store";

export default function SingleProjectPage() {
    const id = useRouter().query.id;
    const {theme} = useBearStore();

    const currentProject = useBearStore((state) => state.projects).find((item) => item.id === id)

    return (
        <Article title={currentProject?.name}>
            <H.Container overflow={'hidden'} p={'400px 0 0 0'}>
                <H.BreadCrumbsContainer>
                    <H.ProjectsPageLink href={'/projects'}>Projects</H.ProjectsPageLink>
                    <H.Separator>{`>`}</H.Separator>
                    <H.ProjectName>{currentProject?.name}</H.ProjectName>
                </H.BreadCrumbsContainer>
                <S.Text m={'20px 0 0 0'}>
                    {currentProject?.description}
                </S.Text>
                <H.FlexContainer flexDirection={'row'} alignItems={'center'} gap={'10px'} m={'20px 0 5px 0'}>
                    <S.Tag>
                        DEMO
                    </S.Tag>
                    <S.ProjectsPageLink href={currentProject?.demoLink || '#'} target="_blank">
                        Web
                    </S.ProjectsPageLink>
                    <Icon viewBox="0 0 512 512" color={theme ? '#c56cf0' : '#B53471'}
                          fontSize={'12px'}>
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
                    <Icon viewBox="0 0 512 512" color={theme ? '#c56cf0' : '#B53471'} fontSize={'12px'}>
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
        </Article>
    )
}
import {useRouter} from "next/router";
import {useBearStore} from "@/store/store";
import Article from "@/components/layout/article/article";
import * as H from '../../styles/ui.styled'
import {Icon} from "@chakra-ui/react";
import {ARROW_UP_RIGHT} from "@/components/consts";

export default function SingleExperiencePage() {
    const id = useRouter().query.id;
    const {theme} = useBearStore();

    const currentExperience = useBearStore((state) => state.experiences).find((item) => item.id === id)

    return (
        (<Article title={currentExperience?.company}>
            <H.Container overflow={'hidden'} p={'400px 0 0 0'}>
                <H.BreadCrumbsContainer>
                    <H.ProjectsPageLink href={'/experience-page'}>Work Experience</H.ProjectsPageLink>
                    <H.Separator>{`>`}</H.Separator>
                    <H.ProjectName>{currentExperience?.company}</H.ProjectName>
                </H.BreadCrumbsContainer>
                <H.Text m={'20px 0 0 0'}>
                    {currentExperience?.fullDescription}
                </H.Text>
                <H.FlexContainer flexDirection={'row'} alignItems={'center'} gap={'10px'} m={'20px 0 5px 0'}>
                    <H.Tag>
                        EMPLOYER
                    </H.Tag>
                    <H.ProjectsPageLink href={currentExperience?.link || '#'} target="_blank">
                        Web
                    </H.ProjectsPageLink>
                    <Icon viewBox="0 0 512 512" color={theme ? '#c56cf0' : '#B53471'}
                          fontSize={'12px'}>
                        <path
                            d={ARROW_UP_RIGHT}
                            fill={'currentColor'}
                        />
                    </Icon>
                </H.FlexContainer>
                <H.FlexContainer flexDirection={'row'} alignItems={'center'} gap={'10px'}>
                    <H.Tag>
                        STACK
                    </H.Tag>
                    {currentExperience?.technologies}
                </H.FlexContainer>
                <H.FlexContainer flexDirection={'col'} m={'5px 0 5px 0'} gap={'10px'}>
                    <H.Tag>KEY PROJECTS</H.Tag>
                    <ul>
                        {currentExperience?.projects?.map((project, index) => (
                            <li key={index}>{project}</li>
                        ))}
                    </ul>
                </H.FlexContainer>

            </H.Container>
        </Article>)
    )
}
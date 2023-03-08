import Page from "@/components/page/page";
import * as S from './[id].styled';
import * as H from '../../styles/ui.styled'
import {useRouter} from "next/router";

export default function SingleProjectPage() {
    const id = useRouter().query.id
    return (
        <Page>
            <H.Container>
                <S.BreadCrumbsContainer>
                    <S.ProjectsPageLink href={'/projects'}>Projects</S.ProjectsPageLink>
                    <S.Separator>{`>`}</S.Separator>
                    <S.ProjectName>{id}</S.ProjectName>
                </S.BreadCrumbsContainer>
                <H.FlexContainer flexDirection={'row'}>
                    <S.Tag>
                        WEBSITE
                    </S.Tag>


                </H.FlexContainer>
            </H.Container>
        </Page>
    )
}
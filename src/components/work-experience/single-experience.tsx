import * as S from '../../components/project-page/project-page.styled';
import * as H from '../../styles/ui.styled'
import * as SE from './single-experience.styled'

interface ExperienceProps {
    id: string;
    company: string;
    position: string;
    duration: string;
    description: string;
    technologies: string;
}

const SingleExperience: React.FC<ExperienceProps> = ({id, company, position, duration, description, technologies }) => {
    return (
        <SE.ExperienceContainer href={`/work-experience/${id}`}>
            <S.BreadCrumbsContainer>
                <S.ProjectName>{company}</S.ProjectName>
            </S.BreadCrumbsContainer>
            <S.Text m={'10px 0 0 0'}>
                {description}
            </S.Text>
            <H.FlexContainer flexDirection={'row'} alignItems={'center'} gap={'10px'} m={'10px 0 0 0'}>
                <S.Tag>
                    POSITION
                </S.Tag>
                <S.ProjectName>{position}</S.ProjectName>
            </H.FlexContainer>
            <H.FlexContainer flexDirection={'row'} alignItems={'center'} gap={'10px'} m={'5px 0 5px 0'}>
                <S.Tag>
                    DURATION
                </S.Tag>
                <S.ProjectName>{duration}</S.ProjectName>
            </H.FlexContainer>
            <H.FlexContainer flexDirection={'row'} alignItems={'center'} gap={'10px'} m={'0 0 20px 0'}>
                <S.Tag>
                    TECHNOLOGIES
                </S.Tag>
                {technologies}
            </H.FlexContainer>
        </SE.ExperienceContainer>
    )
}

export default SingleExperience;

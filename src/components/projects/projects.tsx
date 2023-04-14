import * as S from './projects.styled'
import * as H from '../../styles/ui.styled'
import {Data, useBearStore} from '../../store/store'

interface Props {
    padding?: string
}

export default function Projects({padding}: Props) {

    const {projects} = useBearStore();
    return (
        <H.Container p={padding}>
            <H.TitleH3 m={'0 0 20px 0'}>Projects</H.TitleH3>
            <S.GridContainer>
                {
                    projects.map((project, index) => (
                        <S.GridItem href={`/projects/${project.id}`} key={index}>
                            <S.PictureContainer>
                                <S.Picture src={project.img} alt={project.name}/>
                            </S.PictureContainer>
                            <H.TitleH5 m={'10px 0 10px 0'}>{project.name}</H.TitleH5>
                            <H.Text>{project.shortDescription}</H.Text>
                        </S.GridItem>
                    ))
                }

            </S.GridContainer>
        </H.Container>
    )
}
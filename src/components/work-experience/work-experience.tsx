import {ExperienceData, useBearStore} from "@/store/store";
import SingleExperience from "@/components/work-experience/single-experience";
import * as H from "@/styles/ui.styled";
interface Props {
    padding?: string
}

export default function WorkExperience({padding}: Props) {
    const experiences = useBearStore((state) => state.experiences);

    return (
        <H.Container p={padding}>
            <H.TitleH3 m={'0 0 20px 0'}>Work Experience</H.TitleH3>
            {experiences.map((experience: ExperienceData) => (
                <SingleExperience
                    key={experience.id}
                    id={experience.id}
                    company={experience.company}
                    position={experience.position}
                    duration={experience.duration}
                    description={experience.description}
                    technologies={experience.technologies}

                />
            ))}
        </H.Container>
    )
}

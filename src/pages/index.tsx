import Bio from "@/components/bio/bio";
import Projects from "@/components/projects/projects";
import Socials from "@/components/socials/socials";
import Article from "@/components/layout/article/article";
import WorkExperience from '@/components/work-experience/work-experience'
export default function Home() {
    return (
        <Article title={'Portfolio'}>
            <Bio/>
            <WorkExperience />
            {/* <Projects/> */}
            <Socials/>
        </Article>
    )
}

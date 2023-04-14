import Bio from "@/components/bio/bio";
import Projects from "@/components/projects/projects";
import Socials from "@/components/socials/socials";
import Article from "@/components/layout/article/article";
import {useBearStore} from "@/store/store";

export default function Home() {
    return (
        <Article title={'Homepage'}>
            <Bio/>
            <Projects/>
            <Socials/>
        </Article>
    )
}

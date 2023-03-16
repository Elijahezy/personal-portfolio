import Bio from "@/components/bio/bio";
import Projects from "@/components/projects/projects";
import Socials from "@/components/socials/socials";
import Page from "@/components/page/page";
import {Memoized3dObject} from "@/components/model/model";

export default function Home() {
    return (
        <>

            <Page>
                <Memoized3dObject/>
                <Bio/>
                <Projects/>
                <Socials/>
            </Page>
        </>
    )
}

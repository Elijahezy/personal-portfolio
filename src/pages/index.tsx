import Bio from "@/components/bio/bio";
import Projects from "@/components/projects/projects";
import Socials from "@/components/socials/socials";
import Page from "@/components/page/page";


export default function Home() {
    return (
        <>

            <Page>
                <Bio/>
                <Projects/>
                <Socials/>
            </Page>
        </>
    )
}

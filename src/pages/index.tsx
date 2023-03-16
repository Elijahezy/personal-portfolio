import Bio from "@/components/bio/bio";
import Projects from "@/components/projects/projects";
import Socials from "@/components/socials/socials";
import Page from "@/components/page/page";
import My3dObject from "@/components/model/model";
import {Canvas} from "@react-three/fiber";

export default function Home() {
    return (
        <>

            <Page>
                <Canvas>
                    <My3dObject/>
                </Canvas>
                <Bio/>
                <Projects/>
                <Socials/>
            </Page>
        </>
    )
}

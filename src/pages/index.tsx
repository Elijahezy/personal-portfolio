import Head from 'next/head'
import {Box} from "@chakra-ui/react";
import Bio from "@/components/bio/bio";
import Projects from "@/components/projects/projects";
import Socials from "@/components/socials/socials";
import Navbar from "@/components/navbar/navbar";
import styled from "styled-components";
import {useBearStore} from "@/store/store";
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

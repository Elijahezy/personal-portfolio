import * as S from './page.styled';
import Navbar from "@/components/navbar/navbar";
import CircleSpinner from "@/components/spinner/spinner";
import dynamic from "next/dynamic";
import Credentials from "@/components/credentials/credentials";
import {AnimatePresence, motion} from "framer-motion";

const variants = {
    hidden: {opacity: 0, x: 0, y: 20},
    enter: {opacity: 1, x: 0, y: 0},
    exit: {opacity: 0, x: -0, y: 20}
}


const LazyModelLoad = dynamic(() => import('../model/model'), {
    ssr: false,
    loading: () => <CircleSpinner/>
})

interface PageProps {
    children: string | JSX.Element | JSX.Element[],
}

export default function Page({children}: PageProps) {
    return (
        <>
            <S.Main>
                <Navbar/>


                {children}
                <Credentials/>
            </S.Main>
        </>
    )
}
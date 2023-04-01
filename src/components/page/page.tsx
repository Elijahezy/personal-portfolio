import * as S from './page.styled';
import Navbar from "@/components/navbar/navbar";
import CircleSpinner from "@/components/spinner/spinner";
import dynamic from "next/dynamic";
import Credentials from "@/components/credentials/credentials";


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
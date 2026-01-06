import Head from 'next/head'
import dynamic from 'next/dynamic'
import CircleSpinner from "@/components/spinner/spinner";
import * as S from './main.styled'
import * as H from '@/styles/ui.styled';
import Navbar from "@/components/navbar/navbar";
import { useBearStore } from '@/store/store'

interface MainProps {
    children: string | JSX.Element | JSX.Element[],
}

const LazyModelSphere = dynamic(() => import('../../model/model'), {
    ssr: false,
    loading: () => <CircleSpinner/>
})

const Main = ({children}: MainProps) => {
     const { theme } = useBearStore()
    return (
        <S.Main>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="Ilia's homepage"/>
                <meta name="author" content="Ilia Karavaev"/>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
                <meta name="twitter:title" content="Ilia Karavaev"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@Ilia"/>
                <meta name="twitter:creator" content="@Ilia"/>
                <meta property="og:site_name" content="Ilia Karavaev"/>
                <meta name="og:title" content="Ilia Karavaev"/>
                <meta property="og:type" content="website"/>
                <link rel="icon" href="/earth-americas-solid.svg"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <title>Ilia Karavaev - Homepage</title>
            </Head>
            <Navbar/>
            <H.Container m={'0'}>
                <LazyModelSphere />
                {children}
            </H.Container>
        </S.Main>
    )
}

export default Main
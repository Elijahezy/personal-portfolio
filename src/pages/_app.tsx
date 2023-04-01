import type {AppProps} from 'next/app'
import {darkTheme, lightTheme} from "@/styles/theme";
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "@/styles/globals";
import {useBearStore} from "@/store/store";
import Head from "next/head";
import dynamic from "next/dynamic";
import CircleSpinner from "@/components/spinner/spinner";


const LazyModelLoad = dynamic(() => import('../../src/components/model/model'), {
    ssr: false,
    loading: () => <CircleSpinner/>
})

export default function App({Component, pageProps}: AppProps) {
    const currentThemeBoolean = useBearStore((state) => state.themeBoolean)
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>

            </Head>
            <ThemeProvider theme={currentThemeBoolean ? darkTheme : lightTheme}>
                <LazyModelLoad/>
                <GlobalStyles/>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

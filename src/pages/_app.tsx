import type {AppProps} from 'next/app'
import {darkTheme, lightTheme} from "@/styles/theme";
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "@/styles/globals";
import {useBearStore} from "@/store/store";
import Head from "next/head";

export default function App({Component, pageProps}: AppProps) {
    const currentThemeBoolean = useBearStore((state) => state.themeBoolean)
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400;500;700;800&display=swap"
                    rel="stylesheet"/>
            </Head>
            <ThemeProvider theme={currentThemeBoolean ? darkTheme : lightTheme}>
                <GlobalStyles/>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

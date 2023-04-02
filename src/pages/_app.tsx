import type {AppProps} from 'next/app'
import {darkTheme, lightTheme} from "@/styles/theme";
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "@/styles/globals";
import {useBearStore} from "@/store/store";
import Layout from '@/components/layout/main/main'
import {AnimatePresence} from "framer-motion";
import {useEffect} from "react";

export default function App({Component, pageProps}: AppProps) {
    const {theme, loadTheme} = useBearStore()

    useEffect(() => {
        loadTheme()
    }, []);

    return (
        <>
            <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
                <GlobalStyles/>
                <Layout>
                    <AnimatePresence
                        mode={'wait'}
                        initial={true}
                        onExitComplete={() => {
                            if (typeof window !== 'undefined') {
                                window.scrollTo({top: 0})
                            }
                        }}
                    >
                        <Component {...pageProps} />
                    </AnimatePresence>
                </Layout>
            </ThemeProvider>
        </>
    )
}

import type {AppProps} from 'next/app'
import {darkTheme, lightTheme} from "@/styles/theme";
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "@/styles/globals";
import {useBearStore} from "@/store/store";
import Layout from '@/components/layout/main/main'
import {AnimatePresence} from "framer-motion";
import {useEffect, useState} from "react";
import CircleSpinner from "@/components/spinner/spinner";

export default function App({Component, pageProps}: AppProps) {
    const {theme, switchTheme} = useBearStore()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const isThemeExisting = localStorage.getItem('theme')
        if (isThemeExisting !== null && isThemeExisting !== undefined) {
            switchTheme(isThemeExisting)
        }
        setLoading(false)
    }, []);


    return (
        <>
            {
                loading ?
                    null
                    :
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
            }
        </>
    )
}

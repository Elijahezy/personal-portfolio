import type {AppProps} from 'next/app'
import {darkTheme, lightTheme} from "@/styles/theme";
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "@/styles/globals";
import {useBearStore} from "@/store/store";

export default function App({Component, pageProps}: AppProps) {
    const currentThemeBoolean = useBearStore((state) => state.themeBoolean)
    return (
        <>
            <ThemeProvider theme={currentThemeBoolean ? darkTheme : lightTheme}>
                <GlobalStyles/>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

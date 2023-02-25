import '@/styles/globals'
import type {AppProps} from 'next/app'
import {theme} from "@/styles/theme";
import {ChakraProvider} from "@chakra-ui/react";

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    )
}

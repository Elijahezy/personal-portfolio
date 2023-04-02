import Document, {DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';
import {NextPageContext} from "next";
import {RenderPage} from "next/dist/shared/lib/utils";
import {useEffect} from "react";

export default class MyDocument extends Document {
    static async getInitialProps(ctx: NextPageContext & { renderPage: RenderPage; defaultGetInitialProps(ctx: DocumentContext, options?: { nonce?: string }): Promise<DocumentInitialProps> }) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }


    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400;500;700;800&display=swap"
                        rel="stylesheet"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}
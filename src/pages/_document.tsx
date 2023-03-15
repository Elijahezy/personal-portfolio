import Document, {DocumentContext, DocumentInitialProps} from 'next/document'
import {ServerStyleSheet} from 'styled-components'
import {NextPageContext} from "next";
import {RenderPage} from "next/dist/shared/lib/utils";

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
}
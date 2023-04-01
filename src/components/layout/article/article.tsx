import Head from "next/head";

interface PageProps {
    children: string | JSX.Element | JSX.Element[],
    title?: string,
}

export default function Article({children, title}: PageProps) {
    const t = `${title} - Ilia Karavaev`
    return (
        <>
            <Head>
                <title>{t}</title>
            </Head>
            {children}
        </>
    )
}
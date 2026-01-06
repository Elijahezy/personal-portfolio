import Head from "next/head";
import {motion} from "framer-motion";
import Footer from "@/components/footer/footer";
import { ReactNode } from "react";

interface PageProps {
    children: ReactNode,
    title?: string,
}

const variants = {
    hidden: {opacity: 0, x: 0, y: 20},
    enter: {opacity: 1, x: 0, y: 0},
    exit: {opacity: 0, x: 0, y: 20}
}

export default function Article({children, title}: PageProps) {
    const t = `${title} - Ilia Karavaev`
    return (
        <>
            <Head>
                <title>{t}</title>
            </Head>
            <motion.article
                exit="exit"
                initial="hidden"
                animate="enter"
                variants={variants}
                transition={{duration: 0.4, ease: 'easeInOut'}}
            >
                {children}
                <Footer/>
            </motion.article>
        </>
    )
}
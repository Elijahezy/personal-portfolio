import Head from "next/head";
import type { GetServerSideProps } from "next";
import Article from "@/components/layout/article/article";
import Gifts from "@/components/gifts/gifts";
import { isValidToken, loadList, loadReservations } from "@/lib/gifts";
import type { GiftList, PublicReservations } from "@/lib/gifts";

interface GiftsPageProps {
  token: string
  list: GiftList
  reservations: PublicReservations
}

// Reachable only through the secret link; a wrong token is a plain 404.
export const getServerSideProps: GetServerSideProps<GiftsPageProps> = async ({ params, res }) => {
  const token = params?.token
  if (!isValidToken(token)) return { notFound: true }

  const list = await loadList()
  if (!list) return { notFound: true }

  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('X-Robots-Tag', 'noindex, nofollow')
  return { props: { token, list, reservations: await loadReservations() } }
}

export default function GiftsPage({ token, list, reservations }: GiftsPageProps) {
  return (
    <Article title="Birthday wishlist">
      <Head>
        <meta name="robots" content="noindex, nofollow"/>
      </Head>
      <Gifts token={token} list={list} initialReservations={reservations}/>
    </Article>
  )
}

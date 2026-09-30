import Head from "next/head";
import type { GetServerSideProps } from "next";
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
    <>
      <Head>
        <title>Ilia&apos;s birthday wishlist</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="robots" content="noindex, nofollow"/>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎁</text></svg>"/>
      </Head>
      <Gifts token={token} list={list} initialReservations={reservations}/>
    </>
  )
}

// Rendered without the site's navbar, 3D model, footer and theme.
GiftsPage.standalone = true

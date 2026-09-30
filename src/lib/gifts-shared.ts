// Types and limits shared by the gifts page and its API; safe to import in the browser.

export const NAME_MAX_LENGTH = 40

export type GiftItem = {
  id: string
  title: string
  note?: string
  price?: string
  url?: string
}

export type GiftSection = {
  name: string
  items: GiftItem[]
}

export type GiftList = {
  title: string
  intro: string
  likes: { label: string, text: string }[]
  sections: GiftSection[]
}

// What guests see: who reserved, never the cancel key.
export type PublicReservations = Record<string, { name: string | null }>

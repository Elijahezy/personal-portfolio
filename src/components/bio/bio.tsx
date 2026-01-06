import * as S from './bio.styled'
import * as H from '../../styles/ui.styled'
import { useEffect, useMemo, useState } from 'react'

type FactId =
  | 'starlink_count'
  | 'active_satellites'
  | 'people_in_space'
  | 'iss_position'
  | 'starlink_share'

type SpaceFacts = {
  starlink: number
  active: number
  share: number
  peopleInSpace: number | null
  issLat: number | null
  issLon: number | null
}

function isSpaceFacts(value: unknown): value is SpaceFacts {
  if (!value || typeof value !== 'object') return false
  const v = value as Record<string, unknown>

  const isNumOrNull = (x: unknown) => typeof x === 'number' || x === null

  return (
    typeof v.starlink === 'number' &&
    typeof v.active === 'number' &&
    typeof v.share === 'number' &&
    isNumOrNull(v.peopleInSpace) &&
    isNumOrNull(v.issLat) &&
    isNumOrNull(v.issLon)
  )
}

export default function Bio() {
  const [fact, setFact] = useState<string>('Loading a space fact...')

  const facts = useMemo(
    () =>
      [
        {
          id: 'starlink_count' as const,
          build: (d: SpaceFacts) =>
            `Currently tracking ${d.starlink.toLocaleString()} Starlink satellites in orbit`,
        },
        {
          id: 'active_satellites' as const,
          build: (d: SpaceFacts) =>
            `Currently tracking ${d.active.toLocaleString()} active satellites in orbit`,
        },
        {
          id: 'people_in_space' as const,
          build: (d: SpaceFacts) => {
            if (d.peopleInSpace == null) return null
            return `There are currently ${d.peopleInSpace.toLocaleString()} people in space`
          },
        },
        {
          id: 'iss_position' as const,
          build: (d: SpaceFacts) => {
            if (d.issLat == null || d.issLon == null) return null
            return `The ISS is currently above ${d.issLat.toFixed(2)}, ${d.issLon.toFixed(2)}`
          },
        },
        {
          id: 'starlink_share' as const,
          build: (d: SpaceFacts) =>
            `Starlink makes up about ${d.share}% of all active satellites in orbit`,
        },
      ] satisfies Array<{ id: FactId; build: (d: SpaceFacts) => string | null }>,
    []
  )

  useEffect(() => {
    let cancelled = false

    const fallback = () => {
      if (!cancelled) setFact('Web developer based in the USA')
    }

    const pickRandom = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)]

    const load = async () => {
      try {
        const controller = new AbortController()
        const timeoutId = window.setTimeout(() => controller.abort(), 6500)

        const res = await fetch('/api/space-facts', {
          signal: controller.signal,
          headers: { Accept: 'application/json' },
        })

        window.clearTimeout(timeoutId)

        if (!res.ok) return fallback()

        const data: unknown = await res.json()
        if (!isSpaceFacts(data)) return fallback()

        const candidates = facts
          .map((f) => f.build(data))
          .filter((x): x is string => typeof x === 'string' && x.length > 0)

        if (candidates.length === 0) return fallback()

        const text = pickRandom(candidates)
        if (!cancelled) setFact(text)
      } catch {
        fallback()
      }
    }

    load()

    return () => {
      cancelled = true
    }
  }, [facts])

  return (
    <H.Container p={'330px 0 0 0'}>
      <S.About>{fact}</S.About>

      <S.InfoWrapper>
        <S.NameWrapper>
          <S.Name>Ilia Karavaev</S.Name>
          Full Stack Developer
        </S.NameWrapper>

        <S.ProfileWrapper>
          <S.ProfilePic src={'/iliav3.png'} />
        </S.ProfileWrapper>
      </S.InfoWrapper>

      <H.TitleH3>About me</H.TitleH3>

      <S.TextContainer>
        <S.Text>
          I am an application developer working on internal enterprise web applications used in production. Most of my
          work focuses on building and evolving systems that support real business processes, from HR and finance
          workflows to operational internal tools.
          <br />
        </S.Text>

        <S.Text>
          I work across the full stack, designing backend services, SQL Server databases, and frontend interfaces using
          modern frameworks. I enjoy taking ownership of complex systems, improving legacy codebases, and turning messy
          requirements into maintainable solutions that people can actually rely on. Outside of work, I stay active
          through outdoor sports and enjoy exploring new places across the USA.
        </S.Text>
      </S.TextContainer>
    </H.Container>
  )
}

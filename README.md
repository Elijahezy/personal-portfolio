# personal-portfolio

My personal site — a short bio, my work experience, links to my profiles around the web, and a downloadable
copy of my resume. Deployed on Vercel; this README is here mostly for future me.

## Stack

- **Next.js 15** on the Pages Router (not the App Router) with **React 19** and TypeScript
- **styled-components** for almost all the styling, with a light/dark theme
- **Zustand** for the small amount of client state there is
- **Chakra UI** — used only for its `<Icon>` component and the sun/moon icons
- **Framer Motion** for page transitions
- **react-three-fiber / drei / postprocessing** for the moon scene in the background

Tailwind is installed and configured but barely used. It came with the initial setup and I never got around
to ripping it out.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts: `npm run build`, `npm run start`, `npm run lint`. There are no tests.

## How it's put together

```
src/
  pages/                    # routes (Pages Router)
    index.tsx               # home: bio + work experience + socials
    experience-page.tsx     # full work experience list
    work-experience/[id]    # one experience entry
    projects.tsx            # projects list (currently not linked from the nav)
    projects/[id]           # one project
    api/space-facts.ts      # the live space fact shown at the top of the home page
  components/               # one folder per component
  store/store.ts            # all the site content lives here
  styles/                   # theme, global styles, shared layout primitives
```

A few things that are easy to forget:

**All the content is hardcoded.** There is no CMS and no database. Work experience entries and projects are
plain arrays in `src/store/store.ts` — to add a job or a project, edit that file.

**Every component has a sibling `*.styled.ts` file.** That's where its styled-components live. They read colors
off the theme (`${({ theme }) => theme.color.text}`), and the two themes are defined in `src/styles/theme.ts`.
`src/styles/ui.styled.ts` holds shared primitives (`Container`, `FlexContainer`, `TitleH3`, `Text`, `Tag`) that
take style props directly, e.g. `<H.TitleH3 m={'40px 0 20px 0'}>`.

**Icons are raw SVG path strings.** They live as constants in `src/components/consts.ts` and get rendered
through Chakra's `<Icon>`. If you add one, grab the path data and the right `viewBox` together — the viewBox
differs per icon and a mismatched one silently renders a blob.

**`/resume`** is a rewrite (see `next.config.js`) pointing at the PDF in `public/`. The nice URL means I can put
`/resume` on things without it breaking when I swap the file out.

**`/api/space-facts`** pulls satellite counts from Celestrak and ISS data from Open Notify, then caches the
result in Vercel KV for a day. If the fetch or the cache is unavailable, the bio falls back to a plain line of
text, so the page never depends on it.

**`_document.tsx`** does the SSR style collection for styled-components and loads the Google font. Don't delete
it — without it there's a flash of unstyled content on first paint.

`@/*` is aliased to `src/*`.

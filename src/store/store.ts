import {create} from 'zustand'


type Data = {
    id: string,
    name: string,
    img: string,
    description: string,
    demoLink: string,
    sourceLink: string,
    stack: string,
}

interface BearState {
    theme: string,
    switchTheme: (theme: string) => void,
    projects: Data[],
}

export const useBearStore = create<BearState>((set) => ({
    theme: 'dark',
    switchTheme: (theme: string) => {
        localStorage.setItem('theme', theme)
        set({theme: theme})
    },
    projects: [
        {
            id: 'wtw',
            name: 'What To Watch',
            img: '/projects/wtw.png',
            description: ' The Online Cinema App is a web-based application that allows users to browse and watch movies online. The app provides a user-friendly interface that makes it easy for users to find movies based on genre, popularity, and other criteria. The frontend of the app is built using HTML, CSS, and JavaScript and provides a sleek and modern user interface. Users can browse movies, add them to their watchlist.',
            demoLink: 'https://online-cinema-app-elijahezy.vercel.app/',
            sourceLink: 'https://github.com/Elijahezy/Online-Cinema-App',
            stack: 'React.ts, Redux, Redux-Toolkit, StyledComponents',
        },
        {
            id: 'guitar_shop',
            name: 'Guitar Shop',
            img: '/projects/guitar-shop.png',
            description: 'The Guitar Shop is an online store for guitar enthusiasts to buy guitars, guitar accessories, and related gear. The website features a sleek and modern user interface that makes it easy for users to browse, search, and purchase items.',
            demoLink: 'https://myguitarshop.vercel.app/',
            sourceLink: 'https://github.com/Elijahezy/guitar-shop/tree/module1',
            stack: 'React.ts, Redux, Redux-Toolkit, StyledComponents',
        }
    ]
}))

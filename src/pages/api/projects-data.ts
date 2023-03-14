// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'

type Data = {
    name: string,
    img: string,
    description: string,
    demoLink: string,
    sourceLink: string,
    stack: string,
}

const data: Data[] = [
    {
        name: 'What To Watch',
        img: '/projects/wtw.png',
        description: ' The Online Cinema App is a web-based application that allows users to browse and watch movies online. The app provides a user-friendly interface that makes it easy for users to find movies based on genre, popularity, and other criteria. The frontend of the app is built using HTML, CSS, and JavaScript and provides a sleek and modern user interface. Users can browse movies, add them to their watchlist.',
        demoLink: 'https://online-cinema-app-elijahezy.vercel.app/',
        sourceLink: 'https://github.com/Elijahezy/Online-Cinema-App',
        stack: 'React.ts, Redux, Redux-Toolkit, StyledComponents',
    },
    {
        name: 'Guitar Shop',
        img: '/projects/guitar-shop.png',
        description: 'Awesome Guitar Shop Online',
        demoLink: 'https://myguitarshop.vercel.app/',
        sourceLink: 'https://github.com/Elijahezy/guitar-shop/tree/module1',
        stack: 'React.ts, Redux, Redux-Toolkit, StyledComponents',
    }
]


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data[]>
) {
    res.status(200).json(data)
}

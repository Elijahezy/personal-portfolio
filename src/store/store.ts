import {create} from 'zustand'

export type ExperienceData = {
    id: string,
    company: string,
    position: string,
    duration: string,
    description: string,
    technologies: string,
    link: string,
    projects: string[] | null,
    fullDescription: string
}

export type Data = {
    id: string,
    name: string,
    img: string,
    description: string,
    shortDescription: string,
    demoLink: string,
    sourceLink: string,
    stack: string,
}

interface BearState {
    theme: string,
    switchTheme: (theme: string) => void,
    projects: Data[],
    experiences: ExperienceData[],
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
            description: 'The Online Cinema App is a web-based application that allows users to browse and watch movies online. The app provides a user-friendly interface that makes it easy for users to find movies based on genre, popularity, and other criteria. The frontend of the app is built using HTML, CSS, and JavaScript and provides a sleek and modern user interface. Users can browse movies, add them to their watchlist.',
            shortDescription: 'The Online Cinema App is a web-based application that allows users to browse and watch movies online.',
            demoLink: 'https://online-cinema-app-elijahezy.vercel.app/',
            sourceLink: 'https://github.com/Elijahezy/Online-Cinema-App',
            stack: 'React.ts, Redux, Redux-Toolkit, StyledComponents',
        },
        {
            id: 'guitar_shop',
            name: 'Guitar Shop',
            img: '/projects/guitar-shop.png',
            description: 'The Guitar Shop is an online store for guitar enthusiasts to buy guitars, guitar accessories, and related gear. The website features a sleek and modern user interface that makes it easy for users to browse, search, and purchase items.',
            shortDescription: 'The Guitar Shop is an online store for guitar enthusiasts to buy guitars, guitar accessories, and related gear.',
            demoLink: 'https://myguitarshop.vercel.app/',
            sourceLink: 'https://github.com/Elijahezy/guitar-shop/tree/module1',
            stack: 'React.ts, Redux, Redux-Toolkit, StyledComponents',
        },
        {
            id: 'trip_planner',
            name: 'Trip Planner',
            img: '/projects/trip.png',
            description: 'Introducing a powerful tool for travel planning! This website is designed to help you store and organize all of your past, present, and future trips in one place. With the ability to create custom events for each trip, you can easily keep track of important details such as destination, transportation, offers, dates, and expenses. The site features easy sorting options for trips by past, present, and future, as well as filtering options by day, event, time, price, and offers. Additionally, users can check out graphical stats on their travel expenses, which can be customized by date range. The site is built with pure JavaScript, Chart.js, day.js, flatpickr, and OOP, utilizing MVC architecture for streamlined functionality.',
            shortDescription: 'Introducing a powerful tool for travel planning!',
            demoLink: 'https://trip-planner-phi.vercel.app/',
            sourceLink: 'https://github.com/Elijahezy/Trip-planner',
            stack: 'Javascript, Chart.js, dayjs, flatpickr'

        }
    ],
    experiences: [
        {
            id: 'wistar',
            company: 'The Wistar Institute',
            position: 'Application Developer',
            duration: 'May 2023 - Present',
            description: 'Responsible for developing and maintaining internal enterprise web applications.',
            technologies: 'Vue.js/Quasar, TypeScript, PHP/Symfony, Node.js/Express, MSSQL, Azure',
            link: 'https://www.wistar.org/',
            fullDescription: 'I worked at The Wistar Institute as part of a small development team, focusing on internal projects designed to support around 300 employees. My responsibilities included not only developing these applications but also thoroughly testing them and incorporating feedback from end users to ensure they met the institute\'s needs effectively.',
            projects: [
                'Staff Evaluation: Developed a system to manage the annual employee evaluation process, ensuring that all assessments are carried out efficiently and effectively.',
                'Device Management: Built a comprehensive system to track and manage all devices within the institute, ensuring up-to-date records and streamlined operations.',
                'Room Reservation System: Created a system that allows users to book various rooms and spaces, such as classrooms and conference rooms, facilitating better resource management.',
                'Scientific Order Request Forms: Worked on developing smaller forms for scientific order requests, making the process more accessible and organized.',
                'People Directory and Onboarding Tools: internal applications supporting employee data management and onboarding workflows',
                'Annual Compensation Platform: application for managing compensation review cycles and approval processes'
            ],

        },
        {
            id: 'ligaa',
            company: 'Ligaa Agency',
            position: 'Intern | Front-end',
            duration: 'Mar 2022 - Mar 2023',
            description: 'Worked on various frontend projects, creating responsive and user-friendly interfaces.',
            technologies: 'React, Redux, Styled-Components, JavaScript, TypeScript',
            link: 'https://ligaa.agency/',
            fullDescription: '',
            projects: null,
        }
    ]
}))

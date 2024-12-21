import { faCodepen, faFacebook, faInstagram, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBirthdayCake, faChartLine, faCode, faEnvelope, faMapMarkedAlt, faMobile, faMobileAlt, faPalette, faPencilRuler, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const Links = [
    {
        href: "/portfolio", 
        content: "Home"
    },
    {
        href: "/portfolio/services", 
        content: "Services"
    },
    {
        href: "/portfolio/resume", 
        content: "Resume"
    },
    {
        href: "/portfolio/projects", 
        content: "Projects"
    },
    {
        href: "/portfolio/contact", 
        content: "Contact"
    }
];


export const Home_Content = {
    greeting: "Hello, it's me",
    jobTitle: "I'm a ",
    description: "I'm a Moroccan based front-end developer focused on creating friendly websites for users. I'm passionate to find solutions to help the world and my self.",
    links: [
        {
            href:"#",
            content: "Hire Me"
        },
        {
            href:"#",
            content: "Download CV"
        }
    ],
    socialMediaLinks: [
        {
            icon: faLinkedinIn,
            href: "https://linkedin.com", 
        },
        {
            icon: faFacebook,
            href: "https://facebook.com", 
        },
        {
            icon: faYoutube,
            href: "https://youtube.com", 
        },
        {
            icon: faCodepen,
            href: "https://codepen.io", 
        },
        {
            icon: faInstagram,
            href: "https://instagram.com", 
        }
    ]
}

export const Service_Content = [
    {
        icon: faCode,
        title: "Web Developement", 
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, aut cumque provident sapiente officiis perferendis!"
    },
    {
        icon: faPalette,
        title: "UI/Ux Design", 
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, aut cumque provident sapiente officiis perferendis!"
    },
    {
        icon: faShoppingCart,
        title: "E-commerce Solutions", 
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, aut cumque provident sapiente officiis perferendis!"
    },
    {
        icon: faChartLine,
        title: "SEO", 
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, aut cumque provident sapiente officiis perferendis!"
    },
    {
        icon: faPencilRuler,
        title: "Graphic Design", 
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, aut cumque provident sapiente officiis perferendis!"
    },
    {
        icon: faMobileAlt,
        title: "Mobile App Development", 
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, aut cumque provident sapiente officiis perferendis!"
    }
];


export const Resume_Content = {
    about: {
        title1: "Who Am I?",
        description1: "I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.",
        title2: "Personal Info",
        description2: [
            {
                icon: faMobile,
                title: "Phone",
                content: "+212616657085"
            },
            {
                icon: faEnvelope,
                title: "Email",
                content: "you@gmail.com"
            },
            {
                icon: faMapMarkedAlt,
                title: "Address",
                content: "Morocco"
            },
            {
                icon: faBirthdayCake,
                title: "Birthday",
                content: "08/11/2000"
            }
        ],
        awards: [
            {
                number: "5+",
                title: "Years Experience"
            },
            {
                number: "350+",
                title: "Happy Clients"
            },
            {
                number: "100+",
                title: "Completed Projects"
            },
            {
                number: "50",
                title: "Get Awards"
            }
        ]
    },
    skills: [
        {
            title: "HTML",
            percent: "95%"
        },
        {
            title: "CSS",
            percent: "90%"
        },
        {
            title: "JavaScript",
            percent: "80%"
        },
        {
            title: "React Js",
            percent: "70%"
        },
        {
            title: "Tailwind Css",
            percent: "75%"
        },
        {
            title: "Wordpress",
            percent: "65%"
        }
    ],
    education: [
        {
            date: "2010-2014",
            title: "Computer Science",
            place: "University Of Morocco",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ullam corporis quam atque suscipit! Dolorum?"
        },
        {
            date: "2010-2014",
            title: "Computer Science",
            place: "University Of Morocco",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ullam corporis quam atque suscipit! Dolorum?"
        },
        {
            date: "2010-2014",
            title: "Computer Science",
            place: "University Of Morocco",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ullam corporis quam atque suscipit! Dolorum?"
        }
    ],
    experience: [
        {
            date: "2013-2014",
            title: "Front End Developer",
            place: "University Of Morocco",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ullam corporis quam atque suscipit! Dolorum?"
        },
        {
            date: "2014-2017",
            title: "Full Stack Developer",
            place: "University Of Morocco",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ullam corporis quam atque suscipit! Dolorum?"
        },
        {
            date: "2018-2020",
            title: "Mobile Developer",
            place: "University Of Morocco",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ullam corporis quam atque suscipit! Dolorum?"
        }
    ]
}



export const Projects_Content = {
    projects: [
        {
            id: 1,
            img: '/portfolio/images/portfolio1.jpg',
            title: 'Portfolio website',
            descr: 'This is a portfolio website that show my skills and experience',
            category: 'portfolio',
            tools: ['HTML', 'CSS', 'JS', 'Bootstrap']
        },
        {
            id: 2,
            img: '/portfolio/images/ecommerce1.jpg',
            title: 'ecommerce website',
            descr: 'This is an ecommerce website that contain many features of show cart and edit profile and so more',
            category: 'ecommerce',
            tools: ['HTML', 'CSS', 'JS', 'React Js', 'Tailwind Css', 'Framer Motion', 'Node Js']
        },
        {
            id: 3,
            img: '/portfolio/images/movies1.jpg',
            title: 'movies website',
            descr: 'This is a movies website that get data from an api and show it',
            category: 'movies',
            tools: ['HTML', 'CSS', 'JS', 'React Js']
        },
        {
            id: 4,
            img: '/portfolio/images/portfolio2.jpg',
            title: 'Portfolio website',
            descr: 'This is a portfolio website that show my skills and experience',
            category: 'portfolio',
            tools: ['HTML', 'CSS', 'JS', 'React Js', 'Bootstrap']
        },
        {
            id: 5,
            img: '/portfolio/images/game1.jpg',
            title: 'game app',
            descr: 'This is a mobile game application',
            category: 'games',
            tools: ['HTML', 'CSS', 'JS', 'React Native', 'Tailwind CSS']
        }
    ],
    filteredProjectsLinks: [
        {
            href: "#",
            content: "All"
        },
        {
            href: "#",
            content: "Portfolio"
        },
        {
            href: "#",
            content: "Movies"
        },
        {
            href: "#",
            content: "Ecommerce"
        },
        {
            href: "#",
            content: "Games"
        }
    ]
}



export const Contact_Content = {
    contactLinks: [
        {
            icon: 'bx bx-map',
            title: "Location",
            content: "Morocco, Agadir"
        },
        {
            icon: 'bx bx-phone',
            title: "Number",
            content: "+212 616657085"
        },
        {
            icon: 'bx bx-envelope-open',
            title: "Email",
            content: "you@gmail.com"
        }
    ]
}


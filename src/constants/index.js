import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  git,
  figma,
  // instagram
} from "../assets";

import instagram from '../assets/tech/instagram.svg'
import facebook from '../assets/tech/facebook.svg'
import google from '../assets/tech/google.svg'
import googleAds from '../assets/tech/google-ads.svg'
import python from '../assets/tech/python.svg'
import django from '../assets/tech/django.svg'
// import powerPoint from '../assets/tech/power-point.svg'
// import excel from '../assets/tech/excel.svg'
// import word from '../assets/tech/word.svg'
import grayson from '../assets/grayson.png'
import positivus from '../assets/positivus.png'
import totembo from '../assets/totembo.png'
import oku from '../assets/oku.png'
import bank from '../assets/bank.png'
import airpods from '../assets/airpods.png'
import vuecinema from '../assets/vue-cinema.png'
import dummy from '../assets/dummy.png'
import weather from '../assets/weather.png'

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: {
      en: "Web Developer",
      ru: "Веб разработчик",
    },
    icon: web,
  },
  {
    title: {
      en: "React Developer",
      ru: "React разработчик",
    },
    icon: mobile,
  },
  {
    title: {
      en: "Backend Developer",
      ru: "Backend разработчик",
    },
    icon: backend,
  },
  {
    title: {
      en: "Internet Marketer",
      ru: "Интернет маркетолог",
    },
    icon: creator,
  },
];



const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "instagram",
    icon: instagram,
  },
  {
    name: "facebook",
    icon: facebook,
  },
  {
    name: "google",
    icon: google,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "django",
    icon: django,
  },
  // {
  //   name: "powerpoint",
  //   icon: powerPoint,
  // },
  // {
  //   name: "excel",
  //   icon: excel,
  // },
  // {
  //   name: "word",
  //   icon: word,
  // },
];

const experiences = [
  {
    title: {
      en: "Instagram",
      ru: "Instagram",
    },
    company_name: {
      en: "Instagram Ads Specialist",
      ru: "Специалист по рекламе в Instagram",
    },
    icon: instagram,
    iconBg: "#383E56",
    date: {
      en: "November 2021 - September 2023",
      ru: "Ноябрь 2021 - Сентябрь 2023",
    },
    points: {
      en: [
        "Developing and maintaining Instagram ad campaigns.",
        "Launching advertising campaigns on Instagram",
        "Creating engaging posts and social media content.",
        "Collaboration with cross-functional teams to optimize social media strategies.",
        "Monitoring and analyzing campaign performance.",
        "Communicating with clients and stakeholders to adjust advertising plans.",
      ],
      ru: [
        "Разработка и поддержка рекламных кампаний в Instagram.",
        "Запуск рекламных кампаний в Instagram",
        "Создание продающих постов и контента для социальных сетей.",
        "Сотрудничество с различными командами для оптимизации стратегий в социальных сетях.",
        "Мониторинг и анализ эффективности кампаний.",
        "Взаимодействие с клиентами и заинтересованными сторонами для корректировки рекламных планов.",
      ],
    },
  },
  {
    title: {
      en: "Facebook",
      ru: "Facebook",
    },
    company_name: {
      en: "Facebook Advertising",
      ru: "Специалист по рекламе Facebook",
    },
    icon: facebook,
    iconBg: "#E6DEDD",
    date: {
      en: "November 2021 -  September 2023",
      ru: "Ноябрь 2021 - Сентябрь 2022",
    },
    points: {
      en: [
        "Developing and maintaining web-sites using React Native.",
        "Collaborating with designers and product teams to ensure high-quality features.",
        "Ensuring smooth performance and user experience.",
        "Conducting code reviews and performance optimizations.",
      ],
      ru: [
        "Разработка и поддержка веб-сайтов на React Native.",
        "Сотрудничество с дизайнерами и продуктовыми командами для создания качественных функций.",
        "Обеспечение бесперебойной работы и удобства использования на мобильных устройствах.",
        "Проведение ревизий кода и оптимизации производительности.",
      ],
    },
  },
  {
    title: {
      en: "Google",
      ru: "Google",
    },
    company_name: {
      en: "Google Ads",
      ru: "Реклама в Google",
    },
    icon: googleAds,
    iconBg: "#E6DEDD",
    date: {
      en: "November 2021 -  September 2023",
      ru: "Ноябрь 2021 - Сентябрь 2022",
    },
    points: {
      en: [
        "Developing and managing advertising campaigns in Google Ads.",
        "Analyzing and optimizing the performance of advertising campaigns.",
        "Creating and testing various ad formats to enhance effectiveness.",
        "Collaborating with clients to understand their needs and achieve optimal results.",
      ],
      ru: [
        "Разработка и управление рекламными кампаниями в Google Ads.",
        "Анализ и оптимизация производительности рекламных кампаний.",
        "Создание и тестирование различных рекламных объявлений для повышения эффективности.",
        "Сотрудничество с клиентами для понимания их потребностей и достижения лучших результатов.",
      ],
    },
  },
  {
    title: {
      en: "Python",
      ru: "Python",
    },
    company_name: {
      en: "Python-Django",
      ru: "Python-Django",
    },
    icon: python,
    iconBg: "#E6DEDD",
    date: {
      en: "October 2022",
      ru: "Октябрь 2022",
    },
    points: {
      en: [
        "Developing and maintaining web-applications in Python..",
        "Creating efficient and scalable solutions using Python frameworks(Django).",
        "Optimizing code to improve performance and scalability.",
        "Collaborating with the team to integrate Python applications with other systems and services.",
      ],
      ru: [
        "Разработка и поддержка веб-приложений на Python.",
        "Создание эффективных и масштабируемых решений с использованием фреймворков Python(Django).",
        "Оптимизация кода для повышения производительности и улучшения масштабируемости.",
        "Работа в команде для интеграции Python-приложений с другими системами и сервисами.",
      ]
    },
  },
  {
    title: {
      en: "React",
      ru: "React",
    },
    company_name: {
      en: "React Developer",
      ru: "Разработчик React",
    },
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: {
      en: "November 2023",
      ru: "Ноябрь 2023",
    },
    points: {
      en: [
        "Developing and maintaining web-sites using React Native.",
        "Collaborating with designers and product teams to ensure high-quality features.",
        "Ensuring smooth performance and user experience.",
        "Conducting code reviews and performance optimizations.",
      ],
      ru: [
        "Разработка и поддержка веб-сайтов на React Native.",
        "Сотрудничество с дизайнерами и продуктовыми командами для создания качественных функций.",
        "Обеспечение бесперебойной работы и удобства использования на мобильных устройствах.",
        "Проведение ревизий кода и оптимизации производительности.",
      ],
    },
  },
  {
    title: {
      en: "JavaScript",
      ru: "JavaScript",
    },
    company_name: {
      en: "JavaScript Developer",
      ru: "Разработчик JAvaScript",
    },
    icon: javascript,
    iconBg: "#E6DEDD",
    date: {
      en: "November 2023",
      ru: "Ноябрь 2023",
    },
    points: {
      en: [
        "Development and maintenance of web applications using JavaScript.",
        "Creating and maintaining user interfaces using modern frameworks and libraries, such as React.js and Node.js.",
        "Optimizing web application performance and debugging issues.",
        "Collaborating with teams to implement features and enhance user experience.",
      ],
      ru: [
        "Разработка и поддержка веб-приложений с использованием JavaScript.",
        "Создание и поддержка пользовательских интерфейсов с использованием современных фреймворков и библиотек, таких как React.js и Node.js.",
        "Оптимизация производительности веб-приложений и устранение ошибок.",
        "Сотрудничество с командами для реализации функций и улучшения пользовательского опыта.",
      ],
    },
  },
];

const testimonials = [
  {
    testimonial: {
      en: "I thought it was impossible to make a website as beautiful as our product, but Mokhina proved me wrong.",
      ru: "Я думала, что невозможно создать сайт такой же красивый, как наш продукт, но Мохина доказала обратное.",
    },
    name: {
      en: "Sara Lee",
      ru: "Сара Ли",
    },
    designation: {
      en: "CFO",
      ru: "Финансовый директор",
    },
    company: {
      en: "Acme Co",
      ru: "Акме Ко",
    },
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: {
      en: "I've never met a web developer who truly cares about their clients' success like Mokhina does.",
      ru: "Я никогда не встречал веб-разработчика, который так заботится о успехе своих клиентов, как Мохина.",
    },
    name: {
      en: "Chris Brown",
      ru: "Крис Браун",
    },
    designation: {
      en: "COO",
      ru: "Операционный директор",
    },
    company: {
      en: "DEF Corp",
      ru: "ДЕФ Корп",
    },
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: {
      en: "After Mokhina optimized our website, our traffic increased by 50%. We can't thank them enough!",
      ru: "После того, как Мохина оптимизировалф наш сайт, наш трафик увеличился на 50%.",
    },
    name: {
      en: "Lisa Wang",
      ru: "Лиза Ван",
    },
    designation: {
      en: "CTO",
      ru: "Технический директор",
    },
    company: {
      en: "456 Enterprises",
      ru: "456 Предприятия",
    },
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];



const projects = [
  {
    name: {
      en: "Grayson",
      ru: "Grayson",
    },
    link: 'https://grayson-nu.vercel.app/',
    description: {
      en: "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      ru: "Веб-платформа, которая позволяет пользователям искать, бронировать и управлять арендой автомобилей у различных поставщиков, предлагая удобное и эффективное решение для потребностей в транспорте.",
    },
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: grayson,
    source_code_link: "https://github.com/Mokhina27/grayson",
  },
  {
    name: {
      en: "Positivus",
      ru: "Positivus",
    },
    link: "https://positivus-orcin.vercel.app/",
    description: {
      en: "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      ru: "Веб-приложение, которое позволяет пользователям искать вакансии, просматривать предполагаемые диапазоны зарплат для позиций и находить доступные рабочие места в зависимости от их текущего местоположения.",
    },
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sass",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
    ],
    image: positivus,
    source_code_link: "https://github.com/Mokhina27/positivus",
  },
  {
    name: {
      en: "Oku",
      ru: "Oku",
    },
    link: "https://oku1.vercel.app/",
    description: {
      en: "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      ru: "Комплексная платформа для бронирования путешествий, которая позволяет пользователям бронировать рейсы, отели и аренду автомобилей, а также предлагает отобранные рекомендации по популярным направлениям.",
    },
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: oku,
    source_code_link: "https://github.com/Mokhina27/oku",
  },
  {
    name: {
      en: "Totembo",
      ru: "Totembo",
    },
    link: "https://totembo1-qk2w.vercel.app/",
    description: {
      en: "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      ru: "Комплексная платформа для бронирования путешествий, которая позволяет пользователям бронировать рейсы, отели и аренду автомобилей, а также предлагает отобранные рекомендации по популярным направлениям.",
    },
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: totembo,
    source_code_link: "https://github.com/Mokhina27/totembo",
  },
  {
    name: {
      en: "Bank",
      ru: "Bank",
    },
    link: "https://bank1-three.vercel.app/",
    description: {
      en: "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      ru: "Комплексная платформа для бронирования путешествий, которая позволяет пользователям бронировать рейсы, отели и аренду автомобилей, а также предлагает отобранные рекомендации по популярным направлениям.",
    },
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: bank,
    source_code_link: "https://github.com/Mokhina27/bank",
  },
  {
    name: {
      en: "Airpods",
      ru: "Airpods",
    },
    link: "https://airpods1.vercel.app/",
    description: {
      en: "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      ru: "Комплексная платформа для бронирования путешествий, которая позволяет пользователям бронировать рейсы, отели и аренду автомобилей, а также предлагает отобранные рекомендации по популярным направлениям.",
    },
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: airpods,
    source_code_link: "https://github.com/Mokhina27/airpods",
  },
  {
    name: {
      en: "Vue Cinema",
      ru: "Vue Cinema",
    },
    link: "https://vue-cinema1.vercel.app/",
    description: {
      en: "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      ru: "Комплексная платформа для бронирования путешествий, которая позволяет пользователям бронировать рейсы, отели и аренду автомобилей, а также предлагает отобранные рекомендации по популярным направлениям.",
    },
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: vuecinema,
    source_code_link: "https://github.com/Mokhina27/vue-cinema",
  },
  {
    name: {
      en: "DummyJSON-store",
      ru: "DummyJSON-store",
    },
    link: "https://react-store1-pink.vercel.app/",
    description: {
      en: "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      ru: "Комплексная платформа для бронирования путешествий, которая позволяет пользователям бронировать рейсы, отели и аренду автомобилей, а также предлагает отобранные рекомендации по популярным направлениям.",
    },
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
      {
        name: "zustand",
        color: "blue-text-gradient",
      },
    ],
    image: dummy,
    source_code_link: "https://github.com/Mokhina27/react-store",
  },
  {
    name: {
      en: "Weather",
      ru: "Weather",
    },
    link: "https://react-weather1-tau.vercel.app/",
    description: {
      en: "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      ru: "Комплексная платформа для бронирования путешествий, которая позволяет пользователям бронировать рейсы, отели и аренду автомобилей, а также предлагает отобранные рекомендации по популярным направлениям.",
    },
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "blue-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/Mokhina27/react-weather",
  },
];


export { services, technologies, experiences, testimonials, projects };
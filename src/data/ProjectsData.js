import eComImg from '../assets/e-commerce-home.png'

const p1 = {
    name: "3D-Commerce",
    description: "A fully functional e-commerce Website, featuring 3D-printed products. The App integrates " + 
                 "personalized shipping options, online payments via Stripe as well as administration capabilities " +
                 "through the Commerce-JS third party platform.", 
    technologiesUsed:["Javascript" , "React" , "MaterialUI" ,
                    "Redux" , "React-Router" , "Commerce-JS API" ,
                     "Stripe API" , "G-Maps Api"],
    githubLink: "https://github.com/gouvisPan/e-commerce",
    demoLink: "https://github.com/gouvisPan/e-commerce",
    img : eComImg
}
const p2 = {
    name: "Crypto Live",
    description: "A cryptocurrency stats and information monitoring application. The webApp fetches various stats  for"+
    " the first -by market cap- 100 coins/tokens and displays it to the user. The App also provides a bookmark mechanism "+ 
    " via local storage.",
    technologiesUsed:["Javascript" , "SASS" , "Coingecko API" , "MCV architecture"],
    githubLink: "https://github.com/gouvisPan/cryptoPrices",
    demoLink: ""
}

const p3 = {
    name: "HypeCoach",
    description: "A complete hypertrophy coach for Android devices. The applications gathers biometric data from the user"+
    " and provides a personalized workout and diet plan. Both plans adopt dynamically to the user's needs by utilizing his/hers"+
    " weekly feedback.",
    technologiesUsed:["Kotlin" , "MVVM architecture" , "Room DB" ,
                     "Firebase Auth" , "Firebase CloudStorage" , "Navigation Component", "Coroutines"],
    githubLink: "https://github.com/gouvisPan/HypeCoach",
    demoLink: ""
}

const p4 = {
    name: "Weather App",
    description: 'Fetching and displaying data from the "openWeather API", for every city around the globe',
    technologiesUsed:["Javascript" , "React" , "Redux" ],
    githubLink: "https://github.com/gouvisPan/ReactWeatherApp",
    demoLink: ""
}
const  ProjectsData = [p1,p2,p3,p4] ;

export default  ProjectsData 
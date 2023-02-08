import eComLanding from "../assets/e-commerce/Landing-Page.png";
import eComStore from "../assets/e-commerce/Store.png";
import eComCustom from "../assets/e-commerce/Custom.png";
import eComLandingM from "../assets/e-commerce/Landing-Mobile.png";
import eComCartM from "../assets/e-commerce/Cart-Mobile.png";
import eComUploadM from "../assets/e-commerce/Upload-Mobile.png";

import c1 from "../assets/crypto-live/cl-1.png";
import c2 from "../assets/crypto-live/cl-2.png";
import cm1 from "../assets/crypto-live/cl-m1.png";
import cm2 from "../assets/crypto-live/cl-m2.png";
import cm3 from "../assets/crypto-live/cl-m3.png";

import h1 from "../assets/hypecoach/main-fragment.png";
import h2 from "../assets/hypecoach/diet-fragment.png";
import h3 from "../assets/hypecoach/menu.png";
import h4 from "../assets/hypecoach/profile.png";
import h5 from "../assets/hypecoach/register.png";
import h6 from "../assets/hypecoach/working-out.png";

import ht1 from "../assets/habit-tracker/home.png";
import ht2 from "../assets/habit-tracker/profile.png";
import ht3 from "../assets/habit-tracker/statistics.png";
import htm1 from "../assets/habit-tracker/homeM.png";
import htm2 from "../assets/habit-tracker/profileM.png";
import htm3 from "../assets/habit-tracker/statisticsM.png";

const p1 = {
  name: "3D-Commerce",
  description:
    "A fully functional e-commerce Website, featuring 3D-printed products. The App integrates " +
    "personalized shipping options, online payments via Stripe as well as administration capabilities " +
    "through the Commerce-JS third party platform.",
  technologiesUsed: [
    "Javascript",
    "React",
    "Redux",
    "React-Router",
    "Commerce-JS API",
    "MaterialUI",
    "Stripe API",
    "G-Maps Api",
  ],
  githubLink: "https://github.com/gouvisPan/e-commerce",
  demoLink: "https://d-commerce-f3fe7.web.app",
  imgs: [
    eComLanding,
    eComStore,
    eComCustom,
    [eComLandingM, eComCartM, eComUploadM],
  ],
  android: false,
};
const p2 = {
  name: "Habit Tracker",
  description:
    "A simple habit tracker web app, that integrades user management functionality and CRUD operations." +
    " The app tracks user's habits on a weekly basis and displays adherence statistics for each habit.",
  technologiesUsed: [
    "Typescript",
    "React",
    "Redux-toolkit",
    "React-Router",
    "SASS",
    "Firebase Auth",
    "Firestore",
  ],
  githubLink: "https://github.com/gouvisPan/habit-tracker",
  demoLink: "https://technical-assessment-dev.web.app/",
  imgs: [ht1, ht2, ht3, [htm1, htm2, htm3]],
  android: false,
};

const p3 = {
  name: "Crypto Live",
  description:
    "A cryptocurrency stats and information monitoring application. The webApp fetches various stats  for " +
    "the first -by market cap- 100 coins/tokens and displays it to the user. The App also provides a bookmark mechanism " +
    "via local storage.",
  technologiesUsed: ["Javascript", "SASS", "MCV architecture", "Coingecko API"],
  githubLink: "https://github.com/gouvisPan/cryptoPrices",
  demoLink: "https://luminous-clafoutis-2290a4.netlify.app",
  imgs: [c1, c2, [cm1, cm2, cm3]],
  android: false,
};

const p4 = {
  name: "HypeCoach",
  description:
    "A complete hypertrophy coach for Android devices. The applications gathers biometric data from the user" +
    " and provides a personalized workout and diet plan. Both plans adapt dynamically to the user's needs by utilizing his/hers" +
    " weekly feedback.",
  technologiesUsed: [
    "Kotlin",
    "MVVM architecture",
    "Room DB",
    "Firebase Auth",
    "Firebase CloudStorage",
    "Navigation Component",
    "Coroutines",
  ],
  githubLink: "https://github.com/gouvisPan/HypeCoach",
  demoLink: "",
  imgs: [
    [h1, h2, h3],
    [h4, h5, h6],
  ],
  android: true,
};

const p5 = {
  name: "Weather App",
  description:
    'Fetching and displaying data from the "openWeather API", for every city around the globe',
  technologiesUsed: ["Javascript", "React", "Redux"],
  githubLink: "https://github.com/gouvisPan/ReactWeatherApp",
  demoLink: "",
  imgs: [],
  android: false,
};
const ProjectsData = [p1, p2, p3, p4];

const webMainArray = [
  "Javascript",
  "React",
  "Typescript",
  "CSS",
  "SCSS",
  "NodeJS",
  "Express",
  "MongoDB",
];

const webSecArray = [
  "Redux Toolkit",
  "Axios",
  "React-Router",
  "MVC",
  "Stripe",
  "Commerce-JS",
  "Mongoose",
  "Firebase Hosting",
];
const android = [
  "Kotlin",
  "Java",
  "RoomDB",
  "MVVM",
  "Navigation Component",
  "Retrofit",
  "Coroutines",
  "Firebase CloudStorage",
  "React-Native",
];

export { webMainArray };
export { webSecArray };
export { android };

export default ProjectsData;

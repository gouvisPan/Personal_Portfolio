import eComLanding from "../assets/e-commerce/Landing-Page.png";
import eComStore from "../assets/e-commerce/Store.png";
import eComCustom from "../assets/e-commerce/Custom.png";
import eComLandingM from "../assets/e-commerce/Landing-Mobile.png";

import c1 from "../assets/crypto-live/cl-1.png";
import c2 from "../assets/crypto-live/cl-2.png";
import cM from "../assets/crypto-live/cl-M.png";

const p1 = {
  name: "3D-Commerce",
  description:
    "A fully functional e-commerce Website, featuring 3D-printed products. The App integrates " +
    "personalized shipping options, online payments via Stripe as well as administration capabilities " +
    "through the Commerce-JS third party platform.",
  technologiesUsed: [
    "Javascript",
    "React",
    "MaterialUI",
    "Redux",
    "React-Router",
    "Commerce-JS API",
    "Stripe API",
    "G-Maps Api",
  ],
  githubLink: "https://github.com/gouvisPan/e-commerce",
  demoLink: "https://github.com/gouvisPan/e-commerce",
  imgs: [eComLanding, eComStore, eComCustom, eComLandingM],
};
const p2 = {
  name: "Crypto Live",
  description:
    "A cryptocurrency stats and information monitoring application. The webApp fetches various stats  for " +
    "the first -by market cap- 100 coins/tokens and displays it to the user. The App also provides a bookmark mechanism " +
    "via local storage.",
  technologiesUsed: ["Javascript", "SASS", "Coingecko API", "MCV architecture"],
  githubLink: "https://github.com/gouvisPan/cryptoPrices",
  demoLink: "",
  imgs: [c1, c2, cM],
};

const p3 = {
  name: "HypeCoach",
  description:
    "A complete hypertrophy coach for Android devices. The applications gathers biometric data from the user" +
    " and provides a personalized workout and diet plan. Both plans adopt dynamically to the user's needs by utilizing his/hers" +
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
  imgs: [],
  android: true,
};

const p4 = {
  name: "Weather App",
  description:
    'Fetching and displaying data from the "openWeather API", for every city around the globe',
  technologiesUsed: ["Javascript", "React", "Redux"],
  githubLink: "https://github.com/gouvisPan/ReactWeatherApp",
  demoLink: "",
  imgs: [],
};
const ProjectsData = [p1, p2, p3, p4];

export default ProjectsData;

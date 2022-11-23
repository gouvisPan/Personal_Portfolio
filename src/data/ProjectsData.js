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
  name: "Crypto Live",
  description:
    "A cryptocurrency stats and information monitoring application. The webApp fetches various stats  for " +
    "the first -by market cap- 100 coins/tokens and displays it to the user. The App also provides a bookmark mechanism " +
    "via local storage.",
  technologiesUsed: ["Javascript", "SASS", "MCV architecture", "Coingecko API"],
  githubLink: "https://github.com/gouvisPan/cryptoPrices",
  demoLink: "",
  imgs: [c1, c2, [cm1, cm2, cm3]],
  android: false,
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
  imgs: [
    [h1, h2, h3],
    [h4, h5, h6],
  ],
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
  android: false,
};
const ProjectsData = [p1, p2, p3, p4];

export default ProjectsData;

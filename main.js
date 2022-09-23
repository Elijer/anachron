import { createElement, append } from './utility/jsx.js'

/** @jsx createElement */

// ------ ABOVE THIS LINE IS MANDATORY FOR ALL FILES USING JSX ---------

import './style/style.scss'

import { gg } from './utility/helpers.js'

// import { banner } from './components/banner/banner.jsx'
// import { portfolio } from './components/portfolio/portfolio.jsx'
// import { about } from './components/about/about.jsx'
// import { stack } from './components/stack/stack.jsx'
//import { textbox } from './components/textbox/textbox';
//import { scroll } from './components/scroll/scroll.jsx'

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCXnZXKK94myUyAcMihCXLfv-62NSmgZyY",
    authDomain: "codingportfolio.firebaseapp.com",
    projectId: "codingportfolio",
    storageBucket: "codingportfolio.appspot.com",
    messagingSenderId: "1096720885728",
    appId: "1:1096720885728:web:8a4560e11e63a7e7f02d85"
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

// banner()
// portfolio()
// about()
// stack()
//textbox()
//scroll()
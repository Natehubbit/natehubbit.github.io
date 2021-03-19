import mail from '../assets/mail.svg'
import linkedin from '../assets/linked.svg'
import git from '../assets/git.svg'
import sass from '../assets/sass.svg'
import react from '../assets/react.svg'
import css from '../assets/css.svg'
import html from '../assets/html.svg'
import redux from '../assets/redux.svg'
import firebase from '../assets/firebase.svg'
import nodejs from '../assets/nodejs.svg'
import solidity from '../assets/solidity.svg'
import ts from '../assets/ts.svg'
import UtilService from '../services/UtilService'

const gh = UtilService
  .importAll((require as any)
  .context('../assets/gh', false, /\.(png|jpe?g|svg)$/))
  .map((d:any)=>d.default)

const wallet = UtilService
  .importAll((require as any)
  .context('../assets/fintech', false, /\.(png|jpe?g|svg)$/))
  .map((d:any)=>d.default)

const flinchDash = UtilService
  .importAll((require as any)
  .context('../assets/flinchDash', false, /\.(png|jpe?g|svg)$/))
  .map((d:any)=>d.default)

const flinchMobile = UtilService
  .importAll((require as any)
  .context('../assets/flinchMobile', false, /\.(png|jpe?g|svg)$/))
  .map((d:any)=>d.default)

const cakes = UtilService
  .importAll((require as any)
  .context('../assets/cakes', false, /\.(png|jpe?g|svg)$/))
  .map((d:any)=>d.default)

export const NAV_LINKS = [
  {
    icon: git,
    link: 'https://www.github.com/natehubbit',
    alt: 'github'
  },
  {
    icon: linkedin,
    link: 'https://www.linkedin.com/in/hubert-mbitor-38204b194/',
    alt: 'linkedin'
  },
  {
    icon: mail,
    link: 'mailto:natehubbit1001@gmail.com',
    alt: 'mail'
  }
]

export const PROJECTS = [
  {
    label: 'Ghyrate',
    summary: 'An online directory of companies in Africa',
    code: '',
    project: 'https://www.ghyrate.com',
    stack: [
      react,
      redux,
      css,
      sass,
      html
    ],
    gallery: [
      ...gh
    ]
  },
  {
    label: 'Flinch',
    summary: 'A mobile app for celebs to make personalized videos for their fans',
    code: 'https://github.com/FlinchEngineering/Mobile',
    project: 'https://youtu.be/aNltxnVSX4k',
    stack: [
      react,
      redux,
      ts,
      firebase,
      nodejs,
    ],
    gallery: [
      ...flinchMobile
    ]
  },
  {
    label: 'Flinch Dashboard',
    summary: 'A website dashboard to manage celebs on Flinch',
    code: 'https://github.com/FlinchEngineering/Dashboard',
    project: 'https://shoutouts-3c57c.web.app/',
    stack: [
      react,
      redux,
      ts,
      firebase,
      nodejs,
    ],
    gallery: [
      ...flinchDash
    ]
  },
  {
    label: 'Elvian Cakes',
    summary: 'A mobile app for a cakery',
    code: 'https://github.com/Natehubbit/elviancakes',
    project: '',
    article: <p>
      This is a mobile app UI built in React-Native to allow people to order
      cakes.
    </p>,
    stack: [
      react,
      redux,
      css,
      html
    ],
    gallery: [
      ...cakes
    ]
  },
  {
    label: 'Blockchain Leger',
    summary: 'An ethreum based blockchain ledger',
    code: 'https://github.com/Natehubbit/Fintech',
    project: '',
    stack: [
      react,
      redux,
      css,
      html,
      solidity
    ],
    gallery: [
      ...wallet
    ]
  },
  // {
  //   label: 'Openpal',
  //   summary: 'A firebase backend notification service for a chat app.',
  //   code: 'https://github.com/Natehubbit/openPalCloud',
  //   project: 'https://play.google.com/store/apps/details?id=com.walkerstechbase.openpal',
  //   stack: [
  //     firebase,
  //     nodejs
  //   ],
  //   gallery: [
      
  //   ]
  // },
  // {
  //   label: 'Word Axe',
  //   summary: 'A simple word game',
  //   code: '',
  //   project: '',
  //   stack: [
  //     react,
  //     redux,
  //     ts
  //   ],
  //   gallery: [
  //   ]
  // },
  // {
  //   label: 'Huvian Chat',
  //   summary: 'A couple\'s chat app' ,
  //   code: 'https://github.com/Natehubbit/huvianChat',
  //   project: '',
  //   stack: [
  //     react,
  //     redux,
  //     ts,
  //     firebase
  //   ],
  //   gallery: [
      
  //   ]
  // },
]
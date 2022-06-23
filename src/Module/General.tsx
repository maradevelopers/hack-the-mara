// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */
import boy from './Assets/boy.png';
import mara from './Assets/sponsorsLogos/mara.png';
import safaricom from './Assets/sponsorsLogos/safaricom.png';


const TOP_SECTION = {
  TITLE: 'Hack The Mara',
  Typed_effect: [
    'A week of creating magic!',
    'Win awesome prizes!',
    '$100,000 in prizes!'
  ],
  SHORT_DESCRIPTION:
    'Create decentralized applications that provide visibility into the disbursement process for funded social impact projects in the Massai Mara.',
  IMG_SRC: boy,
  DISCORD_LINK: '',
  JUDGES_FORM_LINK:
    'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNVRQMUg4VllMRURDN1lON0haNFVCQUgySC4u',
  HACKERS_REGISTRATION_FORM_LINK:
    'https://hack-the-mara.devpost.com/?preview_token=agkJFy3yVvUy4H0NaQTIqsSm3H%2BSMrgh3morDCZ9StY%3D'
};

const SOCIALS = {
  instagram: 'https://bit.ly/MARA_Instagram',
  discord: 'https://bit.ly/Mara_Discord',
  linkedin: 'https://bit.ly/Mara_Linkedin_',
  twitter: 'https://bit.ly/MARA_Twitter',
  email: 'mailto:hello@mara.xyz',
  mail: 'hello@mara.xyz'
};

const MIDDLE_SECTION = {
  TITLE: 'What is Hack The Mara?',
  LONG_DESCRIPTION:
    'Mara Foundation is pleased to announce the launch of ‘Hack the Mara’, a weeklong immersive hackathon bringing together talented innovators from across Africa to build impactful solutions and empower a community.',
  LOGO_EFFECT: true,
  LOGO: ''
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNFBQME44TzJZWDc2UFgwTUtLN0xDQVYyUi4u'
  },
  JOIN_TEAM: {
    required: true,
    src: 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUOUhEQkJSRk02OEU4SlBMTUdYOFIxOTNZSy4u'
  },
  Privacy_policy: {
    required: true,
    src: ''
  },
  Terms_of_use: {
    required: true,
    src: ''
  }
};

/** SCHEDULE
 *
 * INSTRUCTIONS
 *
 * Date format : 8-11-2022, 18-11-2022 (without trailing zeros)
 */

const calenderStartingDate = {
  month: 9,
  year: 2022
};

const schedule = [
  {
    day: '4-9-2022',
    events: [
      {
        title: 'Intro to phycycology',
        timings: '12PM - 1 PM',
        link: 'https://google.com'
      },
      {
        title: 'Intro to dApps',
        timings: '1PM - 2PM',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '5-9-2022',
    events: [
      {
        title: 'Intro to phycycology',
        timings: '12PM - 1 PM',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '6-9-2022',
    events: [
      {
        title: 'Intro to phycycology',
        timings: '12PM - 1 PM',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '7-9-2022',
    events: [
      {
        title: 'Intro to phycycology',
        timings: '12PM - 1 PM',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '8-9-2022',
    events: [
      {
        title: 'Intro to phycycology',
        timings: '12PM - 1 PM',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '9-9-2022',
    events: [
      {
        title: 'Intro to phycycology',
        timings: '12PM - 1 PM',
        link: 'https://google.com'
      }
    ]
  }
];

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in PrizeInfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `PrizeInfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const PrizeInfo = [
  [
    //Array 1
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: 'Winner',
      content:
        'First Overall prize will be given to a project that outstands all other submissions'
    },
    {
      icon: <i className=" second fas fa-4x fa-medal"></i>,
      type: 'First Runner Up',
      content:
        'Second Overall prize will be given to the second best project of the hackathon'
    },
    {
      icon: <i className=" third fas fa-4x fa-skiing-nordic"></i>,
      type: 'Second Runner Up',
      content:
        'Best third overall project of the hackathon will win some awesome prizes'
    }
  ],
  [
    //Array 2
    {
      icon: <i className="fab fourth fa-3x fa-wpbeginner"></i>,
      type: 'Best Solo',
      content:
        'You project will qualify for this prize if you participate alone without a team though we encourage you to participate with a team'
    },
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: ' Best Beginner',
      content: 'Your project will qualify for this category if atleast 50% '
    },
    {
      icon: <i className=" fifth fa-3x fas fa-book-open"></i>,
      type: 'Best UI/UX',
      content: 'Project with most creative designs will be UI/UX track'
    }
  ],
];



/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{src: mara}, {src: safaricom}], //Array 1
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
  [
    [
      {
        label: 'What is a hackathon?',
        content:
          'A hackathon is an event where "hackers" all over the globe will collaborate on creating a functioning software and hardware by the end of the event.'
      },
      {
        label: 'Who can attend?',
        content:
          'Hack The Mara is open to all undergraduate, high school students, professionals from  all backgrounds.'
      },
      {
        label: 'I am a first time hacker, what should I do?',
        content:
          'No worries, we love to welcome first time hackers and start their hacking journey from a hackathon. We have some awesome workshops and events which will help you get started with the hackathon.'
      },
      {
        label: 'How team formation works?',
        content:
          "You can form team with 3 members in it at maximum. If you don't have a team, there'll be plenty of opportunities for you to meet hackers and form a team!"
      }
    ],
    [
      {
        label: 'How to register myself in the hackathon?',
        content:
          'All you need is to fill our form above and join Discord, we will guide you through everything there'
      },
      {
        label: 'I have more questions?',
        content:
          'Reach us directly at (hello@mara.xyz) we would happy to help you.'
      },
      {
        label: 'Can i volunteer?',
        content:
          'Yes we are actively looking for volunteers, Reach us directly at (hello@mara.xyz).'
      },
      {
        label: 'Will there be swag?',
        content: 'Yes! Participants will receiving Hack The Mara swag!.'
      }
    ]
  ]
];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  PrizeInfo,
  sponsorLogos,
  frequentlyAskedQuestions,
  schedule,
  calenderStartingDate
};

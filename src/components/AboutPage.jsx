// import React, { useEffect, useState } from 'react';
// import PlexusBackground from './PlexusBackground';
// import { Link } from 'react-router-dom';
// import './AboutPage.css';
// import personal_image from '../assets/personal_image.webp'

// const words = [
//   '🐝🎓', '👑🔱', '🎊🙏'
// ];

// const typingDelay = 100; // delay between typing each letter
// const erasingDelay = 50; // delay between erasing each letter
// const pauseDelay = 2000; // pause before deleting word and moving to the next one

// const TypewriterEffect = () => {
//   const [wordIndex, setWordIndex] = useState(0);
//   const [subIndex, setSubIndex] = useState(0);
//   const [reverse, setReverse] = useState(false);
//   const [blink, setBlink] = useState(true);
//   const [typing, setTyping] = useState(false);

//   // blinking cursor
//   useEffect(() => {
//     let cursor;
//     if (!typing) {
//       cursor = setInterval(() => {
//         setBlink((prevBlink) => !prevBlink);
//       }, 500);
//     }
//     return () => clearInterval(cursor);
//   }, [typing]);

//   // typewriter
//   useEffect(() => {
//     if(subIndex === words[wordIndex].length + 1 && !reverse) {
//       setTyping(false);
//       setTimeout(() => {
//         setReverse(true);
//         setTyping(true);
//       }, pauseDelay);
//     } else if (!reverse && subIndex <= words[wordIndex].length) {
//       setTyping(true);
//       setTimeout(() => {
//         setSubIndex((prevSubIndex) => prevSubIndex + 1);
//       }, typingDelay);
//     } else if (reverse && subIndex > 0) {
//       setTyping(true);
//       setTimeout(() => {
//         setSubIndex((prevSubIndex) => prevSubIndex - 1);
//       }, erasingDelay);
//     } else if (subIndex === 0 && reverse) {
//       setTyping(false);
//       setReverse(false);
//       setWordIndex((prevWordIndex) => (prevWordIndex + 1) % words.length);
//     }
//   }, [subIndex, wordIndex, reverse]);

//   return (
//     <h2>
//       {`${words[wordIndex].substring(0, subIndex)}${typing || blink ? "|" : "\u00a0"}`}
//     </h2>
//   );
// };


// const AboutPage = () => {
//   return (
//     <div className="about">
//       <div className="plexus-background">
//         <PlexusBackground />
//       </div>
//       <div className='about-container'>
//         <div className="about-content">
//           <h1>Mé Expértise...</h1>
//         </div>
//         <div className="about-content-effect">
//           <TypewriterEffect />
//         </div>
//       </div>
//       <div className="personal-section">
//         <div className="personal-image">
//           <img src={personal_image} alt="Anirudh Gattu"/>
//         </div>
//         <div className="personal-info">
//           <p> "Apppreciate you visiting my page. Currently attempting to gain maximum exposure to state of art technologies & software from industry and my institute. Proactive in self-growth, engineering without boundaries, and setting up a foundation for the future. Sometimes, I just engineer for the fun of it. Also, all of my projects are hosted on
//               {''} <Link to="https://github.com/agattu1" className="github-link"> GitHub</Link>."
//             </p>
//         </div>
//       </div>
      
//     </div>
//   );
// };



// export default AboutPage;

import React, { useEffect, useState } from 'react';
import PlexusBackground from './PlexusBackground';
import { Link } from 'react-router-dom';
import './AboutPage.css';
import personal_image from '../assets/personal_image.webp';

const words = [
  '🐝🎓', '👑🔱', '🎊🙏'
];

const typingDelay = 100; 
const erasingDelay = 50; 
const pauseDelay = 2000; 

const TypewriterEffect = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);
  const [typing, setTyping] = useState(false);

  // blinking cursor
  useEffect(() => {
    let cursor;
    if (!typing) {
      cursor = setInterval(() => {
        setBlink((prevBlink) => !prevBlink);
      }, 500);
    }
    return () => clearInterval(cursor);
  }, [typing]);

  // typewriter
  useEffect(() => {
    if (subIndex === words[wordIndex].length + 1 && !reverse) {
      setTyping(false);
      setTimeout(() => {
        setReverse(true);
        setTyping(true);
      }, pauseDelay);
    } else if (!reverse && subIndex <= words[wordIndex].length) {
      setTyping(true);
      setTimeout(() => {
        setSubIndex((prevSubIndex) => prevSubIndex + 1);
      }, typingDelay);
    } else if (reverse && subIndex > 0) {
      setTyping(true);
      setTimeout(() => {
        setSubIndex((prevSubIndex) => prevSubIndex - 1);
      }, erasingDelay);
    } else if (subIndex === 0 && reverse) {
      setTyping(false);
      setReverse(false);
      setWordIndex((prevWordIndex) => (prevWordIndex + 1) % words.length);
    }
  }, [subIndex, wordIndex, reverse]);

  return (
    <h2>
      {`${words[wordIndex].substring(0, subIndex)}${typing || blink ? "|" : "\u00a0"}`}
    </h2>
  );
};

const AboutPage = () => {
  return (
    <div className="about">
      <div className="plexus-background">
        <PlexusBackground />
      </div>
      <div className='about-container'>
        <div className="about-content">
          <h1>Mé Expértise...</h1>
        </div>
        <div className="about-content-effect">
          <TypewriterEffect />
        </div>
      </div>
      <div className="personal-section">
        <div className="personal-image">
          <img src={personal_image} alt="Anirudh Gattu" />
        </div>
        <div className="personal-info">
          <p className="reflective-quote">
            "Appreciate you visiting my page. Currently attempting to gain maximum exposure to state-of-the-art technologies & software from the industry and my institute. Proactive in self-growth, engineering without boundaries, and setting up a foundation for the future. Sometimes, I just engineer for the fun of it. Also, all of my projects are hosted on 
            <Link to="https://github.com/agattu1" className="github-button"> GitHub</Link>"
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

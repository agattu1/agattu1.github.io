import React, { useEffect, useState } from 'react';
import PlexusBackground from './PlexusBackground';
import { FaGithub, FaLinkedin, FaEnvelope, FaStar} from 'react-icons/fa';
import './HomePage.css';

const words = ['🔺 engineer', '⚽️ athlete', '☁ believer'];

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

  // typewriter effect
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


const HomePage = () => {
  return (
    <div className="home">
      <div className="plexus-background">
        <PlexusBackground />
      </div>
      <div className="home-content">
        <h1>Anirudh Gattu</h1>
        {/* Typewriter effect here */}
        <h2><TypewriterEffect /></h2> {/* Replace this with the typewriter component */}
      </div>
      <div className="home-icons">
        {/* MeritPages (Star Icon) on top */}
        <a href="https://meritpages.com/agattu">
          <FaStar /> {/* Star icon */}
          <span> MeritPages</span>
        </a>
        {/* Other icons below */}
        <a href="https://github.com/agattu1">
          <FaGithub />
          <span> Github</span>
        </a>
        <a href="https://www.linkedin.com/in/anig2">
          <FaLinkedin />
          <span> LinkedIn</span>
        </a>
        <a href="mailto:gattu.a@outlook.com">
          <FaEnvelope />
          <span> Email</span>
        </a>
      </div>
    </div>
  );
};

export default HomePage;



///////// OG /////////////////
//////////////////////////////
// import React from 'react';
// import PlexusBackground from './PlexusBackground';
// import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
// import './HomePage.css';

// const HomePage = () => {
//   return (
//     <div className="home">
//       <div className="plexus-background">
//         <PlexusBackground />
//       </div>
//       <div className="home-content">
//         <h1>Anirudh Gattu</h1>
//         <h2>Georgia Institute of Technology</h2>
//         <h3>Computer Science</h3>
//         <h4>with Intelligence and Devices threads</h4>
//       </div>
//       <div className="home-icons">
//         <a href="https://github.com/agattu1">
//           <FaGithub />
//           <span> Github</span>
//         </a>
//         <a href="https://www.linkedin.com/in/anig2">
//           <FaLinkedin />
//           <span> LinkedIn</span>
//         </a>
//         <a href="mailto:gattu.a@outlook.com">
//           <FaEnvelope />
//           <span> Email</span>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

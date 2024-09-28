// import React from 'react';
// import PlexusBackground from './PlexusBackground';
// import TechnologyIcon from './TechnologyIcon';
// import { DiJava, DiPython, DiJavascript1, DiMongodb, DiReact, DiCss3, DiHtml5, DiDocker, DiGit } from 'react-icons/di';
// import { SiApachehadoop, SiTailwindcss, SiAssemblyscript, SiCucumber, SiC, SiSpring, SiJenkins, SiJira, SiFlask, SiDjango, SiGrafana, SiApachekafka, SiLatex, SiKubernetes } from 'react-icons/si';
// import { FaDatabase, FaAws } from 'react-icons/fa';

// import './ResumePage.css';

// const ResumePage = () => {
//   const technologies = [
//     { name: 'JAVA', IconComponent: DiJava },
//     { name: 'Python', IconComponent: DiPython },
//     { name: 'C', IconComponent: SiC },
//     { name: 'JavaScript', IconComponent: DiJavascript1 },
//     { name: 'SQL', IconComponent: FaDatabase },
//     { name: 'HTML', IconComponent: DiHtml5 },
//     { name: 'Docker', IconComponent: DiDocker },
//     { name: 'Git', IconComponent: DiGit },
//     { name: 'Jenkins', IconComponent: SiJenkins },
//     { name: 'JIRA', IconComponent: SiJira },
//     { name: 'Spring-boot', IconComponent: SiSpring },
//     { name: 'Django', IconComponent: SiDjango },
//     { name: 'Flask', IconComponent: SiFlask },
//     { name: 'MongoDB', IconComponent: DiMongodb },
//     { name: 'React', IconComponent: DiReact },
//     { name: 'CSS', IconComponent: DiCss3 },
//     { name: 'Assembly', IconComponent: SiAssemblyscript },
//     { name: 'Kafka', IconComponent: SiApachekafka },
//     { name: 'Kubernetes', IconComponent: SiKubernetes },
//     { name: 'AWS', IconComponent: FaAws },
//     { name: 'Grafana', IconComponent: SiGrafana },
//     { name: 'LaTeX', IconComponent: SiLatex },
//     { name: 'TailWind CSS', IconComponent: SiTailwindcss },
//     { name: 'Hadoop', IconComponent: SiApachehadoop },
//     { name: 'Cucumber', IconComponent: SiCucumber },
//   ];

//   return (
//     <div className="resume">
//         <div className="plexus-background">
//             <PlexusBackground />
//         </div>
//         <div className='resume-container'>
//             <div className="resume-content">
//                 <h1>🎊 Highlight 🎊</h1>
//             </div>
//             <div className="resume-icons">
//                 {technologies.map((tech, index) => (
//                     <TechnologyIcon key={index} IconComponent={tech.IconComponent} name={tech.name} />
//             ))}
//             </div>
//             <div className="resume-pdf">
//                 <iframe title='google drive link' src="https://drive.google.com/file/d/17Upxp3jmovIcWsJnTT4hyQ9W2L4k8QrU/preview" width="80%" height="700" allow="autoplay"></iframe>
//             </div>
//         </div>
//     </div>
//   );
// };

// export default ResumePage;

import React, { useEffect } from 'react';
import './ResumePage.css';
import PlexusBackground from './PlexusBackground';


const ResumePage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cpwebassets.codepen.io/assets/embed/ei.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="resume">
      <h1 className="highlight"> 💎💎💎💎💎💎💎💎💎</h1>
      <h1 className="highlight"> 💎💎💎💎💎💎 </h1>
      <h2 className="highlight"> Thx for visiting, here is a GIFt 🎁🎁🎁</h2>
      {/* CodePen Embed */}
      <div className="codepen-container">
        <p 
          className="codepen" 
          data-height="300" 
          data-default-tab="js,result" 
          data-slug-hash="WxrjOq" 
          data-pen-title="The Matrix GIF Maker" 
          data-user="perbyhring" 
          style={{ 
            height: '300px', 
            boxSizing: 'border-box', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            border: '2px solid', 
            margin: '1em 0', 
            padding: '1em' 
          }}
        >
          <span>
            See the Pen <a href="https://codepen.io/perbyhring/pen/WxrjOq">The Matrix GIF Maker</a> 
            by Per Byhring (<a href="https://codepen.io/perbyhring">@perbyhring</a>) 
            on <a href="https://codepen.io">CodePen</a>.
          </span>
        </p>
      </div>
      <div className="plexus-background">
        <PlexusBackground />
      </div>
    </div>
  );
};

export default ResumePage;




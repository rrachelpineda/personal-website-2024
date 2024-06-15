import "./App.css";
import * as React from "react";
import pfp from './/images/crc-crop.png';
import ln from './/images/linkedin-logo.png';
import gh from './/images/github-logo.png';
import email from './/images/email-icon.png';


function App() {

  const flexRow = window.innerWidth > 950;

  const handleViewProjectsClick = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="flex-col justify-center px-10 md:px-20 lg:px-40 py-20 lg:py-48 mx-auto">
      <div className={`justify-items-center flex ${flexRow ? 'flex-row' : 'flex-col'}`}> 
        <div className="w-96 md:w-5/12 md:min-w-96 min-px-6 md:px-12 pb-10">
          <img className="border-8 border-dotted rounded-full border-black" src={pfp} alt="GIF of Rachel Pineda"/>
        </div>
        <div className="w-full lg:w-1/2 text-start mt-4 lg:pl-20 md:max-pl-20 md:self-center">
          <h1 className="font-bold text-5xl pb-5">Hi, I'm Rachel! 👋</h1>
          <h3 className="text-4xl pb-10">I'm a second-year student at Cornell University studying computer science and operations research.</h3>
          <div className="flex md:flex-row pb-10">
            <button onClick={() => window.open('https://linkedin.com/in/rrachelpineda', '_blank')}>
              <img className="w-10 mr-20" src={ln} alt="LinkedIn logo, directs to linkedin.com/in/rrachelpineda"/>
            </button>
            <button onClick={() => window.open('https://github.com/rrachelpineda', '_blank')}>
              <img className="w-10 mr-20" src={gh} alt="GitHub logo, directs to github.com/rrachelpineda"/>
            </button>
            <a href="mailto:rvp35@cornell.edu">
              <img className="w-10 mr-20" src={email} alt="Email icon, directs to rvp35@cornell.edu" href="mailto:rvp35@cornell.edu"/>
            </a>
          </div>
          <button className="border-2 rounded-full border-black text-3xl font-medium py-3 px-7 bg-white hover:text-rose-700" onClick={handleViewProjectsClick}>
            VIEW MY PROJECTS
          </button>
        </div>
      </div>
      <div id="projects" className="text-start pt-48 lg:pt-80">
          <h1 className="text-7xl font-semibold pb-20">PROJECTS</h1>
          <div>
            <div className="text-4xl w-1/2 scroll-element js-scroll fade-in-bottom">
              <h3 className="font-bold text-5xl pb-2">Intelligent Scissors</h3>
              <h5>An interactive image selection application built with Java. Uses shortest path algorithms to efficiently extract subjects from images.</h5>
              <h5 className="pt-7">Originally coded as my final project for CS 2110, and currently in progress of converting to iOS app.</h5>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import * as React from "react";
import pfp from './/images/crc-crop.png';
import ln from './/images/linkedin-logo.png';
import gh from './/images/github-logo.png';
import email from './/images/email-icon.png';
import gr from './/images/goodreads-icon.png';
import scissors from './/images/scissors.PNG';
import aliens from './/images/aliens.PNG';
import reading from './/images/reading-photo.jpg';
import travel from './/images/travel-photo.png';
import sunset from './/images/sunset.jpg';
import resume from './/images/PinedaResume.pdf';

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

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
      <div id="projects" className="text-start pt-48 lg:pt-80 space-y-12 font-normal">
        <h1 className="text-7xl font-semibold">PROJECTS</h1>
        <FadeInSection>
            <div className={`bg-white rounded-2xl p-7 flex justify-items-stretch ${flexRow ? 'flex-row space-x-28' : 'flex-col space-y-16'}`}>
              <div className="text-4xl w-full lg:w-1/2">
                <h3 className="font-bold pb-2">Intelligent Scissors</h3>
                <h5>An interactive image selection application built with Java. Uses shortest path algorithms to efficiently extract subjects from images.</h5>
                <h5 className="pt-7">Originally coded as my final project for Object-Oriented Programming, and currently in progress of converting to iOS app.</h5>
              </div>
              <div className="w-full lg:w-1/3 self-center">
                <img src={scissors} alt="Two screenshots of the intelligent scissors application, one of the shortest path algorithm in progress and one of an unfinished selection."/>
              </div>
            </div>
        </FadeInSection>
        <FadeInSection>
            <div className={`bg-white rounded-2xl p-7 flex justify-items-stretch ${flexRow ? 'flex-row space-x-28' : 'flex-col space-y-16'}`}>
              <div className="text-4xl w-full lg:w-1/2">
                <h3 className="font-bold pb-2">Aliens</h3>
                <h5>A Space Invaders type game built with Python. Extra features to display remaining lives was added in my free time.</h5>
                <h5 className="pt-7">Originally coded as my final project for Introduction to Computing. The GUI was coded and provided by professor Walker White.</h5>
              </div>
              <div className="w-full lg:w-1/3 self-center">
                <img src={aliens} alt="A screenshot of Aliens gameplay, with most of the aliens destroyed, 3 lives remaining, and a currently fired laser."/>
              </div>
            </div>
        </FadeInSection>
      </div>

      <div className="text-start pt-48 font-normal">
        <h1 className="text-7xl font-semibold pb-5">ABOUT</h1>
        <a
        href={resume}
        download={resume}
        className="border-2 rounded-full border-black text-3xl font-medium py-3 px-7 bg-white hover:text-rose-700 inline-flex items-center">
        DOWNLOAD RESUME
      </a>
        <h3 className="text-4xl pt-16 pb-5 font-medium">WORK EXPERIENCES</h3>
        <div className="space-y-12">
          <FadeInSection>
              <div className="bg-white rounded-2xl p-7 justify-items-stretch">
                <div className="text-4xl w-full">
                  <h5 className="text-[#B4B4B4]">Oct. 2023 - Present</h5>
                  <h3 className="font-bold text-5xl">Combat Robotics at Cornell</h3>
                  <h4 className="italic">Co-Lead of Marketing Team</h4>
                  <h5>Ithaca, NY</h5>
                  <ul className="pt-7 pl-7 list-disc">
                    <li>Led group of engineers to renovate website using Figma, React, JavaScript, Tailwind CSS</li>
                    <li>Used AWS Lambda and API Gateway to create versatile REST APIs and a Slack bot for automated weekly report reminders</li>
                    <li>Collaborated with team members to raise $20,000+ in funds and maintain corporate sponsors</li>
                  </ul>
                </div>
              </div>
          </FadeInSection>
          <FadeInSection>
              <div className="bg-white rounded-2xl p-7 justify-items-stretch">
                <div className="text-4xl w-full">
                  <h5 className="text-[#B4B4B4]">May 2023 - Present</h5>
                  <h3 className="font-bold text-5xl">Bucks Bubbles</h3>
                  <h4 className="italic">Event Staff & Social Media Manager</h4>
                  <h5>Glenside, PA</h5>
                  <ul className="pt-7 pl-7 list-disc">
                    <li>Planned, organized, and executed engaging and safe foam parties for children</li>
                    <li>Communicated with coworkers to foster efficient and precise coordination of party activities</li>
                    <li>Increased engagement by 55.5% through social media promotion and advertisements</li>
                  </ul>
                </div>
              </div>
          </FadeInSection>

          <h3 className="text-4xl pt-16 pb-5 font-medium">SKILLS</h3>
        </div>
      </div>
      <div className={`flex text-start justify-between ${flexRow ? 'flex-row space-x-10' : 'flex-col space-y-10'}`}>
            <FadeInSection>
                <div className="bg-white rounded-2xl p-7">
                  <div className="text-4xl">
                    <h4 className="italic">Web Design</h4>
                    <ul className="pt-7 pl-7 list-disc">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>React.js</li>
                    </ul>
                  </div>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className="bg-white rounded-2xl p-7">
                  <div className="text-4xl">
                    <h4 className="italic">Development</h4>
                    <ul className="pt-7 pl-7 list-disc">
                      <li>Python</li>
                      <li>Java</li>
                      <li>JavaScript</li>
                    </ul>
                  </div>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className="bg-white rounded-2xl p-7">
                  <div className="text-4xl">
                    <h4 className="italic">Other Proficiencies</h4>
                    <ul className="pt-7 pl-7 list-disc">
                      <li>Microsoft Office & Google Suite</li>
                      <li>AWS Cloud Services</li>
                      <li>Figma</li>
                    </ul>
                  </div>
                </div>
            </FadeInSection>
        </div>
      <div className="text-start font-normal pt-16">
        <h3 className="text-4xl pt-16 pb-5 font-medium">MY HAPPY LIFE!</h3>
        <div className={`flex text-start justify-between ${flexRow ? 'flex-row space-x-10' : 'flex-col space-y-10'}`}>
            <FadeInSection>
                <div className="bg-white rounded-2xl p-7 pb-3 w-80">
                  <img src={reading} alt="Books on towels in the sand at a beach."/>
                  <div className="text-3xl pt-5">
                    <h4>I like to read and journal everyday!</h4>
                    <button onClick={() => window.open('https://www.goodreads.com/rachelpineda', '_blank')}>
                      <img className="w-10 pt-3" src={gr} alt="Goodreads logo, directs to goodreads.com/rachelpineda"/>
                    </button>
                  </div>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className="bg-white rounded-2xl p-7 w-80">
                  <img src={travel} alt="Boats in water in the foreground and green hills in the background."/>
                  <div className="text-3xl pt-5">
                    <h4>I also love to travel (photo of St. Thomas) ...</h4>
                  </div>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className="bg-white rounded-2xl p-7 w-80">
                  <img className="" src={sunset} alt="Boats in water in the foreground and green hills in the background."/>
                  <div className="text-3xl pt-5">
                    <h4>... but sunsets are best on Cornell's slope.</h4>
                  </div>
                </div>
            </FadeInSection>
        </div>
      </div>
    </div>
  );
}

export default App;

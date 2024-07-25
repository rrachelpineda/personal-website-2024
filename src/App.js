import "./App.css";
import * as React from "react";
import pfp from './/images/crc-crop.png';
import ln from './/images/linkedin-logo.png';
import gh from './/images/github-logo.png';
import email from './/images/email-icon.png';
import gr from './/images/goodreads-icon.png';
import scissors from './/images/scissors.PNG';
import slackbot from './/images/slack-logo.jpeg';
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

  const phone = window.innerWidth < 425;

  const handleViewProjectsClick = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className={`flex-col justify-center px-10 md:px-20 lg:px-40 py-20 lg:py-48 mx-auto ${phone ? 'text-xl' : 'text-4xl'}`}>
      <div className={`justify-items-center flex ${flexRow ? 'flex-row' : 'flex-col'}`}> 
        <div className={`md:w-5/12 md:min-w-96 min-px-6 md:px-12 pb-10 ${phone ? 'w-80' : 'w-96'}`}>
          <img className="border-8 border-dotted rounded-full border-black" src={pfp} alt="GIF of Rachel Pineda"/>
        </div>
        <div className="w-full lg:w-1/2 text-start mt-4 lg:pl-20 md:max-pl-20 md:self-center">
          <h1 className={`font-bold pb-5 ${phone ? 'text-3xl' : 'text-5xl'}`}>Hi, I'm Rachel! 👋</h1>
          <h3 className="pb-10">I'm a second-year student at Cornell University studying computer science and operations research.</h3>
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
          <button className={`border-2 rounded-full border-black font-medium py-3 px-7 bg-white hover:text-rose-700 ${phone ? 'text-xl' : 'text-3xl'}`} onClick={handleViewProjectsClick}>
            VIEW MY PROJECTS
          </button>
        </div>
      </div>
      <div id="projects" className="text-start pt-48 lg:pt-80 space-y-12 font-normal">
        <h1 className={`font-semibold ${phone ? 'text-5xl' : 'text-7xl'}`}>PROJECTS</h1>
        <FadeInSection>
            <div className={`bg-white rounded-2xl p-7 flex justify-items-stretch ${flexRow ? 'flex-row space-x-28' : 'flex-col space-y-16'}`}>
              <div className=" w-full lg:w-1/2">
                <h3 className="font-bold pb-2">Slack Bot for Combat Robotics at Cornell</h3>
                <h5>A Slack Bot to automate weekly report reminders, developed with Python.</h5>
                <h5 className="pt-7">REST APIs developed using AWS Lambda and API Gateway for automation.</h5>
                <h5 className="pt-7">Implemented Slack API to sort chat by image and store images in AWS DynamoDB bucket.</h5>
              </div>
              <div className="w-full lg:w-1/3 self-center">
                <img src={slackbot} alt="Slack application icon and text logo."/>
              </div>
            </div>
        </FadeInSection>
        <FadeInSection>
            <div className={`bg-white rounded-2xl p-7 flex justify-items-stretch ${flexRow ? 'flex-row space-x-28' : 'flex-col space-y-16'}`}>
              <div className=" w-full lg:w-1/2">
                <h3 className="font-bold pb-2">Intelligent Scissors</h3>
                <h5>An interactive image selection application built with Java.</h5>
                <h5 className="pt-7">Uses Dijkstra's algorithm and a heap priority queue to efficiently extract subjects from images. Developed custom weights to more accurately follow edges in images.</h5>
                <h5 className="pt-7">Originally coded as my final project for Object-Oriented Programming.</h5>
              </div>
              <div className="w-full lg:w-1/3 self-center">
                <img src={scissors} alt="Two screenshots of the intelligent scissors application, one of the shortest path algorithm in progress and one of an unfinished selection."/>
              </div>
            </div>
        </FadeInSection>
        <FadeInSection>
            <div className={`bg-white rounded-2xl p-7 flex justify-items-stretch ${flexRow ? 'flex-row space-x-28' : 'flex-col space-y-16'}`}>
              <div className="w-full lg:w-1/2">
                <h3 className="font-bold pb-2">Aliens</h3>
                <h5>A Space Invaders type game built with Python. Coded additional feature to display remaining lives.</h5>
                <h5 className="pt-7">Originally coded as my final project for Introduction to Computing. The GUI was coded and provided by professor Walker White.</h5>
              </div>
              <div className="w-full lg:w-1/3 self-center">
                <img src={aliens} alt="A screenshot of Aliens gameplay, with most of the aliens destroyed, 3 lives remaining, and a currently fired laser."/>
              </div>
            </div>
        </FadeInSection>
        <FadeInSection>
            <div className={`bg-white rounded-2xl p-7 flex justify-items-stretch ${flexRow ? 'flex-row space-x-28' : 'flex-col space-y-16'}`}>
              <div className="w-full lg:w-1/2">
                <h3 className="font-bold pb-2">Three-Pound Robot</h3>
                <h5>A three-pound robot designed in a group. CAD models were developed using Autodesk Fusion 360 and an interactive webpage was coded using HTML and CSS to market the project.</h5>
                <h5 className="pt-7">Originally designed during onboarding for Combat Robotics at Cornell.</h5>
              </div>
              <div className="w-full lg:w-1/3 self-center">
                <img src={aliens} alt="A screenshot of Aliens gameplay, with most of the aliens destroyed, 3 lives remaining, and a currently fired laser."/>
              </div>
            </div>
        </FadeInSection>
      </div>

      <div className="text-start pt-48 font-normal">
        <h1 className={`font-semibold pb-5 ${phone ? 'text-5xl' : 'text-7xl'}`}>ABOUT</h1>
        <a
        href={resume}
        download={resume}
        className={`border-2 rounded-full border-black font-medium py-3 px-7 bg-white hover:text-rose-700 inline-flex items-center ${phone ? 'text-xl' : 'text-3xl'}`}>
        DOWNLOAD RESUME
      </a>
        <h3 className="pt-16 pb-5 font-medium">WORK EXPERIENCES</h3>
        <div className="space-y-12">
          <FadeInSection>
              <div className="bg-white rounded-2xl p-7 justify-items-stretch">
                <div className="w-full">
                  <h5 className="text-[#B4B4B4]">July 2024 - Present</h5>
                  <h3 className={`font-bold ${phone ? 'text-3xl' : 'text-5xl'}`}>John Hopkins Center for Talented Youth</h3>
                  <h4 className="italic">Game Theory and Economics Teaching Assistant</h4>
                  <h5>Collegeville, PA</h5>
                  <ul className="pt-7 pl-7 list-disc">
                    <li>Lead evening classes and teach applications of collegiate-level game theory and economics</li>
                    <li>Cooperate with the instructor to plan and deliver course material for diverse learning styles</li>
                    <li>Maintain consistent, professional correspondence with students, parents, and faculty</li>
                  </ul>
                </div>
              </div>
          </FadeInSection>
          <FadeInSection>
              <div className="bg-white rounded-2xl p-7 justify-items-stretch">
                <div className="w-full">
                  <h5 className="text-[#B4B4B4]">Oct. 2023 - Present</h5>
                  <h3 className={`font-bold ${phone ? 'text-3xl' : 'text-5xl'}`}>Combat Robotics at Cornell</h3>
                  <h4 className="italic">Co-Lead of Marketing Team</h4>
                  <h5>Ithaca, NY</h5>
                  <ul className="pt-7 pl-7 list-disc">
                    <li>Lead group of engineers to renovate website using Figma and migrate to React framework, reducing codebase by 80% and improving overall code organization</li>
                    <li>Manage 5-member team through weekly 6-hour meetings and structure semester timeline</li>
                    <li>Communicate with corporate sponsors; boosted sponsorship revenue by 12% in first year</li>
                    <li>Submit weekly and semesterly reports to manage task progress and descriptions</li>
                  </ul>
                </div>
              </div>
          </FadeInSection>
          <FadeInSection>
              <div className="bg-white rounded-2xl p-7 justify-items-stretch">
                <div className="w-full">
                  <h5 className="text-[#B4B4B4]">May 2023 - Present</h5>
                  <h3 className={`font-bold ${phone ? 'text-3xl' : 'text-5xl'}`}>Bucks Bubbles</h3>
                  <h4 className="italic">Event Staff & Social Media Manager</h4>
                  <h5>Glenside, PA</h5>
                  <ul className="pt-7 pl-7 list-disc">
                    <li>Communicate with coworkers to ensure successful execution of foam and snow parties</li>
                    <li>Gather customer feedback to continuously improve event offerings</li>
                    <li>Launched new snow parties resulting in increased social media engagement by 55.5%</li>
                  </ul>
                </div>
              </div>
          </FadeInSection>

          <h3 className="pt-16 pb-5 font-medium">SKILLS</h3>
        </div>
      </div>
      <div className={`flex text-start justify-between ${flexRow ? 'flex-row space-x-10' : 'flex-col space-y-10'}`}>
            <FadeInSection>
                <div className="bg-white rounded-2xl p-7">
                  <div>
                    <h4 className="italic">Web Design</h4>
                    <ul className="pt-7 pl-7 list-disc">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>React</li>
                      <li>Figma</li>
                    </ul>
                  </div>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className="bg-white rounded-2xl p-7">
                  <div>
                    <h4 className="italic">Development</h4>
                    <ul className="pt-7 pl-7 list-disc">
                      <li>Python</li>
                      <li>Java</li>
                      <li>JavaScript</li>
                      <li>TypeScript</li>
                    </ul>
                  </div>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className="bg-white rounded-2xl p-7">
                  <div>
                    <h4 className="italic">Other Proficiencies</h4>
                    <ul className="pt-7 pl-7 list-disc">
                      <li>Russian (conversational)</li>
                      <li>Microsoft Office & Google Suite</li>
                      <li>AWS Lambda & DyanamoDB</li>
                      <li>Autodesk Fusion</li>
                    </ul>
                  </div>
                </div>
            </FadeInSection>
        </div>
      <div className="text-start font-normal pt-16">
        <h3 className="pt-16 pb-5 font-medium">MY HAPPY LIFE!</h3>
        <div className={`flex text-start justify-between ${flexRow ? 'flex-row space-x-10' : 'flex-col space-y-10'}`}>
            <FadeInSection>
                <div className="bg-white rounded-2xl p-7 pb-3 w-80">
                  <img src={reading} alt="Books on towels in the sand at a beach."/>
                  <div className={`pt-5 ${phone ? 'text-xl' : 'text-3xl'}`}>
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
                  <div className={`pt-5 ${phone ? 'text-xl' : 'text-3xl'}`}>
                    <h4>I also love to travel (photo of St. Thomas) ...</h4>
                  </div>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className="bg-white rounded-2xl p-7 w-80">
                  <img className="" src={sunset} alt="Boats in water in the foreground and green hills in the background."/>
                  <div className={`pt-5 ${phone ? 'text-xl' : 'text-3xl'}`}>
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

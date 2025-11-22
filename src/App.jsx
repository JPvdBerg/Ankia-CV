import React, { useEffect } from 'react';
import './App.css';

// --- Components ---
import RevealText from './components/RevealText.jsx'; 
import LogoLoop from './components/LogoLoop.jsx';
import AnimatedList from './components/AnimatedList.jsx'; 

// --- Icons (Business & Management Focused) ---
import { 
  SiMicrosoftword, 
  SiMicrosoftexcel, 
  SiMicrosoftpowerpoint, 
  SiCanva, 
  SiTrello, 
  SiSlack,
  SiGooglecalendar,
  SiZoom,
  SiLinkedin,
  SiGmail
} from 'react-icons/si';

// --- DATA SETUP ---

// Place her real name here
const PERSON_NAME = "Sarah Jenkins"; 
const PERSON_ROLE = "Business Management & Tourism Student";
const EMAIL = "sarah.jenkins@example.com";

// Tools she likely uses
const toolLogos = [
  { node: <SiMicrosoftword />, title: 'Word' },
  { node: <SiMicrosoftexcel />, title: 'Excel' },
  { node: <SiMicrosoftpowerpoint />, title: 'PowerPoint' },
  { node: <SiCanva />, title: 'Canva' },
  { node: <SiTrello />, title: 'Trello' },
  { node: <SiSlack />, title: 'Slack' },
  { node: <SiGooglecalendar />, title: 'Scheduling' },
  { node: <SiZoom />, title: 'Virtual Meetings' },
];

const skillsList = [
    'Event Planning & Coordination',
    'Customer Relationship Management',
    'Strategic Business Analysis',
    'Digital Marketing Basics',
    'Financial Literacy & Accounting',
    'Cross-Cultural Communication',
    'Team Leadership',
    'Public Speaking',
];

function App() {
  
  // Smooth scroll to top on refresh
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
    return () => { window.onbeforeunload = null; };
  }, []);

  return (
    <>
      {/* --- HERO SECTION --- */}
      <header id="top">
        <RevealText text={PERSON_NAME} className="" />
        <h1><RevealText text={PERSON_NAME} delay={0.2} /></h1>
        <p>
          <RevealText text={PERSON_ROLE} delay={0.4} />
        </p>
      </header>

      {/* --- NAVIGATION --- */}
      <nav>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* --- ABOUT SECTION --- */}
      <section id="about">
        <h2>About Me</h2>
        <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <RevealText text="I am a dedicated third-year student with a passion for sustainable tourism and strategic business management. My goal is to combine operational efficiency with exceptional guest experiences to drive growth in the hospitality sector." />
        </p>
      </section>

      {/* --- EDUCATION --- */}
      <section id="education">
        <h2>Education</h2>
        
        <div className="education">
          <h3>Bachelor of Commerce in Business Management</h3>
          <p><strong>North-West University</strong> | 2023 - Present</p>
          <p>
            Focused on organizational behavior, financial management, and tourism economics.
          </p>
          <br/>
          <strong>Key Modules:</strong>
          <ul>
            <li>Strategic Management</li>
            <li>Tourism Geography</li>
            <li>Marketing Management</li>
            <li>Business Ethics</li>
          </ul>
        </div>

        <div className="education">
          <h3>National Senior Certificate</h3>
          <p><strong>Monument High School</strong> | Class of 2022</p>
          <ul>
            <li>Business Studies - Distinction</li>
            <li>Tourism - Distinction</li>
            <li>English Home Language</li>
          </ul>
        </div>
      </section>

      {/* --- SKILLS --- */}
      <section id="skills">
        <h2>Proficiency & Tools</h2>
        
        {/* Animated Tool Carousel */}
        <div style={{ margin: '2rem 0', color: '#2d3748' }}>
           <LogoLoop 
             logos={toolLogos} 
             speed={100} 
             direction="left" 
             pauseOnHover={true} 
             gap={50}
             logoHeight={40}
             // Fade out color must match the background of this section (white)
             fadeOutColor="#ffffff"
           />
        </div>

        {/* Soft Skills List */}
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          <AnimatedList 
            items={skillsList} 
            displayScrollbar={true}
            // You might need to update AnimatedList.css to remove the green borders
            className='custom-list'
          />
        </div>
      </section>

      {/* --- EXPERIENCE --- */}
      <section id="experience">
        <h2>Experience</h2>

        <div className="job">
          <h3>Administrative Intern</h3>
          <p><strong>Local Tourism Board</strong> | June 2024 - July 2024</p>
          <ul>
             <li>Assisted in organizing the annual community festival.</li>
             <li>Managed inquiries via email and telephone, ensuring professional communication.</li>
             <li>Compiled visitor data into Excel reports for management review.</li>
          </ul>
        </div>

        <div className="job">
          <h3>Volunteer Coordinator</h3>
          <p><strong>University Student Council</strong> | Feb 2023 - Nov 2023</p>
          <ul>
             <li>Coordinated schedules for 20+ student volunteers during campus events.</li>
             <li>Resolved logistical issues on the fly during high-pressure situations.</li>
          </ul>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact">
        <h2>Get In Touch</h2>
        <div style={{ textAlign: 'center', fontSize: '1.2rem' }}>
          <p>I am open to internships and junior management opportunities.</p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
            <a href={`mailto:${EMAIL}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SiGmail /> Email Me
            </a>
            
            <a href="#" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SiLinkedin /> LinkedIn
            </a>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', padding: '4rem 0 0 0' }}>
          <a href="#top">↑ Back to Top</a>
        </div>
      </section>

      <footer>
        <p>© 2025 {PERSON_NAME}. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
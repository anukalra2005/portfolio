import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";
import { SiVite } from "react-icons/si";
// import './Skills.css';

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      <div className="skills-icons">
        <div className="skill"><FaHtml5 /> <span>HTML</span></div>
        <div className="skill"><FaCss3Alt /> <span>CSS</span></div>
        <div className="skill"><FaJs /> <span>JavaScript</span></div>
        <div className="skill"><FaReact /> <span>React</span></div>
    
        <div className="skill"><FaGithub /> <span>GitHub</span></div>
      </div>
    </section>
  );
}

export default Skills;

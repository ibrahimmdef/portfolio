import Card from "../Card/Card";
import "./Projects.css";
function Projects() {
  return (
    <div className="projects-container">
      <h2>My Work</h2>
      <p>A collection of projects I've worked on</p>
      <div className="projects">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Projects;

import Card from "../Card/Card";
import img1 from "../../assets/projectsimages/work-space.png";
import img2 from "../../assets/projectsimages/book.png";
import img3 from "../../assets/projectsimages/coffee-shop.png";
import img4 from "../../assets/projectsimages/portfolio.png";
import img5 from "../../assets/projectsimages/weather.png";
import img6 from "../../assets/projectsimages/password-generator.png";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Work Space",
      image: img1,
      description:
        "A personal productivity app with task management, focus timers, and overall stats. Helps users organize tasks, track progress, and maintain concentration using Pomodoro techniques.",
      github: "https://github.com/ibrahimmdef/work-space",
      demo: "https://work-space-olive.vercel.app/src/timer.html",
    },
    {
      id: 2,
      title: "Book Library",
      image: img2,
      description:
        "A personal library app to manage and track book collections. Users can organize books, mark reading progress, and view statistics on their reading habits.",
      github: "https://github.com/ibrahimmdef/book-library",
      demo: "#",
    },
    {
      id: 3,
      title: "Coffee Shop",
      image: img3,
      description:
        "An elegant coffee shop landing page design with a modern UI. Showcases menu items, specialty drinks, and cafe ambiance with smooth animations and fully responsive layout.",
      github: "https://github.com/ibrahimmdef/the-coffee-shop",
      demo: "https://the-coffee-shop-x24r.onrender.com/",
    },
    {
      id: 4,
      title: "Portfolio Design",
      image: img4,
      description:
        "A minimal and clean portfolio design template for creatives and developers. Focuses on typography, balanced spacing, and professional layout to showcase personal branding effectively.",
      github: "https://github.com/ibrahimmdef/portfolio-design",
      demo: "portfolio-design-rho-two.vercel.app/",
    },
    {
      id: 5,
      title: "Weather App",
      image: img5,
      description:
        "A dynamic weather application fetching real-time data via API. Provides city search, temperature readings, and overall weather conditions with a simple and intuitive interface.",
      github: "https://github.com/ibrahimmdef/Weather-app",
      demo: "https://weather-app-12x7.onrender.com/",
    },
    {
      id: 6,
      title: "Password Generator",
      image: img6,
      description:
        "A practical web tool for generating strong and random passwords. Users can choose password length and character types to create secure, customized passwords instantly.",
      github: "https://github.com/ibrahimmdef/password-generator",
      demo: "https://passwd-design-two-psi.vercel.app/",
    },
  ];

  return (
    <div className="projects-container">
      <h2>My Work</h2>
      <p>A collection of projects I've worked on</p>
      <div className="projects">
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            github={project.github}
            demo={project.demo}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;

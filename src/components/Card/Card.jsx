import "./Card.css";

function Card(props) {
  const projects = [
    {
      id: 1,
      title: "Book Library",
      image:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=500&fit=crop",
      description:
        "A modern library management system where users can search, bookmark, and manage their personal book collections. Features a responsive design with an intuitive interface for seamless browsing experience.",
      github: "https://github.com/ibrahimmdef/book-library",
      demo: "#",
    },
    {
      id: 2,
      title: "Coffee Shop",
      image:
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&h=500&fit=crop",
      description:
        "A modern coffee shop landing page featuring an elegant UI design. Showcases menu items, specialty drinks, and cafe ambiance with smooth animations and responsive layout for optimal user experience.",
      github: "https://github.com/ibrahimmdef/coffee-shop",
      demo: "#",
    },
    {
      id: 3,
      title: "Work Space",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop",
      description:
        "Task and project management platform designed for team collaboration. Features task assignment, real-time updates, and productivity tracking tools to streamline workflow and boost efficiency.",
      demo: "#",
    },
  ];
  return (
    <div className="card-box">
      <div className="card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbt4ZISe4q1wf5oxPp0TsOTqMm3fVvw-QvLGoGqNWOxevAyWplBqVcrbHuqc7IQj5I3d8&usqp=CAU"
          alt=""
        />
        <h4>Projects name</h4>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit veniam
          expedita molestias laboriosam. Unde natus, similique, beatae nam dicta
          sint quam ipsa harum laboriosam explicabo incidunt illum
          necessitatibus iste laudantium?
        </span>
        <div className="link-box">
          <a href="#" className="github-btn btn">
            Github
          </a>
          <a href="#" className=" demo-btn btn">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;

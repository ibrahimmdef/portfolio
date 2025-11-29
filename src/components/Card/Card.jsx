import "./Card.css";

function Card(props) {
  return (
    <div className="card-box" key={props.id}>
      <div className="card">
        <img src={props.image} alt="" />
        <h4>{props.title}</h4>
        <span>{props.description}</span>
        <div className="link-box">
          <a href={props.github} className="github-btn btn">
            Github
          </a>
          <a href={props.demo} className=" demo-btn btn">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;

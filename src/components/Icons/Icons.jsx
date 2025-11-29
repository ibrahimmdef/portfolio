import Mail from "../../assets/mail.svg";
import Linkedin from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg";
import cv from "../../../src/assets/PDF/IBRAHIMIBRAHIMOV.pdf";
import "./Icons.css";
function Icon() {
  return (
    <div className="container">
      <div className="pdf">
        <a href={cv} download className="link">
          Get Resume
        </a>
      </div>
      <div className="icons">
        <span>
          <a href="https://github.com/ibrahimmdef" target="blank">
            <img src={Github} alt="github" />
          </a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/ibrahim-ibrahimov-51383a379/"
            target="blank"
          >
            <img src={Linkedin} alt="linkedin" />
          </a>
        </span>
        <span>
          <a
            href="mailto:ibrahimibrahimov.dev@gmail.com
"
          >
            <img src={Mail} alt="mail" />
          </a>
        </span>
      </div>
    </div>
  );
}

export default Icon;

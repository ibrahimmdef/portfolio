import Mail from "../../assets/mail.svg";
import Linkedin from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg";
import pdf from "../../../public/IBRAHIMIBRAHIMOV.pdf";
import "./Icons.css";
function Icon() {
  return (
    <div className="container">
      <div className="pdf">
        <a href="cv.pdf" download={pdf} className="link">
          Get Resume
        </a>
      </div>
      <div className="icons">
        <span>
          <a href="">
            <img src={Github} alt="" />
          </a>
        </span>
        <span>
          <a href="">
            <img src={Linkedin} alt="" />
          </a>
        </span>
        <span>
          <a href="">
            <img src={Mail} alt="" />
          </a>
        </span>
      </div>
    </div>
  );
}

export default Icon;

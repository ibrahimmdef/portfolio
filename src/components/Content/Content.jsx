import { useState, useEffect } from "react";
import "./Content.css";
import Icon from "../Icons/Icons";

function Content() {
  const titles = [
    "Frontend Developer",
    "Backend Developer",
    "Full-Stack Developer",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[index];

    let speed = deleting ? 60 : 140;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1000);
        }
      } else {
        setText(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index]);

  return (
    <main className="main">
      <div className="content">
        <div>Hey There, I'm</div>

        <span className="typewriter">{text}</span>

        <Icon />
      </div>

      <div class="box-content">
        <div class="box">
          <div class="cube"></div>
        </div>
      </div>
    </main>
  );
}

export default Content;

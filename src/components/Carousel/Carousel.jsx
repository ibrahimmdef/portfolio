import React from "react";

export default function Carousel() {
  const skills = [
    "HTML",
    "CSS",
    "BOOSTRAP",
    "JAVASCRIPT",
    "GIT",
    "GITHUB",
    "AXIOS",
    "NODE.JS",
    "EXPRESS",
    "EJS",
    "MSSQL",
    "POSTGRE",
    "POSTMAN",
  ];

  return (
    <div style={styles.wrapper}>
      <div style={styles.carouselWrapper}>
        {/* Gradient overlays */}
        <div style={styles.gradientLeft}></div>
        <div style={styles.gradientRight}></div>

        {/* Carousel track */}
        <div style={styles.carouselTrack} className="carousel-track">
          {/* Render items twice for seamless loop */}
          {[...skills, ...skills].map((skill, index) => (
            <span
              key={index}
              style={styles.carouselItem}
              className="carousel-item"
            >
              {skill}
              <span style={styles.separator}>/</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes carousel-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .carousel-track {
          animation: carousel-scroll 10s linear infinite;
        }

        .carousel-track:hover {
          animation-play-state: paused;
        }

        .carousel-item:hover {
          color: #22d3ee;
        }
      `}</style>
    </div>
  );
}

const styles = {
  wrapper: {
    marginTop: "-150px",
    marginBottom: "100px",
    width: "100%",
    maxWidth: "1200px",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "2rem",
    color: "#22d3ee",
  },
  carouselWrapper: {
    borderTop: "2px solid #2d2d2d",
    borderBottom: "2px solid #2d2d2d",
    padding: "1.5rem 0",
    overflow: "hidden",
    background: "rgba(45, 45, 45, 0.3)",
    position: "relative",
  },
  gradientLeft: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "100px",
    background: "linear-gradient(to right, rgba(26, 26, 26, 1), transparent)",
    zIndex: 10,
    pointerEvents: "none",
  },
  gradientRight: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: "100px",
    background: "linear-gradient(to left, rgba(26, 26, 26, 1), transparent)",
    zIndex: 10,
    pointerEvents: "none",
  },
  carouselTrack: {
    display: "flex",
    gap: "3rem",
    whiteSpace: "nowrap",
  },
  carouselItem: {
    fontSize: "1.25rem",
    color: "#6b7280",
    display: "inline-block",
    transition: "color 0.3s ease",
    cursor: "default",
  },
  separator: {
    color: "#22d3ee",
    marginLeft: "0.5rem",
  },
  info: {
    textAlign: "center",
    marginTop: "1rem",
    color: "#6b7280",
    fontSize: "0.9rem",
  },
};

import Header from "./components/header/Header";
import Content from "./components/Content/Content";
import Projects from "./components/Projects/Projects.JSX";
import Carousel from "./components/Carousel/Carousel";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <>
      <section id="home">
        <Header />
        <Content />
        <Carousel />
      </section>

      <section id="projects">
        <Projects />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default App;

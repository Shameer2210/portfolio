import styles from "./App.module.css";
import About from "./components/About/About";
import Contact from "./components/contact/contact";
import Experience from "./components/Experience/Experience";
import Hero from "./components/hero/hero";
import NavBar from "./components/navbar/navbar";
import Projects from "./components/projects/projects";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import BackgroundObjects from "./components/UI/BackgroundObjects";
import AnimationCanvasLava from "./components/UI/AnimationCanvasLava";

function App() {
  return (
    <div className="App">
      <AnimationCanvasLava/>
      <Header />
      <Nav />
      <About />
      <Projects />
      <Contact />
      
    </div>
  );
}

export default App;

import "./App.css";
import About from "./componennts/about/About";
import Header from "./componennts/header/Header";
import Nav from "./componennts/nav/Nav";
import Projects from "./componennts/projects/Projects";
import Contact from "./componennts/contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

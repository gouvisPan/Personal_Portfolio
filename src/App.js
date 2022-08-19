import "./App.css";
import Home from "./Pages/Home/Home";
import ProjectPage from "./Pages/ProjectPage/ProjectPage";
import Nav from './components/nav/Nav'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  
  return (
    <Router>
        <Nav/>
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<ProjectPage/>}></Route>
        </Routes>
    </Router>
  );
}

export default App;

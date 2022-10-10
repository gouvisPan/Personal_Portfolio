import "./App.css";
import Home from "./Pages/Home/Home";
import Nav from './components/nav/Nav'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import useWindowSize from "./hooks/useWindowSize";


function App() {
  const [height,width] = useWindowSize();

  return (
    <Router>
        {width > 600 ? <Nav/> : ""}
        <Routes>
        <Route path="/" element={<Home />}></Route>
        </Routes>
    </Router>
  );
}

export default App;

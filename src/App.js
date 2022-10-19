import "./App.css";
import Home from "./Pages/Home/Home";
import Nav from "./components/nav/Nav";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import useWindowSize from "./hooks/useWindowSize";
import { Fragment } from "react";

function App() {
  const [height, width] = useWindowSize();

  return (
    <Fragment>
      {width > 600 ? <Nav /> : ""}
      <Home />
    </Fragment>
  );
}

export default App;

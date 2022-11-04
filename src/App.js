import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import useWindowSize from "./hooks/useWindowSize";
import { Fragment } from "react";
import Error from "./Pages/Error/Error";
import AndroidInfo from "./Pages/AndroidInfo/AndroidInfo";
import ScrollToTop from "./components/helpers/ScrollToTop";

function App() {
  const [height, width] = useWindowSize();

  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/androidinfo" element={<AndroidInfo />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;

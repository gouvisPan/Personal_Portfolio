import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./Pages/Error/Error";
import AndroidInfo from "./Pages/AndroidInfo/AndroidInfo";
import ScrollToTop from "./components/helpers/ScrollToTop";

function App() {
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

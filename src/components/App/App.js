import React from "react";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Footer } from "../layout/Footer";
import Home from "../Home/Home";
import ScrollToTop from "../layout/Gotop";

const appHistory = {
  basename: process.env.PUBLIC_URL,
};
const history = createBrowserHistory(appHistory);
function App() {
  return (
    <div className="page">
      <Router basename={process.env.PUBLIC_URL} history={history}>
        <div id="preloader">
          <div id="status">&nbsp;</div>
        </div>
        <ScrollToTop />
        <Route exact path="/" component={ Home } />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

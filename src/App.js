import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home"
import Portfolio from "./pages/Portfolio/Portfolio"
import Contact from "./pages/Contact/Contact"
import NavBar from "./components/NavBar/NavBar"
import NotFound from "./pages/NotFound/NotFound"
import Footer from "./components/Footer/Footer"

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path ="/" component = {Home} />
        <Route exact path = "/portfolio" component = {Portfolio} />
        <Route exact path = "/contact" component = {Contact} />
        <Route component = {NotFound} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;

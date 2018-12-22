import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home"
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
// import NotFound from "./pages/NotFound/NotFound"

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path ="/" component = {Home} />
        {/* <Route component = {NotFound} /> */}
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;

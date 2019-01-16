import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home"
// import NotFound from "./pages/NotFound/NotFound"

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path ="/" component = {Home} />
        {/* <Route component = {NotFound} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;

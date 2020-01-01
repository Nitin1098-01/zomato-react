import React from "react";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DetailsPage from "./DetailsPage";

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/home" component={HomePage}></Route>
      <Route path="/details" component={DetailsPage}></Route>
    </Router>
  );
}

export default App;

import React from "react";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import DetailsPage from "./DetailsPage";
import Loginpage from "./LoginPage";
import Signup from "./Signup";
import Favorites from "./Favorites";

function App() {
  // return <HomePage />;

  return (
    <Router>
      <Route exact path="/" component={Signup} />
      <Route path="/Loginpage" component={Loginpage} />
      <Route path="/HomePage" component={HomePage} />
      <Route path="/Favorites" component={Favorites} />
    </Router>
  );
}

export default App;

import React from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Matches from "./Matches";
import Navbar from "./Navbar";
import Overview from "./Overview";
import Profile from "./Profile";
import Records from "./Records";
import Stats from "./Stats";

export default function Dashboard({ info }) {

  return (
    <section className="pl-5 dashboard">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" render={() => <Overview info={info} />} />
        <Route path="/records" render={() => <Records info={info} />} />
        <Route path="/stats" render={() => <Stats info={info} />} />
        <Route path="/matches" render={() => <Matches info={info} />} />
        <Route path="/profile" render={() => <Profile info={info} />} />
      </BrowserRouter>
    </section>
  );
}

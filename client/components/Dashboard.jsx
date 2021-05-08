import React from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Matches from "./Matches";
import Navbar from "./Navbar";
import Overview from "./Overview";
import Records from "./Records";
import Stats from "./Stats";

export default function Dashboard({ info }) {
  // console.log(info, "dashboard");
  return (
    <section className="pl-5 dashboard">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" render={() => <Overview info={info} />} />
        <Route path="/records" component={Records} />
        <Route path="/stats" component={Stats} />
        <Route path="/matches" component={Matches} />
      </BrowserRouter>
    </section>
  );
}

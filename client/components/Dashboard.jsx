import React, { useEffect, useState } from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Matches from "./Matches";
import Navbar from "./Navbar";
import Overview from "./Overview";
import Profile from "./Profile";
import Records from "./Records";
import Stats from "./Stats";

export default function Dashboard({ info }) {
  const [odiData, setOdiData] = useState([]);
  const [testData, setTestData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getOdiData = async () => {
    try {
      setLoading(true);
      const odiData = await axios.get("/cricket/odi");
      const data = odiData.data.odiData;
      setOdiData(data);
    } catch (error) {
      setLoading("null");
    }
  };

  const getTestData = async () => {
    try {
      setLoading(true);
      const testData = await axios.get("/cricket/test");
      const data = testData.data.testData;
      setTestData(data);
    } catch (error) {
      setLoading("null");
    }
  };

  useEffect(() => {
    getOdiData();
    getTestData();
  }, []);

  return (
    <section className="pl-5 dashboard">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" render={() => <Overview info={info} />} />
        <Route path="/records" component={Records} />
        <Route path="/stats" component={Stats} />
        <Route path="/matches" render={() => <Matches info={info} />} />
        <Route path="/profile" render={() => <Profile info={info} />} />
      </BrowserRouter>
    </section>
  );
}

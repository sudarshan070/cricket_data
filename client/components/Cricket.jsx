import axios from "axios";
import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";

export default function Cricket() {
  const [odiData, setOdiData] = useState([]);
  const [testData, setTestData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState([]);

  let filterOdiRun = odiData.filter(
    (runs) => parseInt(runs.batting_score) == runs.batting_score
  );

  let filterTestRun = testData.filter(
    (runs) => parseInt(runs.Runs) == runs.Runs
  );

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

  useEffect(() => {
    axios
      .get("/cricket")
      .then((res) => {
        setInfo(res.data.cricket);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="d-flex justify-content-between p-5">
      <Sidebar info={info} />
      <Dashboard />
    </section>
  );
}

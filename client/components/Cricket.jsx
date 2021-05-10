import axios from "axios";
import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";

export default function Cricket() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get("/cricket")
      .then((res) => {
        setInfo(res.data.cricket);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="d-flex justify-content-between p-5 m-display">
      <Sidebar info={info} />
      <Dashboard info={info} />
    </section>
  );
}

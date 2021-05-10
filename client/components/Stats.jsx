import React from "react";
import Chart from "./Chart";

export default function Stats({ info }) {
  // console.log(info);
  return (
    <div className="main-card">
      <div>
        <h1>
          <Chart info={info} />
        </h1>
      </div>
    </div>
  );
}

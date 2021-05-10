import React from "react";

export default function Records({ info }) {
  return (
    <div className="main-card">
      {info.map((data, i) => (
        <div key={i} className="d-flex justify-content-between flex-wrap">
          <div className="card record-card d-flex flex-row p-3">
            <h2>
              1<sup>st</sup>
            </h2>
            <div className="pl-3">
              <h3> Most Test Matches</h3>
              <p>{data.BATTING_Tests_Mat} Runs</p>
            </div>
          </div>

          <div className="card record-card d-flex flex-row p-3">
            <h2>
              1<sup>st</sup>
            </h2>
            <div className="pl-3">
              <h3> Most ODI Matches</h3>
              <p>{data.BATTING_ODIs_Mat} Runs</p>
            </div>
          </div>

          <div className="card record-card d-flex flex-row p-3">
            <h2>
              1<sup>st</sup>
            </h2>
            <div className="pl-3">
              <h3> Most Test Runs in Career</h3>
              <p>{data.BATTING_Tests_Runs} Runs</p>
            </div>
          </div>
          <div className="card record-card d-flex flex-row p-3">
            <h2>
              1<sup>st</sup>
            </h2>
            <div className="pl-3">
              <h3> Most ODI Runs in Career</h3>
              <p>{data.BATTING_ODIs_Runs} Runs</p>
            </div>
          </div>
          <div className="card record-card d-flex flex-row p-3">
            <h2>
              1<sup>st</sup>
            </h2>
            <div className="pl-3">
              <h3> Most Test Hundred in Career</h3>
              <p>{data.BATTING_Tests_100} Hundred</p>
            </div>
          </div>
          <div className="card record-card d-flex flex-row p-3">
            <h2>
              1<sup>st</sup>
            </h2>
            <div className="pl-3">
              <h3> Most ODI Hundred in Career</h3>
              <p>{data.BATTING_ODIs_100} Hundred</p>
            </div>
          </div>
          <div className="card record-card d-flex flex-row p-3">
            <h2>
              1<sup>st</sup>
            </h2>
            <div className="pl-3">
              <h3> Longest ODI Career</h3>
              <p>{data.logest_odi_career} </p>
            </div>
          </div>
          <div className="card record-card d-flex flex-row p-3">
            <h2>
              1<sup>st</sup>
            </h2>
            <div className="pl-3">
              <h3> Most Player of Series</h3>
              <p>{data.Most_Player_of_Series} ODI, Test, T20s Runs</p>
            </div>
          </div>
          <div className="card record-card d-flex flex-row p-3">
            <h2>
              1<sup>st</sup>
            </h2>
            <div className="pl-3">
              <h3> Most Nineties in Career</h3>
              <p>{data.BATTING_90s} times(Test, ODIs)</p>
            </div>
          </div>
          <div className="card record-card d-flex flex-row p-3">
            <h2>
              1<sup>st</sup>
            </h2>
            <div className="pl-3">
              <h3> Most Runs in Career</h3>
              <p>
                {Number(data.BATTING_Tests_Runs) +
                  Number(data.BATTING_ODIs_Runs)}{" "}
                Runs
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

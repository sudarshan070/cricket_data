import React from "react";

export default function Matches({ info }) {
  console.log(info);
  return (
    <div className="main-card">
      <h2>Batting Career Summary</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">M</th>
            <th scope="col">Inn</th>
            <th scope="col">N.O.</th>
            <th scope="col">Runs</th>
            <th scope="col">Hs</th>
            <th scope="col">Avg</th>
            <th scope="col">BF</th>
            <th scope="col">SR</th>
            <th scope="col">100</th>

            <th scope="col">50</th>
            <th scope="col">4s</th>
            <th scope="col">6s</th>
          </tr>
        </thead>
        {info.map((data, i) => (
          <tbody key={i}>
            <tr>
              <th scope="row">Test</th>
              <td>{data["BATTING_Tests_Mat"]}</td>
              <td>{data["BATTING_Tests_Inns"]}</td>
              <td>{data["BATTING_Tests_NO"]}</td>
              <td>{data["BATTING_Tests_Runs"]}</td>
              <td>{data["BATTING_Tests_HS"]}</td>
              <td>{data["BATTING_Tests_Ave"]}</td>
              <td>{data["BATTING_Tests_BF"]}</td>
              <td>{data["BATTING_Tests_SR"]}</td>
              <td>{data["BATTING_Tests_100"]}</td>
              <td>{data["BATTING_Tests_50"]}</td>
              <td>{data["BATTING_Tests_4s"]}</td>
              <td>{data["BATTING_Tests_6s"]}</td>
            </tr>
            <tr>
              <th scope="row">ODI</th>
              <td>{data["BATTING_ODIs_Mat"]}</td>
              <td>{data["BATTING_ODIs_Inns"]}</td>
              <td>{data["BATTING_ODIs_NO"]}</td>
              <td>{data["BATTING_ODIs_Runs"]}</td>
              <td>{data["BATTING_ODIs_HS"]}</td>
              <td>{data["BATTING_ODIs_Ave"]}</td>
              <td>{data["BATTING_ODIs_BF"]}</td>
              <td>{data["BATTING_ODIs_SR"]}</td>
              <td>{data["BATTING_ODIs_100"]}</td>
              <td>{data["BATTING_ODIs_50"]}</td>
              <td>{data["BATTING_ODIs_4s"]}</td>
              <td>{data["BATTING_ODIs_6s"]}</td>
            </tr>
            <tr>
              <th scope="row">T20I</th>
              <td>{data["BATTING_T20Is_Mat"]}</td>
              <td>{data["BATTING_T20Is_Inns"]}</td>
              <td>{data["BATTING_T20Is_NO"]}</td>
              <td>{data["BATTING_T20Is_Runs"]}</td>
              <td>{data["BATTING_T20Is_HS"]}</td>
              <td>{data["BATTING_T20Is_Ave"]}</td>
              <td>{data["BATTING_T20Is_BF"]}</td>
              <td>{data["BATTING_T20Is_SR"]}</td>
              <td>{data["BATTING_T20Is_100"]}</td>
              <td>{data["BATTING_T20Is_50"]}</td>
              <td>{data["BATTING_T20Is_4s"]}</td>
              <td>{data["BATTING_T20Is_6s"]}</td>
            </tr>
            <tr>
              <th scope="row">FC</th>
              <td>{data["BATTING_First-class_Mat"]}</td>
              <td>{data["BATTING_First-class_Inns"]}</td>
              <td>{data["BATTING_First-class_NO"]}</td>
              <td>{data["BATTING_First-class_Runs"]}</td>
              <td>{data["BATTING_First-class_HS"]}</td>
              <td>{data["BATTING_First-class_Ave"]}</td>
              <td>-</td>
              <td>-</td>
              <td>{data["BATTING_First-class_100"]}</td>
              <td>{data["BATTING_First-class_50"]}</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        ))}
      </table>
      <h2>Bowling Career Summary</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">M</th>
            <th scope="col">Inn</th>
            <th scope="col">B</th>
            <th scope="col">Runs</th>
            <th scope="col">Wkts</th>
            <th scope="col">BBI</th>
            <th scope="col">BBM</th>
            <th scope="col">Econ</th>
            <th scope="col">Avg</th>
            <th scope="col">SR</th>
            <th scope="col">5W</th>
            <th scope="col">10W</th>
          </tr>
        </thead>
        {info.map((data, i) => (
          <tbody key={i}>
            <tr>
              <th scope="row">Test</th>
              <td>{data["BOWLING_Tests_Mat"]}</td>
              <td>{data["BOWLING_Tests_Inns"]}</td>
              <td>{data["BOWLING_Tests_Balls"]}</td>
              <td>{data["BOWLING_Tests_Runs"]}</td>
              <td>{data["BOWLING_Tests_Wkts"]}</td>
              <td>{data["BOWLING_Tests_BBI"]}</td>
              <td>{data["BOWLING_Tests_BBM"]}</td>
              <td>{data["BOWLING_Tests_SR"]}</td>
              <td>{data["BOWLING_Tests_Ave"]}</td>
              <td>{data["BOWLING_Tests_Econ"]}</td>
              <td>{data["BOWLING_Tests_5w"]}</td>
              <td>{data["BOWLING_Tests_10"]}</td>
            </tr>
            <tr>
              <th scope="row">ODI</th>
              <td>{data["BOWLING_ODIs_Mat"]}</td>
              <td>{data["BOWLING_ODIs_Inns"]}</td>
              <td>{data["BOWLING_ODIs_Balls"]}</td>
              <td>{data["BOWLING_ODIs_Runs"]}</td>
              <td>{data["BOWLING_ODIs_Wkts"]}</td>
              <td>{data["BOWLING_ODIs_BBI"]}</td>
              <td>{data["BOWLING_ODIs_BBM"]}</td>
              <td>{data["BOWLING_ODIs_Econ"]}</td>
              <td>{data["BOWLING_ODIs_Ave"]}</td>
              <td>{data["BOWLING_ODIs_SR"]}</td>
              <td> {data["BOWLING_ODIs_5w"]} </td>
              <td>{data["BOWLING_ODIs_10"]}</td>
            </tr>
            <tr>
              <th scope="row">T20I</th>
              <td> {data["BOWLING_T20Is_Mat"]} </td>
              <td> {data["BOWLING_T20Is_Inns"]} </td>
              <td> {data["BOWLING_T20Is_Balls"]} </td>
              <td> {data["BOWLING_T20Is_Runs"]} </td>
              <td>{data["BOWLING_T20Is_Wkts"]}</td>
              <td> {data["BOWLING_T20Is_BBI"]} </td>
              <td> {data["BOWLING_T20Is_BBM"]} </td>
              <td> {data["BOWLING_T20Is_SR"]} </td>
              <td> {data["BOWLING_T20Is_Ave"]} </td>
              <td> {data["BOWLING_T20Is_Econ"]} </td>
              <td> {data["BOWLING_T20Is_5w"]} </td>
              <td>{data["BOWLING_T20Is_10"]}</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">FC</th>

              <td>{data["BOWLING_First-class_Mat"]}</td>
              <td>200</td>
              <td>{data["BOWLING_First-class_Balls"]}</td>
              <td>{data["BOWLING_First-class_Runs"]}</td>
              <td>{data["BOWLING_First-class_Wkts"]}</td>
              <td>{data["BOWLING_First-class_BBI"]}</td>
              <td>{data["BOWLING_List A_BBM"]}</td>
              <td>{data["BOWLING_First-class_Econ"]}</td>
              <td>{data["BOWLING_First-class_Ave"]}</td>
              <td>{data["BOWLING_First-class_SR"]}</td>
              <td>{data["BOWLING_First-class_5w"]}</td>
              <td>{data["BOWLING_First-class_10"]}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

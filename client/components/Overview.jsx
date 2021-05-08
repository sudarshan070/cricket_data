import React from "react";

export default function Overview({ info }) {
  console.log(info);
  return (
    <div className="main-card ">
      {info.map((data, i) => (
        <div key={i} className="d-flex justify-content-between flex-wrap">
          <div className="overview-info p-3 mb-3 ">
            <h4>Name</h4>
            <h3>{data["Full name"]}</h3>
          </div>
          <div className="overview-info p-3 mb-3 ">
            <h4>Born</h4>
            <h3>{data.Born}</h3>
          </div>
          <div className="overview-info p-3 mb-3 ">
            <h4>Age</h4>
            <h3>{data["Current age"]}</h3>
          </div>
          <div className="overview-info p-3 mb-3 ">
            <h4>Playing Role</h4>
            <h3>{data["Playing role"]}</h3>
          </div>
          <div className="overview-info p-3 mb-3 ">
            <h4>Batting Style</h4>
            <h3>{data["Batting style"]}</h3>
          </div>
          <div className="overview-info p-3 mb-3 ">
            <h4>Balling Style</h4>
            <h3>{data["Bowling style"]}</h3>
          </div>
          <div className="overview-info p-3 mb-3 ">
            <h4>Country</h4>
            <h3>{data.COUNTRY}</h3>
          </div>
          <div className="overview-info p-3 mb-3 ">
            <h4>Education</h4>
            <h3>{data["Education"]}</h3>
          </div>
          <div className="overview-info p-3 mb-3 ">
            <h4>Height</h4>
            <h3>{data.Height}</h3>
          </div>

          <div className="award-team p-3 mb-3">
            <h4>Awards</h4>
            <div className="d-flex justify-content-between">
              {JSON.parse(data.AWARDS.replace(/'/g, '"')).map((award) => (
                <h3>{award}</h3>
              ))}
            </div>
          </div>
          <div className="award-team p-3 mb-3">
            <h4>Teams</h4>
            <div className="d-flex justify-content-between">
              {JSON.parse(data["Major teams"].replace(/'/g, '"')).map(
                (team) => (
                  <h3>{team}</h3>
                )
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

import React from "react";
import ProfilePic from "../../public/images/profile.png";

export default function Sidebar({ info }) {
  return (
    <aside className="aside d-flex flex-column align-items-center px-2 py-5 shadow-lg">
      <img src={ProfilePic} alt="profile" />
      {info.map((data, i) => (
        <div key={i} className="px-3 pt-5">
          <h2>{data.NAME}</h2>
          <p>
            <small>{data.COUNTRY}</small> |{" "}
            <small>{data["Playing role"]}</small>
          </p>
          <small>INTL CAREER: 1989 - 2013</small>
        </div>
      ))}
    </aside>
  );
}

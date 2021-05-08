import React from "react";

export default function Profile({ info }) {
  return (
    <div className="main-card">
      <h2>Profile</h2>
      {info.map((data, i) => (
        <p className="profile" key={i}>
          {data.DESCRIPTION.slice(4, -9)}
        </p>
      ))}
    </div>
  );
}

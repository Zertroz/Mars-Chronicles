import React from "react";
import './Details.css';
import { missionStatements } from "../../roverDataLocal";

function Details({rover}) {
  return (
    <div className="details-container">
      <h2>{rover.name}</h2>
      <div className="content">
        <div className="detail-section">
          <p className="data-label">Launch</p>
          <p className="data">{rover.launch_date}</p>
        </div>
        <div className="detail-section">
          <p className="data-label">Landing</p>
          <p className="data">{rover.landing_date}</p>
        </div>
        <div className="detail-section">
          <p className="data-label">Mars Sols</p>
          <p className="data">{rover.max_sol}</p>
        </div>
        <div className="detail-section">
          <p className="data-label">Mission Status</p>
          <p className="data">{rover.status}</p>
        </div>
      </div>
      <p className="mission-statement">{ missionStatements[rover.name] }</p>
    </div>
  )
}

export default Details;

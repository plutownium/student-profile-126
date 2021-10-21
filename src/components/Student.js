import React from "react";

import "./Students.css";

function Student({ firstName, lastName, city, email, skill, grades, pic }) {
  return (
    <div>
      <div className="studentContainer debug3">
        <div className="imageContainerOuter debug2">
          <div className="imageContainerInner debug1">
            <img src={pic} />
          </div>
        </div>
        <div className="infoContainer debug2">
          <h3>
            {firstName} {lastName}
          </h3>
          <p>{city}</p>
          <p>{email}</p>
          <h4>
            <p>{skill}</p>
          </h4>
          <ul>{grades}</ul>
        </div>
      </div>
    </div>
  );
}

export default Student;

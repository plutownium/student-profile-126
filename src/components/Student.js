import React from "react";

import "./Students.css";

function Student({ firstName, lastName, city, email, skill, grades, pic }) {
  function calculateGPA(gradesInput) {
    let calculatedGPA = 0;
    for (let i = 0; i < gradesInput.length; i++) {
      calculateGPA = calculateGPA + gradesInput[i];
    }
    calculateGPA = calculatedGPA / gradesInput.length;
    return calculatedGPA;
  }

  return (
    <div>
      <div className="studentContainer studentContainerHeightMod ">
        <div className="imageContainerOuter imageContainerHeightMod ">
          <div className="imageContainerInner imageContainerHeightMod   ">
            <img src={pic} />
          </div>
        </div>
        <div className="infoContainer debug2">
          <h3 className="namingPolicy">
            {firstName} {lastName}
          </h3>
          <div className="studentDetails">
            <p>{city}</p>
            <p>{email}</p>
            <h4>
              <p>{skill}</p>
            </h4>
            <p>{calculateGPA(grades)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student;

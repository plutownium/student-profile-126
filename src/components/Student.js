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
            <p>
              Email: <span>{email}</span>
            </p>
            <p>
              Company: <span>{company}</span>
            </p>
            <p>
              Skill: <span>{skill}</span>
            </p>
            <p>
              Average: <span>{calculateGPA(grades)}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student;

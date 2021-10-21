import React from "react";

import "./Students.css";

function Student({
  firstName,
  lastName,
  //   city,
  email,
  company,
  skill,
  grades,
  pic,
}) {
  function calculateGPA(gradesInput) {
    let calculatedGPA = 0;
    for (let i = 0; i < gradesInput.length; i++) {
      calculatedGPA = calculatedGPA + gradesInput[i];
    }
    calculatedGPA = calculatedGPA / gradesInput.length;
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
            <p className="detailsPolicy">
              Email: <span>{email}</span>
            </p>
            <p className="detailsPolicy">
              Company: <span>{company}</span>
            </p>
            <p className="detailsPolicy">
              Skill: <span>{skill}</span>
            </p>
            <p className="detailsPolicy">
              Average: <span>{calculateGPA(grades)}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student;

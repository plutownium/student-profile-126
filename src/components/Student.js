import React, { useState } from "react";

import Expand from "../images/icons8-plus-+-48.png";
import "./Student.css";

function Student({ firstName, lastName, email, company, skill, grades, pic }) {
  const [showGrades, setShowGrades] = useState(false);

  function calculateGPA(gradesInput) {
    let calculatedGPA = 0;
    for (let i = 0; i < gradesInput.length; i++) {
      // arr input has strings, so, need to parseInt to add them
      calculatedGPA = calculatedGPA + parseInt(gradesInput[i], 10);
    }
    calculatedGPA = calculatedGPA / gradesInput.length;
    // turn back to string and truncate 2 decimal places
    calculatedGPA = calculatedGPA.toString().substring(0, 5);
    return calculatedGPA;
  }

  return (
    <div className="debug3">
      <div className="studentContainer studentContainerHeightMod">
        <div className="imageContainerOuter imageContainerHeightMod">
          <div className="imageContainerInner imageContainerHeightMod">
            <img src={pic} alt="a profile pic" />
          </div>
        </div>
        <div className="infoContainer">
          <div className="genericFlexRow">
            <h3 className="namingPolicy">
              {firstName} {lastName}
            </h3>
            <div
              className="gradesExpandContainer"
              onClick={() => {
                console.log(grades);
                setShowGrades(!showGrades);
              }}
            >
              <img
                className="gradesExpandContainer"
                src={Expand}
                alt="expand grades"
              />
            </div>
          </div>
          <div className="studentDetails debug3">
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
            <p>hey</p>
            <p>hey</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student;

// {showGrades ? (
//   <div className="debug2">
//     <p>Hi</p>
//     <p>Hello</p>
//     <p>Test</p>
//   </div>
// ) : null}

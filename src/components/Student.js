import React, { useState } from "react";

import Expand from "../images/icons8-plus-+-48.png";

import Tag from "./Tag";

import "./Student.css";

function Student({ firstName, lastName, email, company, skill, grades, pic }) {
  const [showGrades, setShowGrades] = useState(false);
  const [tags, setTags] = useState([]);
  // todo: get Tagging to push state into Student state

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

  function handler(target) {
    setTags(target);
  }

  return (
    <div className="debug3">
      <div className="studentContainer ">
        <div className="imageContainerOuter ">
          <div className="imageContainerInner ">
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

            {showGrades ? (
              <div>
                {grades.map((grade, index) => {
                  return (
                    <p className="detailsPolicy">
                      Test {index + 1}: {grade}
                    </p>
                  );
                })}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="genericFlexColumn">
            {/* # # # # # # # # */}
            {/* Show tags here */}
            {/* # # # # # # # # */}
            <div className="genericFlexRow">
              <span>111: {tags}</span>
              {tags.length > 0
                ? tags.map((tag, index) => {
                    return <Tag content={tag} key={index} />;
                  })
                : null}
              <Tag content={"Tag1"} key={999} />
            </div>
            {/*  */}
            {/* create your own tags here */}
            {/*  */}
            <div>
              <div className="studentTagsContainer">
                <div>
                  <input
                    maxLength="9"
                    onChange={(event) => {
                      console.log(event.target.value);
                      if (event.target.value.length < 10) {
                        setNewTagMaterial(event.target.value);
                      }
                    }}
                  />
                  <button
                    onClick={() => {
                      const getTags = tags;
                      console.log(getTags);
                      throw "these are the tags";
                      setTags(newTagMaterial);
                    }}
                  >
                    Set Tag
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student;

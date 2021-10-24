import React, { useEffect, useState } from "react";

import Expand from "../images/icons8-plus-+-48.png";

import Tag from "./Tag";

import "./Student.css";

function Student({
  firstName,
  lastName,
  email,
  company,
  skill,
  grades,
  pic,
  grabNewTag,
  qualifiedTags,
  tagFilterTarget,
}) {
  const [showGrades, setShowGrades] = useState(false);
  const [tags, setTags] = useState([]);
  const [newTagMaterial, setNewTagMaterial] = useState([]);
  // todo: if tags in remainingTags, then display Student. else, hide Student.

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

  function removeTag(removedTag) {
    // subtract current tag from state
    let remainingTags = [];
    for (let i = 0; i < tags.length; i++) {
      if (tags[i] !== removedTag) {
        // console.log("pushing...", tags[i]);
        remainingTags.push(tags[i]);
      }
    }
    console.log(remainingTags);
    setTags(remainingTags);
  }

  function qualifyStudentViaTags(tagFilterTarget) {
    // as per video: if tagTarget registers as a Student's tag(s) value, show student.
    if (tagFilterTarget.length === 0) {
      // console.log("No qualifiers...", tags, tagFilterTarget);
      return true; // all are qualified if there is no tag filter input
    }
    if (tags.length) {
      console.log(tags);
    }
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].includes(tagFilterTarget)) {
        console.log("MATCH:", tags[i], i, "with: ", tagFilterTarget);
        return true;
      }
    }
    // console.log("rejected because ... no hits from filter picks");
    return false; // will return false if no matches are qualified
  }

  const studentPassesTagFilter = qualifyStudentViaTags(tagFilterTarget);

  if (studentPassesTagFilter) {
    return (
      <div className="">
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
              <div className="genericFlexRow">
                {tags.length > 0
                  ? tags.map((tag, index) => {
                      return (
                        <Tag content={tag} key={index} removeTag={removeTag} />
                      );
                    })
                  : null}
              </div>
              {/*  */}
              {/* create your own tags here */}
              <div className="noMargins">
                <div className="studentTagsContainer noMargins">
                  <div>
                    <input
                      className="mosaicInputStyling noMargins"
                      placeholder="Add a tag"
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
                        console.log("tags:", getTags, newTagMaterial);
                        // setTags?
                        grabNewTag(newTagMaterial.toString());
                        if (tags.length === 0) {
                          let firstTag = [newTagMaterial.toString()];
                          console.log("this is the first tag:", firstTag);
                          setTags(firstTag);
                        } else {
                          let secondTag = newTagMaterial.toString();
                          let newTags = [...tags, secondTag];
                          console.log("these are the NEW tags:", newTags);
                          setTags(newTags);
                        }
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
  } else {
    return null;
  }
}

export default Student;

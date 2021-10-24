import React, { useState, useEffect } from "react";
import axios from "axios";

import Student from "./Student";

import "./Fetcher.css";

function Fetcher() {
  const [students, setStudents] = useState([]);
  const [nameFilterTargetText, setNameFilter] = useState("");
  const [allTags, setAllTags] = useState("");
  const [tagFilterTarget, setTagFilterTarget] = useState("");

  useEffect(() => {
    console.log("page loaded correct");
    const url = "https://api.hatchways.io/assessment/students";
    axios.get(url).then((response) => {
      console.log(response.data.students);
      let studentData = response.data.students;
      if (students.length === 0) {
        setStudents(studentData);
      }
    });
  }, []);

  function grabNewTag(pulledUpTag) {
    let newArr = [];
    if (allTags.length === 0) {
      newArr = [];
    } else {
      newArr = allTags.slice();
      console.log(newArr, allTags);
    }
    newArr.push(pulledUpTag);

    console.log(33, newArr);
    setAllTags(newArr);
  }

  function makeStudent(student) {
    return (
      <Student
        key={student.id}
        fullName={student.firstName + " " + student.lastName}
        firstName={student.firstName}
        lastName={student.lastName}
        email={student.email}
        company={student.company}
        skill={student.skill}
        grades={student.grades}
        pic={student.pic}
        className="testSuccessClass"
        grabNewTag={grabNewTag}
        qualifiedTags={allTags} // TODO: use the contents of allTags to inform Student component to render or not render.
        tagFilterTarget={tagFilterTarget}
      />
    );
  }

  function processStudentsData(students) {
    let processedStudentsList = [];

    students.forEach((student) =>
      processedStudentsList.push(makeStudent(student))
    );

    // let filterIsOff = allTags.length === 0 && nameFilterTargetText.length === 0;
    let onlySearchingByName = allTags.length === 0;
    // let onlySearchingByTag = nameFilterTargetText.length === 0;

    // TODO: make into Switch Statement
    if (nameFilterTargetText.length > 0 && onlySearchingByName) {
      console.log("FILTER BY NAME");
      // yes, redundancy in logic gate
      // TODO: reshape to have "nameOnly, tagOnly, nameAndTag" sections
      let upperFilterTargetText = nameFilterTargetText.toUpperCase();
      let filteredList = [];
      for (let i = 0; i < processedStudentsList.length; i++) {
        let upperCurrentEntry =
          processedStudentsList[i].props.fullName.toUpperCase();
        if (upperCurrentEntry.includes(upperFilterTargetText)) {
          filteredList.push(processedStudentsList[i]);
        }
      }

      // i want to see here: "Excluding student <name> because <tag> is MIA."
      // and: "Student <name> stays because <tag> is present."

      return filteredList;
    }

    // TODO: check if both name and tag filters work simultaneously, then do styling.
    return processedStudentsList;
  }

  const processedStudents =
    students.length === 0 ? null : processStudentsData(students);

  return (
    <div className="mainContainerOuterWrapper">
      <div id="filterContainerOuter">
        <div className="filterContainerInner">
          <input
            className="mosaicInputStyling filterInput"
            id="nameFiltering"
            onChange={(event) => {
              setNameFilter(event.target.value);
            }}
            placeholder="Search by name..."
          />
        </div>
        <div className="filterContainerInner ">
          <input
            className="mosaicInputStyling filterInput"
            id="tagFiltering"
            onChange={(event) => {
              console.log("SEARCH:", event.target.value);
              setTagFilterTarget(event.target.value);
            }}
            placeholder="Search by tag..."
          />
        </div>
      </div>
      <div className="mainContainer">{processedStudents}</div>
    </div>
  );
}

export default Fetcher;

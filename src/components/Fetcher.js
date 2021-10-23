import React, { useState, useEffect } from "react";
import axios from "axios";

import Student from "./Student";

import "./Fetcher.css";

import "./Filter";
import "./Filter.css";

function Fetcher() {
  const [students, setStudents] = useState([]);
  const [nameFilterTargetText, setNameFilter] = useState("");
  const [allTags, setAllTags] = useState("");
  // const [tagFilterTarget, setTagFilterTarget] = useState("");

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
    console.log("new tag found:", pulledUpTag);
    // TODO: lodge it into the fetcher tags list using spread operator
    let totalTags = [...allTags, pulledUpTag];
    setAllTags(totalTags);
  }

  function processStudentsData(students) {
    let processedStudentsList = [];

    students.forEach((student) =>
      processedStudentsList.push(
        <Student
          key={student.id}
          fullName={student.firstName + " " + student.lastName}
          firstName={student.firstName}
          lastName={student.lastName}
          // city={student.city}
          email={student.email}
          company={student.company}
          skill={student.skill}
          grades={student.grades}
          pic={student.pic}
          className="testSuccessClass"
          grabNewTag={grabNewTag}
        />
      )
    );

    let filterIsOff = allTags.length === 0 && nameFilterTargetText.length === 0;
    let onlySearchingByName = allTags.length === 0;
    let onlySearchingByTag = nameFilterTargetText.length === 0;

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
      return filteredList;
    } else if (allTags.length > 0 && onlySearchingByTag) {
      console.log("FILTER BY TAG");
      // yes, redundancy in logic gate is there for a reason! safeguards...
      let upperCaseTags = allTags.map((tag) => tag.toUpperCase());
      // TODO: go down into students' states and pull up all of the tags ... or push them up on init
      let filteredList = [];
      // TODO: allow 2 tags to be searched for simultaneously, via a "," spacer
      // for (let i = 0; i < processedStudentsList.length; i++) {}
     } else if (filterIsOff) {
        return processedStudentsList;
      } else {

      }
      console.log(onlySearchingByName, onlySearchingByTag);
      return filteredList;
    }
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
              console.log("checking...", event.target.value);
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
              console.log("checking...", event.target.value);
              setAllTags(event.target.value); // handle "tag1" && "tag1, tag2";
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

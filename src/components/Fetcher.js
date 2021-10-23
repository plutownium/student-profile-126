import React, { useState, useEffect } from "react";
import axios from "axios";

import Student from "./Student";

import "./Fetcher.css";

import "./Filter";
import "./Filter.css";

function Fetcher() {
  const [students, setStudents] = useState([]);
  const [filterTargetText, setFilterTargetText] = useState("");
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

  // function passesCurrentFilter(student) {
  //   let fullName = student.firstName + " " + student.lastName;
  //   console.log(student, 99, fullName);
  //   return fullName.indexOf(filterTargetText) > -1;
  // }

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
          // tags={["cat", "fish", "bird"]} // woops
        />
      )
    );

    if (filterTargetText.length > 0) {
      let upperFilterTargetText = filterTargetText.toUpperCase();
      let filteredList = [];
      for (let i = 0; i < processedStudentsList.length; i++) {
        let upperCurrentEntry =
          processedStudentsList[i].props.fullName.toUpperCase();
        if (upperCurrentEntry.includes(upperFilterTargetText)) {
          filteredList.push(processedStudentsList[i]);
        }
      }
      return filteredList;
    }
    return processedStudentsList;
  }

  const processedStudents =
    students.length === 0 ? null : processStudentsData(students);

  return (
    <div className="mainContainerOuterWrapper">
      <div id="filterContainerOuter">
        <div id="filterContainerInner">
          <input
            id="filterInput"
            onChange={(event) => {
              console.log("checking...", event.target.value);
              setFilterTargetText(event.target.value);
            }}
            placeholder="Search by name..."
          />
        </div>
      </div>
      <div className="mainContainer">{processedStudents}</div>
    </div>
  );
}

export default Fetcher;

import React, { useState, useEffect } from "react";
import axios from "axios";

import Student from "./Student";

import "./Fetcher.css";

import "./Filter";
import "./Filter.css";

function Fetcher() {
  const [students, setStudents] = useState([]);
  const [filterTargetText, setFilterTargetText] = useState("");
  const [tags, setTags] = useState([]);

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

  function processStudentsData(students) {
    let processedStudentsList = null;
    let isFilteredByString = filterTargetText !== "";
    if (isFilteredByString) {
      let filteredStudents = students.filter((student) => {
        const fullName = student.firstName + " " + student.lastName;
        console.log(typeof fullName, fullName);
        fullName.includes(filterTargetText);
      });
      console.log(50, 50, 50, 50, filteredStudents);
      return filteredStudents;
    } else {
      processedStudentsList = students.map((student) => (
        <Student
          key={student.id}
          firstName={student.firstName}
          lastName={student.lastName}
          // city={student.city}
          email={student.email}
          company={student.company}
          skill={student.skill}
          grades={student.grades}
          pic={student.pic}
          className="testSuccessClass"
          tags={["cat", "fish", "bird"]}
        />
      ));
    }

    return processedStudentsList;
  }

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
      <div className="mainContainer">
        {students.length === 0 ? null : processStudentsData(students)}
      </div>
    </div>
  );
}

export default Fetcher;

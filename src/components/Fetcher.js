import React, { useState, useEffect } from "react";
import axios from "axios";

import Student from "./Student";

import "./Fetcher.css";

function Fetcher() {
  const [students, setStudents] = useState([]);
  const [processedList, setProcessedList] = useState([]);

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
  });

  function processStudentsData(students) {
    const fixed = students.map((student) => (
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
      />
    ));
    return fixed;
  }

  return (
    // <div style={{ height: "400px", border: "3px solid black" }}>
    <div>
      <div className="testContainer">
        {students.length === 0 ? null : processStudentsData(students)}
      </div>
    </div>
  );
}

export default Fetcher;

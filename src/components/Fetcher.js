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
    console.log(25, students);
    const processedList = [];
    processedList.push(<Student key={students[0].id} props={students[0]} />);
    console.log(27, processedList);
    let testReturn = (
      <div>
        <h3>HEY</h3>
      </div>
    );
    return testReturn;
  }

  return (
    <div style={{ height: "400px", border: "3px solid black" }}>
      <div>
        <button
          onClick={() => {
            console.log(students[0]);
          }}
        >
          woops
        </button>
      </div>
      <div className="testContainer">
        {students.length === 0 ? null : processStudentsData(students)}
      </div>
    </div>
  );
}

export default Fetcher;

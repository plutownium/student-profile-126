import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Fetcher.css";

function Fetcher() {
  const [students, setStudents] = useState([]);

  // useEffect(() => {
  //     const url = "https://api.hatchways.io/assessment/students";
  //     axios.get(url).then((response) => {
  //       const studentsData = response.data.students;
  //       console.log(studentsData)
  //       setStudents(studentsData);
  // });

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
        {students.length === 0
          ? null
          : students.forEach((element) => {
              console.log(element.city);
              return (
                <div>
                  <p className="test lookHere">{element.city}</p>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default Fetcher;

import React, { useState, useEffect } from "react";
import axios from "axios";

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
            console.log("ayylmao");
            console.log(students, students.length);
          }}
        >
          foooooooooo
        </button>
      </div>
    </div>
  );
}

export default Fetcher;

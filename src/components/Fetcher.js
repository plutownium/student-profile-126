import React from "react";
import axios from "axios";

function Fetcher() {
  let mapped;
  console.log("hadsfasf");
  const url = "https://api.hatchways.io/assessment/students";
  const getAllStudents = axios.get(url).then((response) => {
    const studentData = response.data;
    console.log(studentData, typeof studentData);
    mapped = studentData;
  });
  console.log("students length:", getAllStudents.length);

  return (
    <div>
      {mapped === null
        ? " "
        : mapped.map(function (student, index) {
            <div>
              <h1>Index: {index} </h1>
              <h2>student.firstName student.lastName</h2>
              <p>
                <span>Email:</span> <span>student.email</span>
              </p>
              <p>
                <span>Company:</span> <span>student.company</span>
              </p>
              <p>
                <span>Skill:</span>
                <span>student.skill</span>
              </p>
            </div>;
          })}
    </div>
  );
}

export default Fetcher;

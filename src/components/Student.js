import React from "react";

function Student({ firstName, lastName, city, email, skill, grades, pic }) {
  return (
    <div>
      <h3>
        {firstName} {lastName}
      </h3>
      <p>{city}</p>
      <p>{email}</p>
      <h4>
        <p>{skill}</p>
      </h4>
      <ul>{grades}</ul>
    </div>
  );
}

export default Student;

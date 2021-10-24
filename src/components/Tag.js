import React from "react";

import "./Tag.css";

function Tag(props) {
  return (
    <div
      className="tagBox"
      onClick={() => {
        props.removeTag();
      }}
    >
      <p>{props.content}</p>
    </div>
  );
}

export default Tag;

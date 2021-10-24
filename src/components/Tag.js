import React from "react";

import "./Tag.css";

function Tag(props) {
  return (
    <div
      className="tagBox"
      onClick={() => {
        props.removeTag(props.content);
      }}
    >
      <p>{props.content}</p>
    </div>
  );
}

export default Tag;

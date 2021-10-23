import React from "react";

import "./Tag.css";

function Tag(props) {
  return (
    <div className="tagBox">
      <p>{props.content}</p>
    </div>
  );
}

export default Tag;

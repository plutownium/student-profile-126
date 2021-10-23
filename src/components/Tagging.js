import React, { useState } from "react";

function Tagging({ retrieveTags }) {
  const [currentTags, setCurrentTags] = useState([]);
  const [newTagMaterial, setNewTagMaterial] = useState(null); // fixme
  const [tags, setTags] = useState([]);
  return (
    <div className="studentTagsContainer">
      <div>{tags}</div>
      <div>
        <input
          maxLength="9"
          onChange={(event) => {
            console.log(event.target.value);

            setNewTagMaterial(event.target.value);
          }}
        />
        <button
          onClick={() => {
            console.log(currentTags, newTagMaterial, retrieveTags);
            let tags = currentTags.push(newTagMaterial);
            setCurrentTags(tags);
            retrieveTags(currentTags);
          }}
        >
          Set Tag
        </button>
      </div>
    </div>
  );
}

export default Tagging;

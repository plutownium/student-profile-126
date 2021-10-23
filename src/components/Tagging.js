import React, { useState } from "react";

import Tag from "./Tag";

function Tagging({ currentTags, retrieveNewTag, customFunc }) {
  //   const [currentTags, setCurrentTags] = useState([]);
  const [newTagMaterial, setNewTagMaterial] = useState(null); // fixme
  //   const [tags, setTags] = useState([]);
  return (
    <div className="studentTagsContainer">
      {/* <div>
        {currentTags.map((tag, index) => {
          return <Tag content={tag} key={index} />;
        })}
      </div> */}
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
            console.log(currentTags, newTagMaterial, retrieveNewTag);
            let tags = currentTags.push(newTagMaterial);
            // retrieveNewTag("bob");
            retrieveNewTag(newTagMaterial);
            customFunc("success was here");
          }}
        >
          Set Tag
        </button>
      </div>
    </div>
  );
}

export default Tagging;

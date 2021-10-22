import React from "react";

function Filter({ setTarget }) {
  // pass input name up to parent and then back down to Fetcher to filter
  return (
    <div>
      <div>
        <input
          onChange={(event) => {
            console.log("checking...", event.target.value);
            setTarget(event.target.value);
          }}
          placeholder="Search by name..."
        />
      </div>
    </div>
  );
}

export default Filter;

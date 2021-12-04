import React from "react";

function Filter() {
  return (
    <div>
      <label for="filter">Find contacts by name</label>
      <input id="filter" type="text" required />
    </div>
  );
}

export default Filter;

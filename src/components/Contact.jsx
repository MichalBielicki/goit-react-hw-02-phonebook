import React from "react";

function Contact({ name, number, action }) {
  return (
    <>
      <li>
        {name}
        {number}
        <button type="button" onClick={action}>
          Delete
        </button>
      </li>
    </>
  );
}

export default Contact;

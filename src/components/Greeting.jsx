// src/components/Greeting.jsx

import React from "react";

function Greeting({ message }) {
  return (
    <div>
      <h1>Greetings</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default Greeting;

import React from "react";
import { username, city } from "./user";

function About() {
  return (
    <div>
      <h1>About Component</h1>
      <p>{username} lives in {city}.</p>
    </div>
  );
}

export default About;

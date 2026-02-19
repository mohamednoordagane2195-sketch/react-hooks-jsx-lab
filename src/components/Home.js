import React from "react";
import { username, city, image } from "./user";

function Home() {
  return (
    <div>
      <h1>Home Component</h1>
      <p>Username: {username}</p>
      <p>City: {city}</p>
      <img src={image} alt={username} />
    </div>
  );
}

export default Home;

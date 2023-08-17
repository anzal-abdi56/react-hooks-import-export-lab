import React from "react";
import About from "./About";
import Home from "./Home";
import NavBar from "./NavBar";


function App() {

  const username = "Liza";
  const city = "New York";

  const image = "https://i.imgur.com/mV8PQxj.gif";
  return (
    <div>
      <NavBar />
      <Home username ={username} city={city}/>
      <About image={image}/>
    </div>
  );
}

export default App;

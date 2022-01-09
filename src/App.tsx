import React from "react";
import "./App.css";
import DualPc from "./Components/DualPc";
import Heading from "./Components/Heading";
import { ReactNode } from "./Components/ReactNode";
import Status from "./Components/Status";

function App() {
  const aboutPerson = [
    {
      name: "Shohage",
      age: 19,
      country: "Bangladesh",
      isAdult: true,
      position: "Hard-work specialist",
    },
  ];
  return (
    <div className="App">
      <Heading> Header </Heading>
      <ReactNode>
        <Heading>I am going to add with ReactNode</Heading>
      </ReactNode>
      <DualPc aboutPerson={aboutPerson} />
      <Status status="error" />
    </div>
  );
}

export default App;

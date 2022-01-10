import React from "react";
import "./App.css";
import Array from "./Components/Recape/Array";

function App() {
  const aboutPerson = [
    {
      name: "Shohage",
      age: 19,
      country: "Bangladesh",
      isAdult: true,
      position: "Hard-work specialist",
    },
    {
      name: "Tanvir Hossain",
      age: "19 +",
      country: "Japan",
      isAdult: true,
      position: "Hard-work specialist",
    },
  ];
  return (
    <>
      <div className="App">
        {/* <Heading> Header </Heading>
      <ReactNode>
        <Heading>I am going to add with ReactNode</Heading>
      </ReactNode>
      <DualPc aboutPerson={aboutPerson} key={aboutPerson[0].name} />
      <Status status="error" />
      <ButtonEvents
        handleClick={(event, id) => {
          console.log("button clicked", event, id);
        }}
      ></ButtonEvents>
      <Input
        value=" "
        handleOnchange={(event) => console.log(event.target.value)}
      ></Input>
      <LoggedIn />
      <User /> */}
      </div>

      <div className="App">
        <Array aboutPerson={aboutPerson} />
      </div>
    </>
  );
}

export default App;

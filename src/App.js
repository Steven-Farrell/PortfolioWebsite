/** @format */

import React from "react";
import Navbar from "./components/navbar";
import AboutThisWebsite from "./components/aboutus";
import ToDoText from "./todotext";
import CalculatorText from "./calculatortext";
import FormText from "./formtext";

function App() {
  return (
    <div>
      <Navbar />
      <AboutThisWebsite />
      <ToDoText />
      <CalculatorText />
      <FormText />
    </div>
  );
}

export default App;

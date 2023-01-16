import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Logistics from "./Components/Logistics";
import Form from "./Components/Form";
import { Container } from "@mui/system";

function App() {
  return (
    <div className="appBG">
      <Container className='App'>
        <Logistics />
        <Form />
      </Container>
    </div>
  );
}

export default App;

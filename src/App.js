import React from "react";
import "./App.css";
import Container from 'react-bootstrap/Container';
import Navbar from "./components/Header/Navbar";
import Editor from './components/Editor';


function App() {
  return (
      <Container>
        <Navbar />
        <Editor />
      </Container>
  );
}

export default App;

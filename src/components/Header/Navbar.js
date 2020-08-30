import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Profile from './Profile';
import Notifications from './Notifications';
import Settings from './Settings';


export default function navbar() {
    return (
<Navbar bg="light" expand="lg" >
  <Navbar.Brand href="#home">Medium</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#publish"><Button href="#home" variant="success" size="sm">Publish</Button></Nav.Link>
      <Nav.Link href="#home"></Nav.Link>
      <Settings />
      <Notifications />
      <Profile />
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    )
}




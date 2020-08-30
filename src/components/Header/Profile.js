import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';



export default function Profile() {
    return (
        <Nav.Item>
        <Dropdown>
            <Dropdown.Toggle>
                <img src="logo192.png" className="img"></img>
            </Dropdown.Toggle>
        
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">New story</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Stories</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Stats</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Settings</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
      </Nav.Item>
    )
}

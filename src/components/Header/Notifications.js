import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';



export default function Notifications() {
    return (
        <Nav.Item>
        <Dropdown>
            <Dropdown.Toggle>
                <Nav.Link href="#link"><FontAwesomeIcon icon={faBell} /></Nav.Link>
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

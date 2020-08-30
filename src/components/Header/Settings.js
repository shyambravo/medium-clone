import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';


export default function Settings() {
    return (
        <Nav.Item>
        <Dropdown>
            <Dropdown.Toggle>
            <Nav.Link href="#link"><FontAwesomeIcon icon={faEllipsisH} /></Nav.Link>
            </Dropdown.Toggle>
        
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Add to publication</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Share draft link</Dropdown.Item>
                <Dropdown.Item href="#/action-1">share to Twitter</Dropdown.Item>
                <Dropdown.Item href="#/action-1">More help</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
      </Nav.Item>
    )
}

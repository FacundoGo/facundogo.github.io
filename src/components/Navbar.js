import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
        <Nav.Link><Link to="/">Home</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link><Link to="/Experience">Experience</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link><Link to="/Education">Education</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link><Link to="/Contact">Contact</Link></Nav.Link>
      </Nav.Item>
    </Nav>
    )
  }
}

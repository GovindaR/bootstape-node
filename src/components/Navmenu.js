import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

class Navmenu extends Component {
  render() {
    return (
      <Navbar
        style={{ marginBottom: "0", borderRadius: "0" }}
        bsStyle="inverse"
        collapseOnSelect
      >
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Home
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link Right
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Navmenu;

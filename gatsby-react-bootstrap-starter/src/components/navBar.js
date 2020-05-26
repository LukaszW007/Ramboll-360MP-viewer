import React from "react"
import {Link} from "gatsby"

import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Image} from "react-bootstrap"

import rambollLogo from "../images/Ramboll_Logo_White_RGB_200x42px.png";
import R8_logo from "../images/r8_logo.svg";

const CustomNavbar = ({pageInfo}) => {
    console.log(pageInfo);
    return (
        <>
      <Navbar variant="dark" expand="lg" id="site-navbar">
        {/* <Container> */}
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span">
              <Image src={rambollLogo} />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
              <NavDropdown title="Henrik Ibsens gate 40-42" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="360-viewer">360 view</NavDropdown.Item>
                <NavDropdown.Item href="/map">Map</NavDropdown.Item>
                <NavDropdown.Item href="/description">Description</NavDropdown.Item>
                {/*<NavDropdown.Divider />*/}
              </NavDropdown>
            {/*<Link to="/page-2" className="link-no-style">*/}
            {/*  <Nav.Link as="span" eventKey="page-2">*/}
            {/*    Page 2*/}
            {/*  </Nav.Link>*/}
            {/*</Link>*/}
          </Nav>
          <Nav className="ml-auto">
              <Navbar.Text>
                  Customer: <a href="https://r8property.no/"> R8 Group</a> <Image className="R8-logo" src={R8_logo}/>
              </Navbar.Text>
            {/*<Form inline onSubmit={e => e.preventDefault()}>*/}
              {/*  <Form.Group>*/}
              {/*    <FormControl*/}
              {/*      type="text"*/}
              {/*      placeholder="Fake Search"*/}
              {/*      className="mr-2"*/}
              {/*    />*/}
              {/*  </Form.Group>*/}
              {/*  <Button>Fake Button</Button>*/}
              {/*</Form>*/}
          </Nav>
        </Navbar.Collapse>
          {/* </Container> */}
      </Navbar>
    </>
    )
};

export default CustomNavbar

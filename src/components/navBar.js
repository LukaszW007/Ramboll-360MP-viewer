import React from "react"
import {Link} from "gatsby"

import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Image} from "react-bootstrap"

import rambollLogo from "../images/Ramboll_Logo_White_RGB_200x42px.png";

const CustomNavbar = props => {

    const {projectName, customer, customerLogo, customerPage} = props.items[0];
    const {pageName} = props.pageInfo;
    return (
        <>
      <Navbar variant="dark" expand="md" id="site-navbar">
        {/* <Container> */}
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span">
              <Image src={rambollLogo} />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" activeKey={props.pageInfo && pageName}>
              <NavDropdown title={projectName} id="collapsible-nav-dropdown">
                  <NavDropdown.Item><Link to="360-viewer" activeClassName="active">360 view</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="map" activeClassName="active">map</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="description" activeClassName="active">description</Link></NavDropdown.Item>
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
                  Customer: <a href={customerPage}>{customer}</a> <Image className="R8-logo" src={customerLogo}/>
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

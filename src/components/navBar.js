import React from "react"
import {graphql, Link, useStaticQuery} from "gatsby"

import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Image} from "react-bootstrap"

import rambollLogo from "../images/Ramboll_Logo_White_RGB_200x42px.png";

const CustomNavbar = (props) => {

    const airtableDataQuery = useStaticQuery(graphql`
        query {
            airtable {
                data {
                    id
                }
            }
        }`
    );
    console.log(`airtableDataQuery: ${airtableDataQuery.airtable.data.id}`)

    if (props.items !== undefined || props.items != null) {
        const {projectName, customer, customerLogo, customerPage, projectUrlName} = props.items;

        return (
            <div>
          <Navbar variant="dark" expand="md" id="site-navbar">
            {/* <Container> */}
              <Link to={(`/${projectUrlName}/projectPage`) || "/"} className="link-no-style">
              <Navbar.Brand as="span">
                  <Image src={rambollLogo} />
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto" activeKey={props.pageInfo}>
                  <NavDropdown title={projectName} id="collapsible-nav-dropdown">
                      <NavDropdown.Item><Link to={`/${projectUrlName}/360-viewer`}
                                              activeClassName="active">360 view</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link to={`/${projectUrlName}/map`}
                                              activeClassName="active">map</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link to={`/${projectUrlName}/description`}
                                              activeClassName="active">description</Link></NavDropdown.Item>
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
                      Customer:
                      <a href={customerPage} target='_blank'>{customer}</a>
                      <Image className="R8-logo" src={customerLogo[0].url} />
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
        </div>
        )
    }
    return (
        <>
          <Navbar variant="dark" expand="md" id="site-navbar">
              <Link to="/" className="link-no-style">
              <Navbar.Brand as="span">
                  <Image src={rambollLogo} />
              </Navbar.Brand>
            </Link>
          </Navbar>
        </>
    )
};

export default CustomNavbar;

/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

import Navbar from "./navBar";
import projects from "../data/projects";

const Layout = ({ children, pageInfo }) => {
    const {items} = projects;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={() => (
              <>
                <Container fluid className="px-0 main">
                  <Navbar pageInfo={pageInfo} items={items}/>
                  <Row noGutters>
                    <Col>
                      <Container className="mt-5">
                        <main>{children}</main>
                      </Container>
                    </Col>
                  </Row>
                </Container>
                <Container fluid className="px-0">
                  <Row noGutters>
                    <Col className="footer-col">
                      <footer>
                        <span>
                          © {new Date().getFullYear()}, Created by
                          {` `}
                          <Link href="https://no.ramboll.com">Ramboll AS</Link>
                        </span>
                      </footer>
                    </Col>
                  </Row>
                </Container>
              </>
        )}
      />
)};

export default Layout

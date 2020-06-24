/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import {StaticQuery, graphql, Link, useStaticQuery} from "gatsby"

import {Container, Row, Col} from "react-bootstrap"

import Navbar from "./navBar";
import projects from "../data/projects";

const Layout = ({children, pageInfo, data}) => {

    console.log('layout pageInfo: ' + pageInfo);
    console.log('layout data: ' + data);
    const checkedData = (data === undefined) ? null : data;

    const infoAuthor = useStaticQuery(graphql`
          query {
            site {
              siteMetadata {
                author
              }
            }
        }`
    );

    return (
        <>
                <Container fluid className="px-0 main">
                  <Navbar pageInfo={pageInfo} items={data} />
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
                          © {new Date().getFullYear()}, Created by {infoAuthor.site.siteMetadata.author} for
                            {` `}
                            <Link href="https://no.ramboll.com">Ramboll AS</Link>
                        </span>
                      </footer>
                    </Col>
                  </Row>
                </Container>
              </>
    )
};

export default Layout


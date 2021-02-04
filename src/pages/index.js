import React from "react"
import {Row, Col, Container, ListGroup, Image} from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ListOfContent from "../components/listOfContent";
import projects from "../data/projects";

const IndexPage = () => (
    <Layout pageInfo={{pageName: "index"}}>
        <SEO title="Home" />
        <Container className="text-left">
            <div>Vil du bli vår kunde? Kontakt oss på epost: <strong>geomatikk@ramboll.no</strong></div>
        </Container>
    </Layout>
);

export default IndexPage

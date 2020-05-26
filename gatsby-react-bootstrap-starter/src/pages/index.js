import React from "react"
import { Row, Col, Container, ListGroup, Image } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import buildingFacade from "../images/building_facade.png"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container className="text-center">
        <Image src={buildingFacade}/>
    </Container>
  </Layout>
);

export default IndexPage

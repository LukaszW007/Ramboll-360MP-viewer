import React from "react"
import { Row, Col, Container, ListGroup, Image } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ListOfContent from "../components/listOfContent";
import projects from "../data/projects";

const IndexPage = () => (
    <Layout pageInfo={{pageName: "index"}}>
        <SEO title="Home" />
        <ListOfContent projects={projects}/>
    </Layout>
);
console.log('indexpage zawartosc: '+JSON.stringify(projects));
console.log('indexpage typeof projects: '+ typeof projects);
console.log('indexpage typeof items in projects: '+ typeof projects);
console.log('indexpage typeof items in projects: '+ typeof projects[0]);

export default IndexPage

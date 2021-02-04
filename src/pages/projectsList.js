import React from "react"
import { Row, Col, Container, ListGroup, Image } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ListOfContent from "../components/listOfContent";
import projects from "../data/projects";
import {graphql, useStaticQuery} from "gatsby";



const IndexPage = () => {
    const projectsList = useStaticQuery(graphql`
        query {
            allAirtable {
                edges {
                    node {
                        data {
                            customerLogo {
                                url
                            }
                            projectUrlName
                            id
                            projectName
                        }
                    }
                }
            }
        }`
    );

    return (
        <Layout pageInfo={{pageName: "index"}}>
        <SEO title="Home" />
        <Container className="text-left">
            <ListOfContent projects={projectsList} />
        </Container>
    </Layout>
    )
};

export default IndexPage

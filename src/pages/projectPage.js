import React from 'react'

import Layout from '../components/layout'
import SEO from "../components/seo"

import ListOfContent from "../components/listOfContent";
import {Container, Image} from "react-bootstrap";
// import buildingFacade from "../images/building_facade.png";
import {graphql} from "gatsby";
// import projects from "../data/projects";
import style from "../styles/projectPage.module.scss";

const ProjectPage = ({data: queryData}) => {
    const {data} = queryData.airtable;

    return (
        <Layout pageInfo={{pageName: "management"}} data={data}>
            <SEO title="Manage" keywords={[`gatsby`, `react`, `bootstrap`]} />
            <Container className="text-center">
                    <Image src={data.projectPicture[0].url} className={style.projectImage} />
            </Container>
        </Layout>
    );
}

export default ProjectPage

export const projectsQuery = graphql`
    query ProjectBySlug($projectUrlName: String) {
        # Query the post with the uid passed in from gatsby-node.js
            airtable(data: {projectUrlName: {eq: $projectUrlName}}) {
                data {
                    customer
                    customerLogo {
                        url
                    }
                    customerPage
                    projectDescription
                    projectMatterportLink
                    projectName
                    projectPicture {
                        url
                    }
                    projectPosition
                    projectUrlName
                }
            }
    }
`;

import React from "react"
import {graphql, Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const DescriptionPage = ({data: queryData}) => {
    const {data} = queryData.airtable;

    const projectDescription = data.projectDescription.join(', ');

    return (
      <Layout pageInfo={{ pageName: "description" }} data={data}>
        <SEO title="Project description" />
        <h1>{data.customer}</h1>
        <p>{projectDescription}</p>
      </Layout>
    )
};

export default DescriptionPage

export const projectsQuery = graphql`
    query DescriptionBySlug($projectUrlName: String) {
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


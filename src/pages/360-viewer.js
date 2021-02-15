import React from "react"
import {graphql, Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "../styles/360-viewer.module.scss"
import projects from "../data/projects"
import IframeContainer from "../components/IframeContainer"; //TODO dodac przez props.items link do MP, mapy i opisu

const ViewerPage = ({data: queryData}) => {
    const {data} = queryData.airtable;

    return (
        <Layout pageInfo={{pageName: "360-viewer"}} data={data}>
            <SEO title="360-viewer" />
            <div className={styles.iframeWrapper}>
                <IframeContainer timeout={10000} projects={data.projectMatterportLink} />
                <div className={styles.border} />
            </div>
        </Layout>
    )
};

export default ViewerPage;

export const projectsQuery = graphql`
    query ViewerBySlug($projectUrlName: String) {
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

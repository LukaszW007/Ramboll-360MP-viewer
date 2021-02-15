import React from "react"
import {graphql, Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MapPage = ({data: queryData}) => {
    const {data} = queryData.airtable;

    return (
        <Layout pageInfo={{pageName: "map"}} data={data}>
            <SEO title="map" />
              <div className="embed-container">
                  <iframe
                      width="100%"
                      height="1080"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      title="Basemap"
                      src={data.projectPosition}>
                  </iframe>
              </div>
        </Layout>
    )
};

export default MapPage;

export const projectsQuery = graphql`
    query MapBySlug($projectUrlName: String!) {
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

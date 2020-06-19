import React from "react"
import {Link} from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import projects from "../../data/projects";

const SecondPage = () => {
    const {items} = projects;

    return (
        <Layout pageInfo={{pageName: "map"}} data={items[3]}>
            <SEO title="map" />
            <div className="embed-container">
              <iframe width="100%" height="1080" frameBorder="0" scrolling="no" marginHeight="0"
                      marginWidth="0" title="Esri Mid-Century Basemap"
                      src={items[3].projectPosition}>
              </iframe>
            </div>
        </Layout>
    );
};

export default SecondPage

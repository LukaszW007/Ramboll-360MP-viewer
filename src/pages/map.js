import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
    <Layout pageInfo={{pageName: "map"}}>
    <SEO title="map" />
      <div
          className="embed-container">
      <iframe width="100%" height="1080" frameBorder="0" scrolling="no" marginHeight="0"
              marginWidth="0" title="Esri Mid-Century Basemap"
              src="//www.arcgis.com/apps/Embed/index.html?webmap=34579c96ecda42d09f96bec0ad26ad45&extent=10.7249,59.925,10.7299,59.9151&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=dark&marker=10.7249;59.9151;;;;R8%20Property">
      </iframe>
      </div>
  </Layout>
);

export default SecondPage

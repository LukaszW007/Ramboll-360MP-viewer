import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const DescriptionPage = () => (
  <Layout pageInfo={{ pageName: "description" }}>
    <SEO title="Project description" />
    <h1>R8 Property</h1>
    <p>Address: Henrik Ibsens gate 40-42, Oslo</p>
  </Layout>
);

export default DescriptionPage

import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import projects from "../../data/projects";

const DescriptionPage = () => {
    const {items} = projects;

    return (
        <Layout pageInfo={{pageName: "description"}} data={items[2]}>
            <SEO title="Project description" />
            <h1>{items[2].customer}</h1>
            <p>Address: {items[2].projectDescription}</p>
        </Layout>
    );
};

export default DescriptionPage

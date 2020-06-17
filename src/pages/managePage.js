import React from 'react'

import Layout from '../components/layout'
import SEO from "../components/seo"

import ListOfContent from "../components/listOfContent";
import {Container, Image} from "react-bootstrap";
import buildingFacade from "../images/building_facade.png";

const ManagementPage = () => (

    <Layout pageInfo={{pageName: "management"}}>
        <SEO title="Manage" keywords={[`gatsby`, `react`, `bootstrap`]} />
        <Container className="text-center">
                <Image src={buildingFacade} />
        </Container>
    </Layout>
);

export default ManagementPage

import React from 'react'

import Layout from '../../components/layout'
import SEO from "../../components/seo"

import ListOfContent from "../../components/listOfContent";
import {Container, Image} from "react-bootstrap";
import buildingFacade from "../../images/building_facade.png";
import projects from "../../data/projects";
import style from "../../styles/projectPage.module.scss";

const ProjectPage = () => {
    const {items} = projects;

    return (
        <Layout pageInfo={{pageName: "management"}} data={items[0]}>
            <SEO title="Manage" keywords={[`gatsby`, `react`, `bootstrap`]} />
            <Container className="text-center">
                    <Image src={projects.items[0].projectPicture} className={style.projectImage} />
            </Container>
        </Layout>
    );
};

export default ProjectPage

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ListGroup, Image } from "react-bootstrap"
import { Router } from "@reach/router"

import style from "../styles/listOfContent.module.scss"

const ListOfContent = props => {

    console.log(`props: ${JSON.stringify(props)}`)
    const  edges  = props.projects.allAirtable.edges;

    console.log('ListOfContent props: '+ JSON.stringify(edges[0].node.data.customerLogo[0].url));
    console.log('ListOfContent projects variable: '+ edges);

    const listOfProjects = edges.map( Item => {
        const {customerLogo, projectUrlName, projectName} = Item.node.data;
        const url = customerLogo!==null ? customerLogo[0].url : '';
            return (<ListGroup.Item key={Item.node.data.id}>
                <Image src={url} className={style.CustomerLogo} />
                <Link to={`/${projectUrlName}/projectPage`}
                      className={style.Link}>{projectName}</Link>
            </ListGroup.Item>)
        }
    );
    return (
        <ListGroup>
            {listOfProjects}
        </ListGroup>
    )
};

export default ListOfContent
//className={style.listItemHOver}

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ListGroup, Image } from "react-bootstrap"

import style from "../styles/listOfContent.module.scss"

const ListOfContent = props => {
    const { items } = props.projects;

    console.log('ListOfContent props: '+ JSON.stringify(props));
    console.log('ListOfContent projects variable: '+ items);

    const listOfProjects = items.map( Item =>
        <ListGroup.Item key={Item.id} >
            <Image src={Item.customerLogo} className={style.CustomerLogo}/>
            <Link to={`/${Item.projectUrlName}`} className={style.Link}>{Item.projectName}</Link>
        </ListGroup.Item>
    );
    return (
        <ListGroup>
            {listOfProjects}
        </ListGroup>
    )
};

export default ListOfContent
//className={style.listItemHOver}

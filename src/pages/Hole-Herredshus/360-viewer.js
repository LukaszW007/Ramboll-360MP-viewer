import React from "react"
import {Link} from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import styles from "../../styles/360-viewer.module.scss"
import IframeContainer from "../../components/IframeContainer";
import projects from "../../data/projects"; //TODO dodac przez props.items link do MP, mapy i opisu

const ViewerPage = () => {
    const {items} = projects;

    return (//TODO poprzez Layout stworzyc nowa strone dla glownego widoku a z niego podzial na poszczegolne podstrony projektow
        <Layout pageInfo={{pageName: "360-viewer"}} data={items[1]}>
            <SEO title="360-viewer" />
            <div className={styles.iframeWrapper}>
                <IframeContainer timeout={10000} projects={items[1]} />
                <div className={styles.border} />
            </div>
        </Layout>
    );
}

export default ViewerPage

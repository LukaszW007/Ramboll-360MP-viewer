 import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "../styles/360-viewer.module.scss"
import IframeContainer from "./IframeContainer"; //TODO dodac przez props.items link do MP, mapy i opisu

const ViewerPage = () => (//TODO poprzez Layout stworzyc nowa strone dla glownego widoku a z niego podzial na poszczegolne podstrony projektow
  <Layout pageInfo={{ pageName: "360-viewer" }}>
    <SEO title="360-viewer" />
    <div className={styles.iframeWrapper}>
        <IframeContainer timeout={10000}/>
        <div className={styles.border}/>
    </div>
  </Layout>
);

export default ViewerPage

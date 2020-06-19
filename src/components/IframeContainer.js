import React from "react";

import {Spinner} from "react-bootstrap";

import styles from "../styles/iframeContainer.module.scss"

const IframeContainer =(props) => {

    console.log('props iframcontainer: ', JSON.stringify(props))
        return (
            <div className={styles.iframeContainer}>
                <iframe width='100%' height='1080'
                            src={props.projects.projectMatterportLink}
                            frameBorder='0'
                            allowFullScreen allow='vr'>
                </iframe>
                <div className={styles.spinnerWrapper}>
                    <Spinner className={styles.spinner} animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            </div>
        );
}

export default IframeContainer;



import React from "react";

import {Spinner} from "react-bootstrap";

import styles from "../styles/iframeContainer.module.scss"

const IframeContainer =() => {
        return (
            <div className={styles.iframeContainer}>
                <iframe width='100%' height='1080'
                            src='https://my.matterport.com/show/?m=YeX1Zx8Ufju&brand=0&play=1&qs=1&ts=5&title=0'
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



import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404 NOT FOUND</h1>
    <p>We are very sorry to show you this error. Please check correctness of the URL address. If you you occur this error in next 10 minutes please contact us at <strong>geomatikk@ramboll.no</strong></p>
  </Layout>
)

export default NotFoundPage

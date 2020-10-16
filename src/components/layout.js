import React from "react"
import Helmet from "react-helmet"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Real Estate Gatsby</title>
        <meta
          name="description"
          content="Sitio web de bienes raices en Gatsby"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU="
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Roboto:400,700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <h1>Gatsby website</h1>
      {children}
    </>
  )
}

export default Layout

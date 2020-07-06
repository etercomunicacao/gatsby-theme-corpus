import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

// Components
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, ...rest }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className="border-t-8 border-corpus-blue-500">
      
      <div className="relative overflow-x-hidden">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  user: PropTypes.object,
}

Layout.defaultProps = {
  user: null
}

export default Layout

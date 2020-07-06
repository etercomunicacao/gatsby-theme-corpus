import React from "react"
import { Link } from "gatsby"

const LinkResolver = ({ input, children }) => {
  //switch (input.sys.contentType.sys.contentful_id) {
    //case "page" : return <Link to={`/${input.fields.slug}`}>{children}</Link> 
    //case "contributor" : return <Link to={`/contributor/${input.fields.slug}`}>{children}</Link>
    //case "resource" : return <Link to={`/resource/${input.fields.slug}`}>{children}</Link>
    //case "podcast" : return <Link to={`/podcast/${input.fields.slug}`}>{children}</Link> 
    //default : return <Link to="#">{children}</Link> }
    return <Link to="#">{children}</Link>
}
    
export default LinkResolver
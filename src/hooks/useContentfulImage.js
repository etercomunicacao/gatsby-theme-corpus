import { graphql, useStaticQuery } from "gatsby"

export default assetUrl => {

  const { allContentfulAsset } = useStaticQuery(graphql` 
    query CONTENTFUL_IMAGE_QUERY {
      allContentfulAsset {
        nodes {
          file {url}
          fluid(maxWidth: 1200, quality: 85, toFormat: WEBP) {
            srcSet
          }
        }
      }
    }
    `
  )

  return  allContentfulAsset.nodes.find(n => n.file.url === assetUrl).fluid 
}

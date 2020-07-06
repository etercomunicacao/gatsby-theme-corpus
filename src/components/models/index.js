import React from "react"
import Img from "gatsby-image"

export const Image = (fluid, alt, caption, imageClassName) => (
  <Img fluid={fluid} alt={alt} caption={caption} imageClassName={imageClassName} />
)

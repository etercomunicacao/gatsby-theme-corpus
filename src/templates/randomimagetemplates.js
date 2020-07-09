import React from "react"
import Image from "gatsby-image"

const randomGenerator = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
export default props => {
  const { pageContext } = props
  const { images } = pageContext

  const randomPosition = randomGenerator(0, images.length - 1)
  
  const randomImage = images[randomPosition].childImageSharp
  return (
    <div style={{ margin: "0.85rem" }}>
      <Image fluid={randomImage.fluid} />
    </div>
  )
}


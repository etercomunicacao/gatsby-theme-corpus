import PropTypes from "prop-types";
import React from "react"
import Img from "gatsby-image"

export default function SectionWithBackground({ fluidBkg, absolute, slug, sectionId, bkgClassName, contentClassName, imgId, children, className }) {
  return (
  <section id={!sectionId ? slug : sectionId} className={`${ !className ? "w-full min-h-screen overflow-y-hidden" : className } ${ !absolute && "relative" }`}>
    <div className={ !bkgClassName ? "absolute z-0 w-3/4 h-4/5 top-0 lg:block hidden" : (`absolute lg:block hidden ${bkgClassName}`) }>
      <Img 
        fluid={fluidBkg}
        id={imgId}  
        className="w-full h-full"
        draggable="false"
      />
    </div>
    <div className="absolute inset-0">
      <div className={`container mx-auto ${contentClassName}`}>{children}</div>
    </div>
  </section>
  )
}
SectionWithBackground.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  fluidBkg: PropTypes.array.isRequired,
  imgId: PropTypes.string,
  slug: PropTypes.string,
  sectionId: PropTypes.string,
  bkgClassName: PropTypes.string,
  absolute: PropTypes.bool
}

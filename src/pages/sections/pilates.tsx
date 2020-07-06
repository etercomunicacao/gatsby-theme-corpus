import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"
// Components
import SectionWithBackground from "../../components/backgroundModule"
import RichText from "../../components/richTextRenderer"
// Utilities
// Styling
import "./styles.scss"


export default function Pilates(props) {

  const data = useStaticQuery(graphql`
    query PilatesQuery {
      Pilates:contentfulPagina(
        id: {
          eq: "2756318c-77f6-5683-b1fc-bd2569cb5ab5"
        }
      ) {
        slug
        titulo
        content{
          json
        }
        imagemDestaque {
          fluid(quality: 10) {
            srcSet
          }
        }
      }
    }
  `)

  const { Pilates } = data
  const { content, titulo, id, slug } = Pilates
  const { fluid } = Pilates.imagemDestaque
 
 

  return (
    <section id="pilates" className="relative w-full h-auto bg-corpus-baby-blue-200">
      <div id="spacer" className="bg-corpus-baby-blue-200 absolute z-0 inset-x-0 top-0" />
      <div className="pilates_image absolute top-0 -right-2.5 w-2/3 z-30 -mt-12 ">
        <Img fluid={fluid} draggable="false" className="" />
      </div>
      <div className="container mx-auto py-64">
        <div className="chamada text-left lg:w-1/3 lg:mr-auto lg:mb-10">
          <h2 className="font-display font-base leading-tighter text-5xl text-corpus-blue-600 -ml-1 mb-3">{titulo}</h2>
          <RichText input={content} />
        </div>
      </div>
        
    
    </section>
  )
}



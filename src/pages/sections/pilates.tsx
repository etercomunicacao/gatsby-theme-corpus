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
    <section id="pilates" className="flex flex-col lg:flex-none relative w-full h-auto bg-corpus-baby-blue-200 lg:-mt-32">
      <div id="spacer" className="bg-white order-1 lg:absolute z-0 inset-x-0 top-0 w-screen h-24 lg:h-64" />
      <div className="pilates_image lg:absolute top-0 -right-2.5 w-4/5 mx-auto lg:mx-0 lg:w-2/3 z-30 lg:-mt-12 order-3 ">
        <Img fluid={fluid} draggable="false" className="" />
      </div>
      <div className="container mx-auto pt-10 lg:py-64 order-2">
        <div className="chamada lg:text-left lg:w-1/3 lg:mr-auto lg:mb-10">
          <h2 className="font-display font-base leading-tighter text-5xl text-corpus-blue-600 -ml-1 mb-3">{titulo}</h2>
          <RichText input={content} className="texto" />
        </div>
      </div>
        
    
    </section>
  )
}



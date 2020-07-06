import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"
// Components
import SectionWithBackground from "../../components/backgroundModule"
import RichText from "../../components/richTextRenderer"
// Utilities
// Styling
import "./styles.scss"


export default function Fisioterapia(props) {

  const data = useStaticQuery(graphql`
    query FisioterapiaQuery {
      contentfulPagina(
        id: {
          eq: "78e0d5c3-f28c-5e9e-a983-d58c5f17591d"
        }
      ) {
        titulo
        content {
          json
        }
        slug
        imagemDestaque {
          fluid(quality: 10) {
            srcSet
          }
        }
      }
      allContentfulPagina(
        filter: {
          id: {
            in: [
              "02112296-b665-52e5-ad6e-e86434b3910f",
              "165f9585-3465-5f83-8dcf-fac825ddf931", 
              "f7cef2bc-f614-503c-87db-420e22c54701"     
            ]
          }
        }
      ) {
        edges {
          node {
            titulo
            slug
            excerpt {
              json
            }
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { contentfulPagina, allContentfulPagina } = data
  const { edges } = allContentfulPagina
  const { content, titulo } = contentfulPagina

  
  

  return (
      
    <SectionWithBackground 
      fluidBkg={contentfulPagina.imagemDestaque.fluid} 
      contentClassName="flex flex-col md:flex-row lg:flex-wrap px-10 md:px-0 md:pt-10 lg:pt-32" 
      bkgClassName="absolute z-0 md:w-120 md:h-84 bottom-0 left-0 lg:w-3/4 lg:h-screen lg:inset-y-0 lg:left-0 lg:-ml-1/2 md:block hidden"
      sectionId="fisioterapia"
      className="lg:pt-10 w-full min-h-screen relative overflow-y-hidden"
    > 
      <div className="chamada text-left lg:text-right lg:w-2/3 lg:ml-auto lg:mb-10">
        <h2 className="font-display font-semibold text-5xl">{titulo}</h2>
        <RichText input={content} />
      </div>
      <div id="cards" className="flex lg:flex-row flex-col px-12 md:px-0 lg:ml-auto pl-0 md:pl-12 md:-mt-20 lg:pl-24 lg:pt-10" >
        {data.allContentfulPagina.edges.map(({ node }, i) => {
          const { titulo, excerpt, slug } = node
          return (
            
            <Link to={`/${slug}`} id={titulo} className="card shadow shadow-xl relative w-full lg:w-1/3 h-auto bg-white my-5 md:mt-8 lg:mx-4 py-10 px-6 flex flex-col content-around border-1 border-corpus-grayish-400 rounded-lg" key={i}>
              <RichText input={excerpt} />
              <span className="text-right absolute right-0 bottom-0 mb-3 mr-3 uppercase font-display text-corpus-orange-500">Leia mais</span>
            </Link>
            
          )
          
        })}

      </div>
    </SectionWithBackground>
  )
}



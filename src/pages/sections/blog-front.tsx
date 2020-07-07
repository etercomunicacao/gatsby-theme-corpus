import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// Utilities
import RichText from "../../components/richTextRenderer"

// Styling
import "./styles.scss"


export default function BlogFrontPage(props) {

  const data = useStaticQuery(graphql`
    query BlogFrontQuery {
      Posts:allContentfulBlogPost(
        limit: 3, 
        sort: {
          order: DESC, 
          fields: dataHora
        }
      ) {
        group(
          field: categorias___nome, 
          limit: 1
        ) {
          fieldValue
        }
        edges {
          node {
            id
            slug
            titulo
            excerpt {
              json
            }
            imagemDestaque {
              arquivo {
                fluid {
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  `)

  const { Posts } = data

  return (
    <section id="blog" className="blog blog__frontpage relative w-screen h-auto py-64 bg-corpus-grayish-blue-800 ">
      <div id="spacer" className="bg-corpus-baby-blue-200 order-1 lg:absolute z-0 inset-x-0 top-0 w-screen h-24 lg:h-64" />
      <div className="container mx-auto">
      <h1 className="font-display text-4xl text-corpus-beige-300 font-thin ml-6 w-full">Blog da Corpus</h1>
      <div className="flex flex-row mt-10 w-full">
      {Posts.edges.map(({ node }, i) => {
      const {
      id,
      slug,
      titulo,
      excerpt,
      imagemDestaque
      } = node
      const { fluid } = imagemDestaque.arquivo
      
      return (
        <Link to={`/blog/${slug}`} className="w-1/3 mx-6 h-auto ">
          <div className={`bg-white class_${id} w-full h-full relative`} key={i} id={slug}>
            <div className="w-full h-64 object-cover">
              <Img fluid={fluid} className="w-full h-full" />
            </div>
            <div className="w-full h-full flex flex-wrap content-between px-5 py-3">
              <h2 className="font-display text-corpus-blue-500 text-xl">{titulo}</h2>
              <RichText input={excerpt} />
              <span className="ml-auto mt-auto uppercase font-display font-semibold text-corpus-grayish-blue-400 w-1/3 ">Leia Mais</span>
            </div>
          </div>
        </Link>
      )
      })}
      
      </div></div>
    </section>
  )

}
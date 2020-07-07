import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// Utilities
import RichText from "../../components/richTextRenderer"
import kebabCase from "lodash/kebabCase"
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
            dataHora(formatString: "MMMM, YYYY", locale: "pt-br")
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
        <div className="mt-10 w-full">
          <ol className="articles grid grid-cols-3 gap-20 justify-center grid-rows-1">
            {Posts.edges.map(({ node }, i) => {

              const {
                id,
                slug,
                titulo,
                dataHora,
                imagemDestaque
              } = node
              
              const { fluid } = imagemDestaque.arquivo

              return (
                <li className={`articles__article id__${id} cursor-pointer block relative h-auto`} key={i} id={slug} >
                  <Link className="articles__link" to={`/blog/${slug}/`}>
                    <Img fluid={fluid} className="w-full h-full" />
                    <div className="articles__content articles__content--lhs bg-white">
                      <h2 className="articles__title">{titulo}</h2>
                      <div className="articles__footer">
                        {Posts.group.map(categoria => {
                          return <p><Link to={`/categorias/${kebabCase(categoria.fieldValue)}/`}>{categoria.nome}</Link></p>
                        })}
                        <span>{dataHora}</span>
                      </div>
                    </div>
                    <div className="articles__content articles__content--rhs">
                      <h2 className="articles__title">{titulo}</h2>
                      <div className="articles__footer">
                        {Posts.group.map(categoria => {
                          return <p><Link to={`/categorias/${kebabCase(categoria.fieldValue)}/`}>{categoria.nome}</Link></p>
                        })}
                        <span>{dataHora}</span>
                      </div>
                    </div>
                  </Link>
                </li>
              )
            })}
          
          </ol>
        
        </div>
      </div>
    </section>
  )

}
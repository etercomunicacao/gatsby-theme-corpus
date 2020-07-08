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
        edges {
          node {
            slug
            titulo
            dataHora(formatString: "MMMM, YYYY", locale: "pt-br")
            categorias {
              nome
              slug
            }
            autor {
              nome
              slug
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
        <h1 className="font-display font-medium text-4xl text-corpus-beige-300 font-thin ml-6 w-full">Blog da Corpus</h1>
        <div className="mt-10 w-full">
          <div className="cards">
            {Posts.edges.map(({ node }, i) => {

              const {
                slug,
                titulo,
                dataHora,
                categorias,
                autor,
                imagemDestaque
              } = node
              
              const { fluid } = imagemDestaque.arquivo

              return (
                <div className="card">
                  <h2 className="card__titulo">{titulo}</h2>
                  <div className="img__holder">
                    <Link className="img__link" to={`/blog/${slug}`}>
                      <Img fluid={fluid} className="w-full h-full" />
                    </Link>
                  </div>
                  <div className="card__info">
                    <div className="card__sobre">
                      <ul className="card__categorias">
                          {categorias.map(categoria => {
                            return <li><Link to={`/categorias/${categoria.slug}/`}>{categoria.nome}</Link></li>
                          })}
                      </ul>
                      <div className="card__data">{dataHora}</div>
                    </div>
                    
                    <div className="card__autor">Por: <Link to={`/autores/${autor.slug}`}>{autor.nome}</Link></div>

                    </div>
                    <div className="card__hovered"></div>
                  </div>
                
                        
                        
                        
              )
            })}
          
          </div>
        
        </div>
      </div>
    </section>
  )

}
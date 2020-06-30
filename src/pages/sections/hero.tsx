import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import styled from 'styled-components'
import BackgroundImage from "gatsby-background-image"
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import Lupa from "../../images/svg/icon/lupa"

export default function Hero(props) {

  const data = useStaticQuery(graphql`
    query HeroQuery {
      contentfulPagina(
        id: {
          eq: "17b61d2f-12f7-5a44-b5f0-d21702b646ed"
        }
      ) {
      id
      imagemDestaque {
        fluid {
          srcSet
        }
      }
      destaqueResponsivo {
          fluid {
            srcSet
          }
        }
      slug
      titulo
      conteudo {
        conteudo
      }
    }
    contentfulImagensIdv(id: { eq: "141b3598-e36d-5380-8c12-4adc60a41b50" } ) {
      arquivo {
        fluid(maxWidth: 500) {
          srcSetWebp
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

  const HeroSection = ({ className, data, children }) => {
    const breakpoints = useBreakpoint();

    return (
      <BackgroundImage
        Tag="section"
        className={`${className} relative w-full min-h-screen bg-cover bg-bottom-center text-red-500 bg-opacity-0 lg:bg-opacity-100 lg:text-gray-800`}
        fluid={data.contentfulPagina.imagemDestaque.fluid}
        id="hero"
      >
        {children}
      </BackgroundImage>  
    )
  }

  const StyledHeroSection = styled(HeroSection)`  
  
  `;
  
  const { site, contentfulImagensIdv} = data

  return (
    <div className={props.className}>
      <StyledHeroSection data={data}> 
        <nav className="container mx-auto flex hidden lg:block sm:flex-row flex-wrap justify-around sm:justify-between items-center px-1 sm:px-20">
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
          </Link>

          <div class="block lg:hidden ml-auto">
            <button class="flex items-center px-3 py-2 border rounded text-corpus-blue-500 border-teal-light hover:text-white hover:border-white">
              <svg class="h-3 w-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
              </svg>
            </button>
          </div>
          
          <ul className="flex flex-col lg:flex-row lg:inline-flex mx-auto font-display font-light uppercase">
            <li><Link to="" className="mr-6 text-corpus-blue-600 hover:text-corpus-orange-600">Início</Link></li>
            <li className="dropdown"><Link to="" className="relative mr-6 text-corpus-blue-600 hover:text-corpus-orange-600"><span></span> Fisioterapia</Link>
              <ul className="dropdown-menu hidden absolute pt-0">
                <li className=""><Link to="" className="text-corpus-blue-600 hover:text-corpus-orange-600">Obstétrica</Link></li>
                <li className=""><Link to="" className="text-corpus-blue-600 hover:text-corpus-orange-600">Pélvica</Link></li>
                <li className=""><Link to="" className="text-corpus-blue-600 hover:text-corpus-orange-600">Ortopédica</Link></li>
              </ul>
            </li>
            <li><Link to="" className="mr-6 text-corpus-blue-600 hover:text-corpus-orange-600">Pilates</Link></li>
            <li><Link to="" className="mr-6 text-corpus-blue-600 hover:text-corpus-orange-600">Sobre</Link></li>
            <li><Link to="" className="mr-6 text-corpus-blue-600 hover:text-corpus-orange-600">Blog</Link></li>
            <li><Link to="" className="mr-6 text-corpus-blue-600 hover:text-corpus-orange-600">Contato</Link></li>
          </ul>
        
          
          <div class="pt-2 relative text-gray-600">
            <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg font-body text-sm"
              type="search" name="search" placeholder="Buscar" />
            <button type="submit" class="absolute right-0 z-20 top-0 mt-3 -ml-6 text-corpus-blue-400 hover:text-corpus-orange-400">
              <Lupa className="w-4 h-4" />
            </button>
          </div>
        </nav>

        <div className="container flex flex-wrap mx-auto">
          <div className="w-1/2 mr-auto">
            <p>
              Sint consectetur amet quis sint ea eu. Irure minim quis sit eu. Id ipsum aliqua labore qui sint ullamco nulla qui incididunt tempor qui. Commodo mollit enim id aute eu veniam eu Lorem adipisicing. Sint in velit pariatur et pariatur culpa eu et pariatur quis ullamco anim ea dolor. Excepteur sint officia qui minim esse commodo est officia est nulla anim minim non exercitation.
            </p>

            <p>
              Cupidatat reprehenderit anim ea minim voluptate eiusmod reprehenderit nisi elit. Commodo cillum laboris duis enim irure ullamco. Nulla non laboris non incididunt non consequat anim pariatur voluptate ad anim occaecat sit.
            </p>

            <p>
              Minim ullamco laboris velit ullamco deserunt proident consequat consequat est anim pariatur. Lorem elit culpa officia amet ut aliqua Lorem adipisicing aliqua pariatur commodo. Aliquip est pariatur ut sunt officia nulla qui aliqua magna. Laboris anim laboris qui irure adipisicing aliqua enim ex reprehenderit qui sint.
            </p>

            <p>
              Labore voluptate quis elit elit Lorem ad sit proident velit sint voluptate in nostrud. Eiusmod Lorem exercitation velit est incididunt tempor irure amet excepteur labore. Ullamco laboris commodo irure fugiat eu cupidatat non adipisicing magna amet exercitation.
            </p>

          </div>
        </div>
      </StyledHeroSection>
    </div>
  )
}



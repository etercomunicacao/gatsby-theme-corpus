import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"
// Components
import SectionWithBackground from "../../components/backgroundModule"
import RichText from "../../components/richTextRenderer"
// Utilities
import ReactTypingEffect from "react-typing-effect"
// StylingR
import "./styles.scss"
import Lupa from "../../images/svg/icon/lupa"

export default function Hero(props) {

  const data = useStaticQuery(graphql`
    query HeroQuery {
      Hero:contentfulPagina(
        id: {
          eq: "17b61d2f-12f7-5a44-b5f0-d21702b646ed"
        }
      ) {
      imagemDestaque {
        fluid(quality: 10) {
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
      content {
        json
      }
    }
    contentfulHeroDigitacao {
      lista
    }
    contentfulImagensIdv(
      id: { 
        eq: "141b3598-e36d-5380-8c12-4adc60a41b50" 
      } 
    ) {
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

  const { contentfulImagensIdv, Hero, contentfulHeroDigitacao} = data
  const { content } = Hero
  const { lista } = contentfulHeroDigitacao

  return (
      
    <SectionWithBackground 
      fluidBkg={Hero.imagemDestaque.fluid} 
      contentClassName="flex lg:flex-wrap px-10 md:px-0 h-screen lg:h-auto" 
      bkgClassName="absolute z-0 w-full h-full top-0 lg:block hidden"
      >

      <div className="hidden lg:block w-full">
        <nav id="heroNav" className="flex items-center py-6 w-full">
          <Link
          to="/"
          className=" mr-auto"
          >
            <Img fluid={contentfulImagensIdv.arquivo.fluid} className="w-32 h-24" />
          </Link>
          
          
          <ul id="navbar" className="navbar flex flex-row font-display font-light uppercase mx-auto">
            <li><Link to="" className="mx-3 text-corpus-blue-600 hover:text-corpus-orange-600">Início</Link></li>
            <li className="dropdown"><Link to="/#fisioterapia" className="relative mx-3 text-corpus-blue-600 hover:text-corpus-orange-600"><span></span> Fisioterapia</Link>
              <ul className="dropdown-menu absolute hidden bg-white border-1 border-corpus-orange-100 px-3 py-2 shadow">
                <li className="py-1"><Link to="" className="text-corpus-blue-600 hover:text-corpus-orange-600">Obstétrica</Link></li>
                <li className="py-1"><Link to="" className="text-corpus-blue-600 hover:text-corpus-orange-600">Pélvica</Link></li>
                <li className="py-1"><Link to="" className="text-corpus-blue-600 hover:text-corpus-orange-600">Ortopédica</Link></li>
              </ul>
            </li>
            <li><Link to="" className="mx-3 text-corpus-blue-600 hover:text-corpus-orange-600">Pilates</Link></li>
            <li><Link to="" className="mx-3 text-corpus-blue-600 hover:text-corpus-orange-600">Sobre</Link></li>
            <li><Link to="" className="mx-3 text-corpus-blue-600 hover:text-corpus-orange-600">Blog</Link></li>
            <li><Link to="" className="mx-3 text-corpus-blue-600 hover:text-corpus-orange-600">Contato</Link></li>
          </ul>
          
          
          
          
          <div class="relative text-gray-600 ml-auto ">
            <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg font-body text-sm focus:shadow-corpus-orange-500"
            type="search" name="search" placeholder="Buscar" />
            <button type="submit" class="absolute right-0 z-20 top-0 mt-3 mr-3 text-corpus-blue-400 hover:text-corpus-orange-400">
              <Lupa className="w-4 h-4" />
            </button>
          </div>
        </nav>
      </div>
        
      <div className="w-full h-auto self-center lg:self-auto flex flex-col items-center lg:h-full lg:py-40">
        <div className="lg:hidden w-full ">
          <Img fluid={Hero.destaqueResponsivo.fluid} className="w-full pb-2/3" />
        </div>
        <div className="lg:w-2/5 lg:mr-auto">
          <p className="md:w-full text-justify lg:text-left lg:w-3/4 flex-grow-0 flex-shrink-0 -ml-1 font-display tracking-tighter trac leading-tighter font-light text-4xl md:text-5xl lg:text-6xl text-corpus-blue-500 ">Por uma vida mais 
            <ReactTypingEffect className="font-bold ml-2 lg:ml-4" text={lista} speed={300} eraseDelay={1300} typingDelay={500} />
          </p>
          <div id="RichText" className="w-full flex-1 font-body text-lg mt-4">
            <RichText input={content} />  
          </div>
        </div>
      </div>
      
      <a id="anchorBtn" className="animate__fadeInDown" href="/#fisioterapia">
        <div className="w-20 h-16 hidden lg:block absolute bottom-0 left-1/2 -ml-10 mb-40">
          <span className="uppercase text-lg text-center font-display tracking-widest font-thin text-corpus-blue-600 mx-2">Rolar</span>
          <div id="arrow" className="-mt-3 w-6 mx-auto">
          <div className="w-6 h-6 border-b-1 border-l-1 border-corpus-blue-500 transform -rotate-45"></div>
          </div>
        </div>
      </a>
      
      
        
        
    </SectionWithBackground>
  )
}



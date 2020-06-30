import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image"
import { navigate } from "@reach/router";

import Lupa from "../../images/svg/icon/lupa"



const userbase = typeof window !== 'undefined' ? require('userbase-js').default : null;

const Navbar = ({ user, siteTitle }) => {
  return (
    <nav className="container mx-auto flex sm:flex-row flex-wrap justify-around sm:justify-between items-center px-1 sm:px-20">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <StaticQuery 
          query={graphql`
            query siteLogo {
              contentfulImagensIdv(id: { eq: "141b3598-e36d-5380-8c12-4adc60a41b50" } ) {
                arquivo {
                  fluid(maxWidth: 500) {
                    srcSetWebp
                  }
                }
              }
            }
          `}
          render={data => (
            <Img fluid={data.contentfulImagensIdv.arquivo.fluid} className="w-32 h-24 mr-auto" alt={siteTitle} />
          )}
          />
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
  )
}


const Header = ({ 
  siteTitle 
}) => {
  
  return (
    <header className="w-full sm:h-20 z-50 bg-white pt-3" id="navbar">
      <Navbar siteTitle={siteTitle} />
    </header>
  )
}

const signOut = () => {
  userbase.signOut()
  .then(() => {
    navigate('/app/login')
  })
  .catch((e) => console.error(e))
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  user: PropTypes.object,
}

Header.defaultProps = {
  siteTitle: ``,
  user: null
}

export default Header
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import RichText from "../richTextRenderer";




export function Footer(props) {

  const data = useStaticQuery(graphql`
    query FooterQuery {
      Index:contentfulPagina(
        id: {
          eq: "9f6513e5-9675-5ed5-815c-2829b592429c"
        }
      ) {
        slug
        titulo
        content {
          json
        }
      }
      AsaSulMap:staticMap(nickname: {eq: "Asa Sul"}) {
        mapUrl
        childFile {
          childImageSharp {
            fluid {
              srcSet
            }
          }
        }
      }
      AsaSulAddress:contentfulUnidades(nome: {eq: "Asa Sul"}) {
        nome
        local {
          local
        }
        endereco1 {
          endereco1
        }
        endereco2 {
          endereco2
        }
        cep
      }
      LagoNorteMap:staticMap(nickname: {eq: "Lago Norte"}) {
        mapUrl
        childFile {
          childImageSharp {
            fluid {
              srcSet
            }
          }
        }
      }
      LagoNorteAddress:contentfulUnidades(nome: {eq: "Lago Norte"}) {
        nome
        local {
          local
        }
        endereco1 {
          endereco1
        }
        endereco2 {
          endereco2
        }
        cep
      }
    }
    
  `)

  // make a function that grabs what page the footer is in and insert an different code for each -- is that really necessary?!
  const IndexFooter = ({ data }) => {

    const { 
      Index, 
      AsaSulMap, 
      AsaSulAddress, 
      LagoNorteMap, 
      LagoNorteAddress 
    } = data
    const { slug, titulo, content } = Index

    return (
      <>
        <div className="w-1/2 px-8" id={slug}>
          <h1 className="titulo">{titulo}</h1>
          <RichText input={content} />
          <h4 className="font-display text-corpus-grayish-blue-800 text-xl mt-6">Conheça nossas unidades</h4>
          
          <div className="unidade unidade__asaSul w-full">
          <h3 className="text-2xl font-display font-medium text-corpus-blue-600 py-2">Unidade {AsaSulAddress.nome}</h3>
            <div className="mapa mapa__asaSul relative w-full h-84 flex">
              <div className="placa absolute top-1/2 -mt-40 left-1/2 -ml-32 pl-2 flex-shrink flex flex-col z-40 w-64 h-32">
                <a href={AsaSulMap.mapUrl} className="mapa__link" target="_blank">
                  <div className="contentWrapper px-3 py-2 bg-gray-100 border-1 border-gray-200 shadow-lg">
                    <h3 className="text-base font-display">Unidade {AsaSulAddress.nome}</h3>
                    <p className="">
                      <span className="font-medium text-corpus-grayish-blue-800">{AsaSulAddress.local.local},</span> 
                      {AsaSulAddress.endereco1.endereco1}</p>
                    <p className="">{AsaSulAddress.endereco2.endereco2}</p>
                    <p className="">{AsaSulAddress.cep}</p>
                  </div>
                  <div className="arrow w-4 h-4 -mt-2 transform rotate-45 bg-gray-100 mx-auto shadow-lg"></div>
                </a>

              </div>
              <div className="dot bg-corpus-baby-blue-600 border-1 z-30 border-corpus-blue-400 hover:bg-corpus-orange-500 hover:border-corpus-orange-600 absolute w-2 h-2 transform -rotate-45 top-1/2 left-1/2 rounded-full">
                
              </div>
              <Img fluid={AsaSulMap.childFile.childImageSharp.fluid} className="w-full h-full absolute z-10 inset-0 object-cover" />
            </div>
            <div className="unidade__endereco w-full py-4">
              <p><span className="tag">Endereço:</span> <span className="referencia">{AsaSulAddress.local.local}, </span>{AsaSulAddress.endereco1.endereco1}</p>
              <p>{AsaSulAddress.endereco2.endereco2}</p>
              <p><span className="tag">CEP: </span>{AsaSulAddress.cep}</p>
            </div>
          </div> 
          
          <div className="unidade unidade__lagoNorte w-full">
          <h3 className="text-2xl font-display font-medium text-corpus-blue-600 py-2">Unidade {LagoNorteAddress.nome}</h3>
            <div className="mapa mapa__asaSul relative w-full h-84 flex">
              <div className="placa absolute top-1/2 -mt-40 left-1/2 -ml-32 pl-2 flex-shrink flex flex-col z-40 w-64 h-32">
                <a href={LagoNorteMap.mapUrl} className="mapa__link" target="_blank">
                  <div className="contentWrapper px-3 py-2 bg-gray-100 border-1 border-gray-200 shadow-lg">
                    <h3 className="text-base font-display">Unidade {LagoNorteAddress.nome}</h3>
                    <p className="">
                      <span className="font-medium text-corpus-grayish-blue-800">{LagoNorteAddress.local.local},</span> 
                      {LagoNorteAddress.endereco1.endereco1}</p>
                    <p className="">{LagoNorteAddress.endereco2.endereco2}</p>
                    <p className="">{LagoNorteAddress.cep}</p>
                  </div>
                  <div className="arrow w-4 h-4 -mt-2 transform rotate-45 bg-gray-100 mx-auto shadow-lg"></div>
                </a>

              </div>
              <div className="dot bg-corpus-baby-blue-600 border-1 z-30 border-corpus-blue-400 hover:bg-corpus-orange-500 hover:border-corpus-orange-600 absolute w-2 h-2 transform -rotate-45 top-1/2 left-1/2 rounded-full">
                
              </div>
              <Img fluid={LagoNorteMap.childFile.childImageSharp.fluid} className="w-full h-full absolute z-10 inset-0 object-cover" />
            </div>
            <div className="unidade__endereco w-full py-4">
              <p><span className="tag">Endereço:</span> <span className="referencia">{LagoNorteAddress.local.local}, </span>{LagoNorteAddress.endereco1.endereco1}</p>
              <p>{LagoNorteAddress.endereco2.endereco2}</p>
              <p><span className="tag">CEP: </span>{LagoNorteAddress.cep}</p>
            </div>
          </div> 

        </div>
        <div className="w-1/2">
          
        </div>
      </>
    )
  }
    
  

  return (
    <footer className="footer relative w-screen h-auto p-64 bg-corpus-beige-500">
      <div id="spacer" className="shadow-xl bg-corpus-beige-500 shadow-xl transform rotate-180 order-1 lg:absolute z-0 inset-x-0 top-0 w-screen h-24 lg:h-64 lg:-mt-64" />
      <div className="container mx-auto flex flex-wrap -mt-40">
        <IndexFooter data={data} />
      </div>
    </footer>
  )
}



export default Footer

import React from "react";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";

//Forms 
import FisioForm from "../components/form/conditional-selection"

// Styles
import '../styles/site.scss';
import '../styles/layout.scss';
import BlogFrontPage from "./sections/blog-front";
import FisioOrtoForm from "../components/form";

const IndexPage = ({ data }) => (
  <Layout page="index">
    <SEO title="Home" />
    <div className=" mt-24 mb-72 container mx-auto">
      <h1 className="text-3xl mb-32">Forms Sandbox</h1>
      <div className="w-1/2">
      <FisioOrtoForm />  
      </div>
    </div>
    
  </Layout>
)

export default IndexPage

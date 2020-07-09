import React from "react";
import Hero from "./sections/hero"
import Fisioterapia  from "./sections/fisioterapia"
import Pilates from "./sections/pilates";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";

// Styles
import '../styles/site.scss';
import '../styles/layout.scss';
import BlogFrontPage from "./sections/blog-front";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Hero data={ data } />
    <Fisioterapia data={ data } />
    <Pilates data={ data } />
    <BlogFrontPage data={ data } />
  </Layout>
)

export default IndexPage

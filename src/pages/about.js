import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const About = ({ location }) => (
  <Layout location={location}>
    <SEO title="About me" />
    <h1>About me</h1>
  </Layout>
);

export default About;

import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import s from '../styles/page.module.css';

const About = ({ location }) => (
  <Layout location={location}>
    <SEO title="About me" />
    <div className={s.Page}>
      <p>Coming soon...</p>
    </div>
  </Layout>
);

export default About;

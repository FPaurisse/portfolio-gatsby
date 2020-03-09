import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import s from '../styles/page.module.css';

const Contact = ({ location }) => (
  <Layout location={location}>
    <SEO title="Contact me" />
    <div className={s.Page}>
      <p>Coming soon...</p>
      <a href="mailto:contact@fredericpaurisse.fr">contact@fredericpaurisse.fr</a>
    </div>
  </Layout>
);

export default Contact;

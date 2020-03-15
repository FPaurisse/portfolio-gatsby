import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import s from '../styles/page.module.css';

const Contact = ({ location }) => (
  <Layout location={location}>
    <SEO
      title="Contact"
      description="Développeur web et webdesigner freelance à Tours (37), je développe pour vous tout type de projets web et print : sites internet, applications web, identités visuelles et chartes graphiques."
    />
    <div className={s.Page}>
      <p>Coming soon...</p>
      <a href="mailto:contact@fredericpaurisse.fr">contact@fredericpaurisse.fr</a>
    </div>
  </Layout>
);

export default Contact;

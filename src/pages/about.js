import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import s from '../styles/page.module.css';

const About = ({ location }) => (
  <Layout location={location}>
    <SEO
      title="About"
      description="Développeur web et webdesigner freelance à Tours (37), je développe pour vous tout type de projets web et print : sites internet, applications web, identités visuelles et chartes graphiques."
    />
    <div className={s.Page}>
      <p>Coming soon...</p>
    </div>
  </Layout>
);

export default About;

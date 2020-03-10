import React from 'react';
import s from '../styles/page.module.css';
import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="404: Not found" />
    <div className={s.Page}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
);

export default NotFoundPage;

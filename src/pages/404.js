import React from 'react';
import PageLayout from '../layouts/PageLayout/PageLayout';
import SEO from '../components/SEO/SEO';

const NotFoundPage = ({ location }) => (
  <PageLayout location={location}>
    <SEO title="404: Not found" />
    <div>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </PageLayout>
);

export default NotFoundPage;

import React from 'react';
import { Router } from '@reach/router';
import SEO from '../components/seo';
import Works from './works';

export default () => (
  <>
    <SEO title="Développement de sites et d'applications web" />
    <Router>
      <Works path="/" />
    </Router>
  </>
);

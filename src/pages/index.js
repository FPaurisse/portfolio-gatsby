import React from 'react';
import { Router } from '@reach/router';
import SEO from '../components/seo';
import Works from './works';

export default () => (
  <>
    <Router>
      <Works path="/" />
    </Router>
  </>
);

import React from 'react';
import { Router } from '@reach/router';
import SEO from '../components/seo';
import Works from './works';

export default () => (
  <>
    <SEO description="Developpeur web et webdesigner freelance à Tours (37), je développe pour vous tout type de projet web et print : sites internet, applications web, identités visuelles et chartes graphiques." />
    <Router>
      <Works path="/" />
    </Router>
  </>
);

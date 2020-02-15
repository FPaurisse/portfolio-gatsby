import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import layoutStyles from '../styles/layout.module.css';

import Header from './header';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={layoutStyles.layout}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        {children}
      </div>
    </div>
  );
};

export default Layout;

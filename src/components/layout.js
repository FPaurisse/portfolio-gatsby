import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import layoutStyles from '../styles/layout.module.css';
import Header from './header';
import favicon from '../images/favicon.ico';

const Layout = ({ children, location }) => {
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
    <div className={layoutStyles.Layout}>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header location={location} siteTitle={data.site.siteMetadata.title} />
      <section className={layoutStyles.container}>
        {children}
      </section>
    </div>
  );
};

export default Layout;

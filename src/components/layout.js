import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import cx from 'classnames';
import s from '../styles/layout.module.css';
import Header from './header';
import Contact from './Contact';
import Alert from './Alert';
import favicon from '../images/favicon.ico';

const Layout = ({
  children, location, isContact, alert,
}) => {
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
    <div className={s.Layout}>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header location={location} siteTitle={data.site.siteMetadata.title} />
      <section className={cx(s.container, { [s.containerReduce]: isContact })}>
        {children}
        {alert.status && (
          <Alert status={alert.status} statusText={alert.statusText} />
        )}
      </section>
      <Contact />
    </div>
  );
};

export default connect((state) => ({
  isContact: state.app.isContact,
  alert: state.app.alert,
}), null)(Layout);

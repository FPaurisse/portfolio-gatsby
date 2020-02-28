import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import headingStyles from '../styles/heading.module.css';

const Heading = () => {
  const data = useStaticQuery(graphql`
    query {
      allRestApiApiV1Works {
        totalCount
      }
    }
  `);
  const { totalCount } = data.allRestApiApiV1Works;

  return (
    <div className={headingStyles.Heading}>
      <div className={headingStyles.Heading__title}>
        <span className={headingStyles.Heading__count}>{totalCount}</span>
        {`${totalCount > 1 ? 'works' : 'work'} available`}
      </div>
      <div className={headingStyles.Heading__filters}>
        Show by :
        <Link to={'/' || '/web'} activeClassName={headingStyles.activeLink} className={headingStyles.link}>Web</Link>
        <Link to="/print" activeClassName={headingStyles.activeLink} className={headingStyles.link}>Print</Link>
      </div>
    </div>
  );
};

export default Heading;

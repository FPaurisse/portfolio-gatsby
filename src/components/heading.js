import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
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
        Show by:
        <span className={headingStyles.Heading__filterActive}>Web</span>
        <span className={headingStyles.Heading__filter}>Print</span>
      </div>
    </div>
  );
};

export default Heading;

import React from 'react';
import headingStyles from '../styles/heading.module.css';

const Heading = () => (
  <div className={headingStyles.Heading}>
    <div className={headingStyles.Heading__title}>
      <span className={headingStyles.Heading__count}>25</span>
      works available
    </div>
    <div className={headingStyles.Heading__filters}>
      Show by:
      <span className={headingStyles.Heading__filterActive}>Web</span>
      <span className={headingStyles.Heading__filter}>Print</span>
    </div>
  </div>
);

export default Heading;

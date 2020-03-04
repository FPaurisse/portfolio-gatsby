import React from 'react';
import cx from 'classnames';
import headingStyles from '../styles/heading.module.css';

const Heading = ({ counter, changeCategory, category }) => {
  const filterBy = (choice) => {
    changeCategory(choice);
  };

  return (
    <div className={headingStyles.Heading}>
      <div className={headingStyles.Heading__title}>
        <span className={headingStyles.Heading__count}>{counter}</span>
        {`${counter > 1 ? 'works' : 'work'} available`}
      </div>
      <div className={headingStyles.Heading__filters}>
        Show by :
        <button onClick={() => filterBy('Web')} type="button" className={category === 'Web' ? cx(headingStyles.active, headingStyles.button) : headingStyles.button}>Web</button>
        <button onClick={() => filterBy('Print')} type="button" className={category === 'Print' ? cx(headingStyles.active, headingStyles.button) : headingStyles.button}>Print</button>
      </div>
    </div>
  );
};

export default Heading;

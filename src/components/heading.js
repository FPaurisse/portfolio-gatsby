import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import s from '../styles/heading.module.css';

import { toggleLoad } from '../state/app';

const Heading = ({
  counter, changeCategory, category, isLoad, dispatch,
}) => {
  const filterBy = (choice) => {
    changeCategory(choice);
    dispatch(toggleLoad(true));
  };

  return (
    <div className={s.Heading}>
      <div className={cx(s.HeadingTitle, { [s.HeadingTitle__load]: isLoad })}>
        <span className={s.HeadingCount}>{counter}</span>
        {`${counter > 1 ? 'works' : 'work'} available`}
      </div>
      <div className={s.HeadingFilters}>
        Show by :
        <button onClick={() => filterBy('Web')} type="button" className={category === 'Web' ? cx(s.active, s.button) : s.button}>Web</button>
        <button onClick={() => filterBy('Print')} type="button" className={category === 'Print' ? cx(s.active, s.button) : s.button}>Print</button>
      </div>
    </div>
  );
};

export default connect((state) => ({
  isLoad: state.app.isLoad,
}), null)(Heading);

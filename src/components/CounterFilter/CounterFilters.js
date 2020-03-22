import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import s from './CounterFilters.module.css';

import { toggleLoad } from '../../state/app';

const CounterFilters = ({
  counter, changeCategory, category, isLoad, dispatch,
}) => {
  const filterBy = (choice) => {
    changeCategory(choice);
    dispatch(toggleLoad(true));
  };

  return (
    <div className={s.CounterFilters}>
      <div className={cx(s.Counter, { [s.Counter__load]: isLoad })}>
        <span className={s.CounterCount}>{counter}</span>
        {`${counter > 1 ? 'works' : 'work'} available`}
      </div>
      <div className={s.Filters}>
        Show by :
        <button
          onClick={() => filterBy('Web')}
          type="button"
          className={category === 'Web' ? cx(s.active, s.button) : s.button}
        >
          Web
        </button>
        <button
          onClick={() => filterBy('Print')}
          type="button"
          className={category === 'Print' ? cx(s.active, s.button) : s.button}
        >
          Print
        </button>
      </div>
    </div>
  );
};

export default connect((state) => ({
  isLoad: state.app.isLoad,
}), null)(CounterFilters);

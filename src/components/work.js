import React from 'react';
import { Link } from 'gatsby';
import { connect } from 'react-redux';
import cx from 'classnames';
import s from '../styles/work.module.css';

import { toggleContact } from '../state/app';

const baseURL = process.env.GATSBY_API_URL || '';

const Work = ({ data, isContact, dispatch }) => (
  <Link key={data.endpointId} onClick={() => dispatch(toggleContact(false))} to={`/works/${data.slug}`} className={cx(s.Work, { [s.WorkReduce]: isContact })}>
    <div
      className={s.image}
      style={{
        backgroundImage: `url(${data.image.includes(baseURL)
          ? data.image
          : baseURL + data.image})`,
      }}
    />
    <div className={s.back} style={{ backgroundColor: `${data.optionalColor}` }} />
    <div className={s.backGradient} style={{ backgroundImage: `linear-gradient(45deg, ${data.primaryColor} 15%, ${data.secondaryColor} 70%)` }} />
    <h1
      className={s.title}
      style={{
        backgroundImage: `url(${data.image.includes(baseURL)
          ? data.image
          : baseURL + data.image})`,
      }}
    >
      {data.title}

    </h1>
    <div
      className={s.mockup}
      style={{
        backgroundImage: `url(${data.mockup.includes(baseURL)
          ? data.mockup
          : baseURL + data.mockup})`,
        width: `${data.width}%`,
        height: `${data.height}%`,
      }}
    />
  </Link>
);

export default connect((state) => ({
  isContact: state.app.isContact,
}), null)(Work);

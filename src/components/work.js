import React from 'react';
import { Link } from 'gatsby';
import { connect } from 'react-redux';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import s from '../styles/work.module.css';

const baseURL = process.env.GATSBY_API_URL || '';

const Work = ({ data, isContact, isLoad }) => (
  <Link key={data.endpointId} to={`/works/${data.slug}`} className={cx(s.Work, { [s.WorkReduce]: isContact, [s.Work__load]: isLoad })}>
    <div className={cx(s.workItem, { [s.workItem__load]: isLoad })}>
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
    </div>
    <div className={s.link}>
      <FontAwesomeIcon className={cx(s.iconlink, { [s.iconlink__load]: isLoad })} icon={faArrowRight} />
    </div>
  </Link>
);

export default connect((state) => ({
  isContact: state.app.isContact,
}), null)(Work);

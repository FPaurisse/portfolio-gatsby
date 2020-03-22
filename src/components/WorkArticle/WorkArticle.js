import React from 'react';
import { Link } from 'gatsby';
import { connect } from 'react-redux';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import s from './WorkArticle.module.css';

import {
  toggleLoad, toggleContact, toggleTerms, toggleCredits,
} from '../../state/app';

const baseURL = process.env.GATSBY_API_URL || '';

const WorkArticle = ({
  data, isContact, isCredits, isLoad, dispatch,
}) => {
  const closeModal = () => {
    dispatch(toggleContact(false));
    dispatch(toggleTerms(false));
    dispatch(toggleCredits(false));
    dispatch(toggleLoad(true));
  };

  return (
    <Link
      onClick={closeModal}
      key={data.endpointId}
      to={`/works/${data.slug}`}
      className={cx(s.WorkArticle, { [s.WorkArticleReduce]: isContact || isCredits, [s.WorkArticle__load]: isLoad })}
    >
      <article className={cx(s.WorkArticleItem, { [s.WorkArticleItem__load]: isLoad })}>
        <div
          className={s.image}
          style={{
            backgroundImage: `url(${data.image.includes(baseURL)
              ? data.image
              : baseURL + data.image})`,
          }}
        />
        <div className={s.back} style={{ backgroundColor: `${data.optionalColor}` }} />
        <div
          className={s.backGradient}
          style={{ backgroundImage: `linear-gradient(45deg, ${data.primaryColor} 15%, ${data.secondaryColor} 70%)` }}
        />
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
      </article>
      <div className={s.link}>
        <FontAwesomeIcon
          className={cx(s.iconlink, { [s.iconlink__load]: isLoad })}
          icon={faArrowRight}
        />
      </div>
    </Link>
  );
};

export default connect((state) => ({
  isLoad: state.app.isLoad,
  isContact: state.app.isContact,
  isCredits: state.app.isCredits,
}), null)(WorkArticle);

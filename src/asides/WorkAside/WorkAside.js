import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'gatsby';
import AsideLayout from '../../layouts/AsideLayout/AsideLayout';
import s from './WorkAside.module.css';

const WorkAside = ({ work, currentCategory }) => (
  <AsideLayout vertical asideTitle={work && work.title} closeTitle="Close" closeLink="/works" currentCategory={currentCategory}>
    <p className={s.text}>
      {work && work.context}
    </p>
    <div className={s.categories}>
      {work
        && work.categories.map((category, index) => (
          <Link
            key={index}
            className={s.link}
            to="/works"
            state={{ currentCategory }}
          >
            {category}
          </Link>
        ))}
    </div>
  </AsideLayout>
);

export default connect((state) => ({
  isAside: state.app.isAside,
}), null)(WorkAside);

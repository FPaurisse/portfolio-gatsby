import React from 'react';
import { connect } from 'react-redux';
import AsideLayout from '../AsideLayout/AsideLayout';
import s from './WorkAside.module.css';

const WorkAside = ({ work }) => (
  <AsideLayout asideTitle={work && work.title} closeTitle="Close">
    <p className={s.text}>
      {work && work.context}
    </p>
    <ul className={s.list}>
      {work && work.categories.map((category) => <li className={s.item}>{category}</li>)}
    </ul>
  </AsideLayout>
);

export default connect((state) => ({
  isAside: state.app.isAside,
}), null)(WorkAside);

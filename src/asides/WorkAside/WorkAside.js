import React from 'react';
import { connect } from 'react-redux';
import { v1 as uuidv1 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import AsideLayout from '../../layouts/AsideLayout/AsideLayout';
import s from './WorkAside.module.css';

const WorkAside = ({ work, currentCategory }) => (
  <AsideLayout vertical asideTitle={work && work.title} closeTitle="Close" closeLink="/works" currentCategory={currentCategory}>
    <div className={s.tools}>
      {work && work.tools.map((tool) => (
        <p key={uuidv1()} className={s.tool}>
          <FontAwesomeIcon className={s.iconTag} icon={faTag} />
          {tool}
        </p>
      ))}
    </div>
  </AsideLayout>
);

export default connect((state) => ({
  isAside: state.app.isAside,
}), null)(WorkAside);

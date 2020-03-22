import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import useData from '../useData';
import PageLayout from '../layouts/PageLayout/PageLayout';
import CounterFilters from '../components/CounterFilter/CounterFilters';
import WorkArticle from '../components/WorkArticle/WorkArticle';
import SEO from '../components/SEO/SEO';
import Footer from '../components/Footer/Footer';
import s from '../styles/homePage.module.css';

import { toggleLoad } from '../state/app';

const Works = ({ location, isAside, dispatch }) => {
  const { edges } = useData();
  const currentCategory = location.state && location.state.currentCategory ? location.state.currentCategory : 'Web';
  const [category, setCategory] = useState(currentCategory);
  const data = edges.filter((work) => work.node.categories.includes(`${category}`));

  useEffect(() => {
    setInterval(() => {
      dispatch(toggleLoad(false));
    }, 1500);
  }, [dispatch]);

  return (
    <PageLayout location={location}>
      <SEO
        title={category}
        description="Développeur web et webdesigner freelance à Tours (37), je développe pour vous tout type de projets web et print : sites internet, applications web, identités visuelles et chartes graphiques."
      />
      <div className={cx(
        s.wrapper,
        { [s.wrapper__hide]: isAside !== null },
      )}
      >
        <CounterFilters
          counter={data.length}
          changeCategory={(choice) => setCategory(choice)}
          category={category}
        />
        <div className={cx(s.works)}>
          {data
            .map(({ node }) => (
              <WorkArticle key={node.id} data={node} />
            ))}
        </div>
        <Footer />
      </div>
    </PageLayout>
  );
};

export default connect((state) => ({
  isAside: state.app.isAside,
  isLoad: state.app.isLoad,
}), null)(Works);

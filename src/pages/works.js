import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import s from '../styles/works.module.css';
import Layout from '../components/layout';
import Heading from '../components/heading';
import Work from '../components/work';
import SEO from '../components/seo';
import useData from '../useData';
import Footer from '../components/Footer';

import { toggleLoad } from '../state/app';

const Works = ({ location, isLoad, dispatch }) => {
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
    <Layout location={location}>
      <SEO
        title={category}
        description="Développeur web et webdesigner freelance à Tours (37), je développe pour vous tout type de projets web et print : sites internet, applications web, identités visuelles et chartes graphiques."
      />
      <Heading
        counter={data.length}
        changeCategory={(choice) => setCategory(choice)}
        category={category}
      />
      <div className={cx(s.works)}>
        {data
          .map(({ node }) => (
            <Work key={node.id} data={node} />
          ))}
      </div>
      <Footer />
    </Layout>
  );
};

export default connect((state) => ({
  isLoad: state.app.isLoad,
}), null)(Works);

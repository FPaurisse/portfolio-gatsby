import React, { useState } from 'react';
import worksStyles from '../styles/works.module.css';
import Layout from '../components/layout';
import Heading from '../components/heading';
import Work from '../components/work';
import SEO from '../components/seo';
import useData from '../useData';

export default () => {
  const { edges } = useData();
  const [category, setCategory] = useState('Web');
  const data = edges.filter((work) => work.node.categories.includes(`${category}`));
  return (
    <Layout>
      <SEO title="Home" />
      <Heading
        counter={data.length}
        changeCategory={(choice) => setCategory(choice)}
        category={category}
      />
      <div className={worksStyles.works}>
        {data
          .map(({ node }) => (
            <Work key={node.id} data={node} />
          ))}
      </div>
    </Layout>
  );
};

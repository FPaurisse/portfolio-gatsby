import React, { useState } from 'react';
import worksStyles from '../styles/works.module.css';
import Layout from '../components/layout';
import Heading from '../components/heading';
import Work from '../components/work';
import SEO from '../components/seo';
import useData from '../useData';

const Works = ({ location }) => {
  const { edges } = useData();
  const currentCategory = location.state && location.state.currentCategory ? location.state.currentCategory : 'Web';
  const [category, setCategory] = useState(currentCategory);
  const data = edges.filter((work) => work.node.categories.includes(`${category}`));
  return (
    <Layout location={location}>
      <SEO
        title={category}
        description="Developpeur web et webdesigner freelance à Tours (37), je développe pour vous tout type de projet web et print : sites internet, applications web, identités visuelles et chartes graphiques."
      />
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

export default Works;

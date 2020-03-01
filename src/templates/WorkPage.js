import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default ({ data }) => {
  const work = data.restApiApiV1Works;
  return (
    <Layout>
      <SEO title={work.title} description={work.context} />
      <div>
        <h1>{work.title}</h1>
        <p>{work.context}</p>
        <div>{work.tools.map((tool) => <h4>{tool}</h4>)}</div>
        <div>{work.categories.map((category) => <h5>{category}</h5>)}</div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    restApiApiV1Works(slug: {eq: $slug}) {
          title
          context
          tools
          categories
    }
  }
`;

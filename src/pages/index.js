import React from 'react';
import { graphql } from 'gatsby';
import worksStyles from '../styles/works.module.css';
import Layout from '../components/layout';
import Heading from '../components/heading';
import Work from '../components/work';
import SEO from '../components/seo';

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Heading />
    <div className={worksStyles.works}>
      {data.allRestApiApiV1Works.edges.map(({ node }) => (
        <Work key={node.id} data={node} />
      ))}
    </div>
  </Layout>
);

export const worksQuery = graphql`
  query {
    allRestApiApiV1Works(sort: {fields: createdAt, order: DESC}) {
      edges {
        node {
          endpointId
          slug
          title
          image
          primaryColor
          secondaryColor
          optionalColor
          mockup
          context
          categories
        }
      }
      totalCount
    }
  }`;

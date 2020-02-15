import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Works</h1>
    <p>
      (
      {data.allRestApiApiV1Works.totalCount}
      )
    </p>
    {data.allRestApiApiV1Works.edges.map(({ node }) => (
      <div key={node.id}>
        <Link to={node.slug}>
          <h2>{node.title}</h2>
        </Link>
        <h4>{node.categories.map((category) => category)}</h4>
        <p>{node.context}</p>
      </div>
    ))}
  </Layout>
);
export const worksQuery = graphql`
  query {
    allRestApiApiV1Works(sort: {fields: endpointId, order: DESC}) {
      edges {
        node {
          id
          slug
          title
          context
          categories
        }
      }
      totalCount
    }
  }`;

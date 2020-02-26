import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import Heading from '../components/heading';
import SEO from '../components/seo';
import worksStyles from '../styles/works.module.css';

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Heading />
    <div className={worksStyles.works}>
      {data.allRestApiApiV1Works.edges.map(({ node }) => (
        <Link key={node.endpointId} to={node.slug} className={worksStyles.work}>
          <div className={worksStyles.image} style={{ backgroundImage: `url(${node.image})` }} />
          <div className={worksStyles.back} style={{ backgroundColor: node.optionalColor }} />
          <div className={worksStyles.backGradient} style={{ backgroundImage: `linear-gradient(45deg, ${node.primaryColor} 15%, ${node.secondaryColor} 70%)` }} />
          <h1 className={worksStyles.title} style={{ backgroundImage: `url(${node.image})` }}>{node.title}</h1>
          <div className={worksStyles.mockup} style={{ backgroundImage: `url(${node.mockup})` }} />
        </Link>
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

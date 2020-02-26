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
        <Link to={node.slug} className={worksStyles.work}>
          <div className={worksStyles.image} style={{ backgroundImage: 'url(\'./images/test4.jpg\')' }} />
          <div className={worksStyles.back} style={{ backgroundColor: '#DCDCCB' }} />
          <div className={worksStyles.backGradient} style={{ backgroundImage: 'linear-gradient(45deg, #F26157 15%, #363635 70%)' }} />
          <h1 className={worksStyles.title} style={{ backgroundImage: 'url(\'./images/test4.jpg\')' }}>Rosebud</h1>
          <div className={worksStyles.mockup} style={{ backgroundImage: 'url(\'./images/rosebud.jpg\')' }} />
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
          context
          categories
        }
      }
      totalCount
    }
  }`;

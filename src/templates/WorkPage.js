import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import s from '../styles/WorkPage.module.css';

const baseURL = process.env.GATSBY_API_URL || '';

export default ({ data }) => {
  const work = data.restApiApiV1Works;
  console.log(work);
  return (
    <Layout>
      <SEO title={work.title} description={work.context} />
      <div className={s.WorkPage}>
        <div className={s.view}>
          <div
            className={s.image}
            style={{
              backgroundImage: `url(${work.image.includes(baseURL)
                ? work.image
                : baseURL + work.image})`,
            }}
          />
          <div className={s.back} style={{ backgroundColor: `${work.optionalColor}` }} />
          <div className={s.backGradient} style={{ backgroundImage: `linear-gradient(45deg, ${work.primaryColor} 15%, ${work.secondaryColor} 70%)` }} />
          <h1
            className={s.title}
            style={{
              backgroundImage: `url(${work.image.includes(baseURL)
                ? work.image
                : baseURL + work.image})`,
            }}
          >
            {work.title}

          </h1>
          <div
            className={s.mockup}
            style={{
              backgroundImage: `url(${work.mockup.includes(baseURL)
                ? work.mockup
                : baseURL + work.mockup})`,
              width: `${work.width}%`,
              height: `${work.height}%`,
            }}
          />
        </div>
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
      endpointId
      title
      context
      tools
      categories
      primaryColor
      secondaryColor
      optionalColor
      image
      mockup
      width
      height
    }
  }
`;

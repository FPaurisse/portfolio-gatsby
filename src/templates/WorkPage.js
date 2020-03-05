import React from 'react';
import { graphql, Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/layout';
import SEO from '../components/seo';
import s from '../styles/WorkPage.module.css';

const baseURL = process.env.GATSBY_API_URL || '';

export default ({ data, location }) => {
  const work = data.restApiApiV1Works;
  return (
    <Layout location={location}>
      <SEO title={work.title} description={work.context} />
      <div className={s.WorkPage}>
        <div className={s.view}>
          <div className={s.backLink}>
            <Link to="/works" className={s.link}>
              <FontAwesomeIcon icon={faLongArrowAltLeft} className={s.icon} />
              Back to works
            </Link>
          </div>

          <div className={s.back} style={{ backgroundColor: `${work.optionalColor}` }} />
          <div className={s.backGradient} style={{ backgroundImage: `linear-gradient(45deg, ${work.primaryColor} 15%, ${work.secondaryColor} 70%)` }}>
            <div
              className={s.first}
              style={{
                backgroundImage: `url(${work.image.includes(baseURL)
                  ? work.image
                  : baseURL + work.image})`,
              }}
            >
              <div
                className={s.second}
                style={{ backgroundImage: `linear-gradient(45deg, ${work.primaryColor} 15%, ${work.secondaryColor} 70%)` }}
              />
            </div>
          </div>
          <div
            className={s.slide}
          >
            <img
              alt="mockup"
              className={s.mockup}
              src={work.mockup.includes(baseURL)
                ? work.mockup
                : baseURL + work.mockup}
            />
            <button type="button" className={s.down}>
              <span className={s.circle}>
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </button>
          </div>
        </div>
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

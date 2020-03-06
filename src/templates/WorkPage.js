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
        <div
          className={s.workSlide}
          style={{
            backgroundImage: `linear-gradient(black, black), url(${work.image.includes(baseURL)
              ? work.image
              : baseURL + work.image})`,
          }}
        >
          <div className={s.backLink}>
            <Link to="/works" className={s.link}>
              <FontAwesomeIcon icon={faLongArrowAltLeft} className={s.icon} />
              Back to works
            </Link>
          </div>
          <div className={s.wrapper} style={{ borderImageSource: `linear-gradient(45deg, ${work.primaryColor} 15%, ${work.secondaryColor} 70%)` }}>
            <div className={s.optionalBack} style={{ backgroundColor: `${work.optionalColor}` }}>
              <div className={s.backGradient} style={{ backgroundImage: `linear-gradient(45deg, ${work.primaryColor} 15%, ${work.secondaryColor} 70%)` }} />
            </div>
          </div>
          <div className={s.view}>
            <div className={s.content}>
              <div
                className={s.mockup}
                style={{
                  backgroundImage: `url(${work.mockup.includes(baseURL)
                    ? work.mockup
                    : baseURL + work.mockup})`,
                }}
              />
            </div>
            <button type="button" className={s.down}>
              <div className={s.circle}>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
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

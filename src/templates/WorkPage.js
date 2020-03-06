import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/layout';
import SEO from '../components/seo';
import s from '../styles/WorkPage.module.css';
import useData from '../useData';

const baseURL = process.env.GATSBY_API_URL || '';

export default ({ data, location }) => {
  const [fullPage, setFullPage] = useState(true);

  const work = data.restApiApiV1Works;
  const worksData = useData();
  const currentCategory = work.categories[0];
  const dataFilter = worksData.edges.filter((x) => x.node.categories.includes(currentCategory));
  const currentIndex = dataFilter
    .map((item, index) => item.node.slug === work.slug && index)
    .filter((x) => x !== false)[0];
  const nextSlug = currentIndex + 1 < dataFilter.length
    && dataFilter[currentIndex + 1].node.slug;
  const prevSlug = currentIndex - 1 >= 0
    && dataFilter[currentIndex - 1].node.slug;

  return (
    <Layout location={location}>
      <SEO title={work.title} description={work.context} />
      <div className={s.WorkPage}>

        <div
          className={cx(!fullPage && s.workSlideReduce, s.workSlide)}
          style={{
            backgroundImage: `linear-gradient(black, black), url(${work.image.includes(baseURL)
              ? work.image
              : baseURL + work.image})`,
          }}
        >
          <div className={s.close}>
            <Link to="/works" state={{ currentCategory }} className={s.closeButton}>
              <div className={s.iconCloseButton}>
                <FontAwesomeIcon icon={faTimesCircle} />
              </div>
            </Link>
          </div>

          {prevSlug && <Link to={`/works/${prevSlug}`} aria-label="Previous" className={cx(!fullPage && s.navButtonReduce, s.navButton, s.navLeft)} />}
          <div className={cx(!fullPage && s.wrapperReduce, s.wrapper)} style={{ borderImageSource: `linear-gradient(45deg, ${work.primaryColor} 15%, ${work.secondaryColor} 70%)` }}>
            <div className={s.optionalBack} style={{ backgroundColor: `${work.optionalColor}` }}>
              <div className={s.backGradient} style={{ backgroundImage: `linear-gradient(45deg, ${work.primaryColor} 15%, ${work.secondaryColor} 70%)` }} />
            </div>
          </div>
          <div className={cx(!fullPage && s.viewReduce, s.view)}>
            <div className={s.content}>
              <div
                className={cx(!fullPage && s.mockupReduce, s.mockup)}
                style={{
                  backgroundImage: `url(${work.mockup.includes(baseURL)
                    ? work.mockup
                    : baseURL + work.mockup})`,
                  width: `${work.width}%`,
                  height: `${work.height}%`,
                }}
              />
            </div>
            <div className={cx(!fullPage && s.showMoreReduce, s.showMore)}>
              <button className={s.showButton} type="button" onClick={() => setFullPage(!fullPage)}>
                <div className={s.iconShowButton}>
                  <FontAwesomeIcon icon={!fullPage ? faChevronDown : faChevronUp} />
                </div>
              </button>
            </div>
          </div>
          {nextSlug && <Link to={`/works/${nextSlug}`} aria-label="Next" className={cx(!fullPage && s.navButtonReduce, s.navButton, s.navRight)} />}
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
      slug
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

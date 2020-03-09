import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTag, faInfoCircle, faChevronLeft, faChevronRight, faTimesCircle, faToolbox, faBullseye,
} from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/layout';
import SEO from '../components/seo';
import s from '../styles/WorkPage.module.css';
import useData from '../useData';

const baseURL = process.env.GATSBY_API_URL || '';

export default ({ data, location }) => {
  const [fullPage, setFullPage] = useState(false);

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
          <div className={s.show}>
            <button className={cx(s.showButton)} type="button" onClick={() => setFullPage(!fullPage)}>
              <FontAwesomeIcon className={cx(s.iconShowButton)} icon={fullPage ? faTimesCircle : faInfoCircle} />
            </button>
          </div>

          {prevSlug
            && (
            <Link to={`/works/${prevSlug}`} aria-label="Previous" className={cx(!fullPage && s.navButtonReduce, s.navButton, s.navLeft)}>
              <FontAwesomeIcon className={s.iconNavigation} icon={faChevronLeft} />
            </Link>
            )}
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
          </div>
          {nextSlug && (
          <Link to={`/works/${nextSlug}`} aria-label="Next" className={cx(!fullPage && s.navButtonReduce, s.navButton, s.navRight)}>
            <FontAwesomeIcon className={s.iconNavigation} icon={faChevronRight} />
          </Link>
          )}
          <div className={s.close}>
            <Link to="/works" state={{ currentCategory }} className={cx(s.closeButton)}>
              <div className={s.iconCloseButton}>
                ⟵ Works /
                {' '}
                {currentCategory}
              </div>
            </Link>
          </div>
        </div>
        <div className={cx(!fullPage && s.detailsReduce, s.details)}>
          <div className={s.detail}>
            <h2 className={s.heading}>Client</h2>
            <p className={s.response}>{work.title}</p>
          </div>
          <div className={s.detail}>
            <h2 className={s.heading}>Context</h2>
            <p className={s.response}>{work.context}</p>
          </div>
          <div className={s.detail}>
            <h2 className={s.heading}>Tools</h2>
            <p className={s.response}>{work.tools.map((tool) => tool).join(', ')}</p>
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

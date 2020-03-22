import React, { useState, useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import cx from 'classnames';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTag, faInfoCircle, faChevronLeft, faChevronRight, faDotCircle,
} from '@fortawesome/free-solid-svg-icons';
import useData from '../useData';
import PageLayout from '../layouts/PageLayout/PageLayout';
import SEO from '../components/SEO/SEO';
import s from './WorkPage.module.css';

import { toggleAside } from '../state/app';

const baseURL = process.env.GATSBY_API_URL || '';

const WorkPage = ({
  data, location, isLoad, isAside, dispatch,
}) => {
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

  useEffect(() => {
    if (isAside !== 'contact' && isAside !== 'terms') {
      dispatch(toggleAside('work'));
    }
  }, [dispatch, isAside]);

  const changeDisplay = () => {
    setFullPage(!fullPage);
  };

  return (
    <PageLayout vertical location={location} work={work} currentCategory={currentCategory}>
      <SEO title={work.title} description={work.context} />
      <div className={cx(
        s.WorkPage,
        { [s.WorkPage__hide]: isAside !== 'work' },
      )}
      >
        <div
          className={cx(
            s.workSlide,
            { [s.workSlide__load]: isLoad },
            { [s.workSlideReduce]: !fullPage },
          )}
          style={{
            backgroundImage: !isLoad && `linear-gradient(black, black), url(${work.image.includes(baseURL)
              ? work.image
              : baseURL + work.image})`,
          }}
        >

          {prevSlug
                && (
                  <Link to={`/works/${prevSlug}`} state={{ fullPage }} aria-label="Previous" className={cx(!fullPage && s.navButtonReduce, s.navButton, s.navLeft)}>
                    <FontAwesomeIcon
                      className={cx(
                        s.iconNavigation,
                        { [s.icon__load]: isLoad },
                      )}
                      icon={faChevronLeft}
                    />
                  </Link>
                )}
          <div
            className={cx(
              s.wrapper,
              { [s.wrapper__load]: isLoad },
              { [s.wrapperReduce]: !fullPage },
            )}
            style={{
              borderImageSource: !isLoad && `linear-gradient(45deg, ${work.primaryColor} 15%, ${work.secondaryColor} 70%)`,
            }}
          >
            <div
              className={cx(
                s.optionalBack,
                { [s.optionalBack__load]: isLoad },
              )}
              style={{ backgroundColor: !isLoad && `${work.optionalColor}` }}
            >
              <div
                className={cx(
                  s.backGradient,
                  { [s.optionalBack__load]: isLoad },
                )}
                style={{
                  backgroundImage: !isLoad && `linear-gradient(45deg, ${work.primaryColor} 15%, ${work.secondaryColor} 70%)`,
                }}
              />
            </div>
          </div>
          <div className={cx(
            s.view,
            { [s.view__load]: isLoad },
            { [s.viewReduce]: !fullPage },
          )}
          >
            <div className={s.content}>
              <div
                className={cx(
                  s.mockup,
                  { [s.mockupReduce]: !fullPage },
                )}
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
            <Link
              to={`/works/${nextSlug}`}
              state={{ fullPage }}
              aria-label="Next"
              className={cx(
                s.navButton,
                { [s.navButtonReduce]: !fullPage },
                s.navRight,
              )}
            >
              <FontAwesomeIcon
                className={cx(
                  s.iconNavigation,
                  { [s.icon__load]: isLoad },
                )}
                icon={faChevronRight}
              />
            </Link>
          )}

          <div className={cx(s.button, s.buttonBottom)}>
            <button
              className={cx(
                s.actionButton,
                s.actionButtonBottom,
              )}
              type="button"
              onClick={changeDisplay}
            >
              <FontAwesomeIcon
                className={cx(
                  s.iconActionButton,
                  { [s.icon__load]: isLoad },
                )}
                icon={!fullPage ? faDotCircle : faInfoCircle}
              />
            </button>
          </div>

        </div>
        <div className={cx(
          s.details,
          { [s.detailsReduce]: fullPage },
        )}
        >
          <div className={s.tools}>
            {work.tools.map((tool, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <p key={index} className={s.tool}>
                <FontAwesomeIcon className={s.iconTag} icon={faTag} />
                {tool}
              </p>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default connect((state) => ({
  isLoad: state.app.isLoad,
  isAside: state.app.isAside,
}), null)(WorkPage);

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

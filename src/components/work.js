import React from 'react';
import { Link } from 'gatsby';
import workStyles from '../styles/work.module.css';

const baseURL = process.env.GATSBY_API_URL || '';

const Work = ({ data }) => (
  <Link key={data.endpointId} to={`/works/${data.slug}`} className={workStyles.Work}>
    <div
      className={workStyles.image}
      style={{
        backgroundImage: `url(${data.image.includes(baseURL)
          ? data.image
          : baseURL + data.image})`,
      }}
    />
    <div className={workStyles.back} style={{ backgroundColor: `${data.optionalColor}` }} />
    <div className={workStyles.backGradient} style={{ backgroundImage: `linear-gradient(45deg, ${data.primaryColor} 15%, ${data.secondaryColor} 70%)` }} />
    <h1
      className={workStyles.title}
      style={{
        backgroundImage: `url(${data.image.includes(baseURL)
          ? data.image
          : baseURL + data.image})`,
      }}
    >
      {data.title}

    </h1>
    <div
      className={workStyles.mockup}
      style={{
        backgroundImage: `url(${data.mockup.includes(baseURL)
          ? data.mockup
          : baseURL + data.mockup})`,
        width: `${data.width}%`,
        height: `${data.height}%`,
      }}
    />
  </Link>
);

export default Work;

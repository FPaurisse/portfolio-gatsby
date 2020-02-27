import React from 'react';
import { Link } from 'gatsby';
import workStyles from '../styles/work.module.css';

const images = require.context('../images', true);

const Work = ({ data }) => {
  const image = images(`./${data.image}`);
  const mockup = images(`./${data.mockup}`);
  return (
    <Link key={data.endpointId} to={data.slug} className={workStyles.Work}>
      <div className={workStyles.image} style={{ backgroundImage: `url(${image})` }} />
      <div className={workStyles.back} style={{ backgroundColor: data.optionalColor }} />
      <div className={workStyles.backGradient} style={{ backgroundImage: `linear-gradient(45deg, ${data.primaryColor} 15%, ${data.secondaryColor} 70%)` }} />
      <h1 className={workStyles.title} style={{ backgroundImage: `url(${data.image})` }}>{data.title}</h1>
      <div className={workStyles.mockup} style={{ backgroundImage: `url(${mockup})` }} />
    </Link>
  );
};

export default Work;

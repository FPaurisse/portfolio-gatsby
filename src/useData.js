import { useStaticQuery, graphql } from 'gatsby';

const useData = () => {
  const { allRestApiApiV1Works } = useStaticQuery(
    graphql`
        query {
        allRestApiApiV1Works(sort: {fields: createdAt, order: DESC}) {
          edges {
            node {
              endpointId
              slug
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
          totalCount
        }
      }
    `,
  );
  return allRestApiApiV1Works;
};

export default useData;

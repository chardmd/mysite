import { useStaticQuery, graphql } from "gatsby";

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            siteUrl
            description
            author
            copyright
            email
            headline
            about
            twitter
            driftId
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;

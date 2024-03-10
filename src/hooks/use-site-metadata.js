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
            driftId
            social {
              linkedin
              github
              angel
            }
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;

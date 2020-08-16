import React from "react";
import { Helmet } from "react-helmet";
import useSiteMetadata from "../../hooks/use-site-metadata";

const SEO = ({ seoTitle, seoDescription, seoImage, seoSlug }) => {
  const defaults = useSiteMetadata();
  if (defaults.siteUrl === "" && typeof window !== "undefined") {
    defaults.siteUrl = window.location.origin;
  }

  if (defaults.siteUrl === "") {
    console.error("Please set a siteUrl in your site metadata!");
    return null;
  }

  const title = seoTitle || defaults.title;
  const description = seoDescription || defaults.description;
  const url = new URL(seoSlug || "", defaults.siteUrl);
  const image = seoImage ? new URL(seoImage, defaults.siteUrl) : false;

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      {image && <meta name="image" content={image} />}

      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={defaults.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

export default SEO;

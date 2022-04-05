import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import Intro from "../components/Intro";
import Card from "../components/Card";
import * as propTypes from "prop-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { useMediaQuery } from "react-responsive";
import { Helmet } from "react-helmet";
import "../styles/global.scss";
import * as styles from "./blog-template.module.scss";

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      <GatsbyImage
        className={styles.img}
        {...node.data.target}
      />
    },
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className={styles.p}>{children} </p>
    ),

    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className={styles.heading1}> {children} </h1>
    ),

    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className={styles.heading2}> {children} </h2>
    ),

    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className={styles.heading3}> {children} </h3>
    ),

    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noreferrer"
        className={styles.url}
      >
        {children}{" "}
      </a>
    ),
  },
  renderMark: {
    [MARKS.CODE]: (children) => (
      <code className={styles.code}> {children.trim()} </code>
    ),
  },
};

const BlogTemplate = ({ data }) => {
  const isIpadPro = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const {
    blog: {
      title,
      subtitle,
      published,
      category,
      brief: { brief },
      updatedAt,
      createdAt,
      keywords,
      slug,
      tags,
      hero,
      body,
    },
    allContentfulBlogs: { nodes: blogs },
    back,
  } = data;

  return (
    <div className={styles.post}>
      <Helmet
        htmlAttributes={{
          lang: "id",
        }}
      >
        <meta name="generator" content="Gatsby" />
        <title> {title} | Azzin Maharil </title>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,viewport-fit=cover"
        />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <link rel="preconnect" href="https://www.google.com " crossOrigin />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link
          rel="preconnect"
          href="https://www.google-analytics.com"
          crossOrigin
        />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <meta itemprop="name" content="Azzin Maharil" />
        <meta itemprop="description" content={brief} />
        <meta itemprop="datePublished" content={createdAt} />
        <meta itemprop="dateModified" content={updatedAt} />
        <meta itemprop="image" content={hero.gatsbyImageData} />
        <meta itemprop="keywords" content={keywords} />
        <meta property="og:site_name" content="Azzin Maharil" />
        <meta property="fb:admins" content="azzin2420" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:locale:alternate" content="ms_MY" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={subtitle} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={"https://www.azzinmaharil.me/" + slug}
        />
        <meta property="og:image" content={hero.gatsbyImageData} />
        <meta
          property="og:image:secure_url"
          content={`https:${hero.gatsbyImageData}`}
        />
        <meta property="og:image:width" content={hero.gatsbyImageData} />
        <meta property="og:image:height" content={hero.gatsbyImageData} />
        <meta property="og:image:alt" content={hero.title} />
        <meta property="article:author" content="Azzin Maharil" />
        <meta property="article:publisher" content="Azzin Maharil " />
        <meta property="article:published_time" content={createdAt} />
        <meta property="article:modified_time" content={updatedAt} />
        <meta property="article:section" content="post" />
        {tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@azin2420" />
        <meta name="twitter:creator" content="@azin2420" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={subtitle} />
        <meta name="twitter:image" content={`https:${hero.gatsbyImageData}`} />
        <meta name="twitter:image:alt" content={hero.title} />
        <link rel="preconnect" href="https://www.azzinmaharil.me" />
        <link rel="canonical" href={"https://www.azzinmaharil.me/" + slug} />
        <meta name="description" content={brief} />
        <meta content="index,follow" name="robots" />
        <meta content name="copyright" />
        <meta content="Indonesian" name="language" />
        <meta content="index,follow" name="googlebot" />
        <meta content="follow, all" name="Googlebot-Image" />
        <meta content="follow, all" name="Scooter" />
        <meta content="follow, all" name="msnbot" />
        <meta content="follow, all" name="alexabot" />
        <meta content="follow, all" name="Slurp" />
        <meta content="follow, all" name="ZyBorg" />
        <meta content="follow, all" name="Scooter" />
        <meta content="true" name="MSSmartTagsPreventParsing" />
        <meta content="ALL" name="SPIDERS" />
        <meta content="ALL" name="WEBCRAWLERS" />
        <meta
          content="aeiwi, alexa, alltheWeb, altavista, aol netfind, anzwers, canada, directhit, euroseek, excite, overture, go, google, hotbot. infomak, kanoodle, lycos, mastersite, national directory, northern light, searchit, simplesearch, Websmostlinked, webtop, what-u-seek, aol, yahoo, webcrawler, infoseek, excite, magellan, looksmart, bing, cnet, googlebot"
          name="search engines"
        />
      </Helmet>{" "}
      {!isIpadPro && (
        <Link to="/" className={styles.nav}>
          <div className={styles.back}>
            <GatsbyImage image={back.childImageSharp.gatsbyImageData} />{" "}
          </div>{" "}
          <p className={styles.navTitle}> {title} </p>{" "}
        </Link>
      )}{" "}
      <div className={styles.blogPost}>
        <div className={styles.titles}>
          <h1 className={styles.title}> {title} </h1>{" "}
          <h2 className={styles.subtitle}> {subtitle} </h2>{" "}
        </div>{" "}
        <p className={styles.meta}>
          <Link to={"/" + category.slug} className={styles.category}>
            {" "}
            {category.name}{" "}
          </Link>{" "}
          • Dipublikasikan pada {published}{" "}
        </p>{" "}
        <div className={styles.figure}>
          <div className={styles.hero}>
            <GatsbyImage image={hero.gatsbyImageData} />{" "}
          </div>{" "}
          <span className={styles.caption}> {hero.title} </span>{" "}
        </div>{" "}
        <div className={styles.body}> {body && renderRichText(body, options)} </div>{" "}
        {blogs.length > 0 && (
          <div className={styles.recommendation}>
            <h3 className={styles.readmore}> Baca lainnya </h3>{" "}
            <div className={styles.cards}>
              {" "}
              {blogs.map((item) => (
                <Card
                  key={item.id}
                  slug={item.slug}
                  hero={item.hero.gatsbyImageData}
                  category={item.category}
                  createdAt={item.createdAt}
                  title={item.title}
                  subtitle={item.subtitle}
                />
              ))}{" "}
            </div>{" "}
          </div>
        )}{" "}
      </div>
      {isIpadPro ? <Intro header={true} /> : <Intro />}{" "}
    </div>
  );
};

export const query = graphql`
query getSingleBlogAndRecommendation($slug: String){
  blog: contentfulBlogs(slug: { eq: $slug }) {
    title
    subtitle
    publish: createdAt(locale: "ID", formatString: "D MMM, YYYY")
    brief{
      brief
    }
    createdAt
    updatedAt
    keywords
      slug
      tags
      category {
        name
        slug
      }
    hero{
      gatsbyImageData(formats: AUTO layout: CONSTRAINED)
      title
    }
    body{
      raw
      references{
        ...on ContentfulAsset{
          id
          __typename
          gatsbyImageData(formats: AUTO, placeholder: BLURRED)
        }
      }
    }
  }
allContentfulBlogs(sort:{order: DESC, fields: createdAt} ){
  nodes{
    hero{
      gatsbyImageData(formats: AUTO layout: CONSTRAINED)
    }
    category{
      name
    }
    createdAt
    title
    subtitle
    slug
    id
  }
}
 back: file(relativePath: { eq: "Back.png" }){
 childImageSharp{
  gatsbyImageData(layout:FIXED)
} 
}
}
`

BlogTemplate.propTypes = {
  data: propTypes.object.isRequired,
};

export default BlogTemplate;

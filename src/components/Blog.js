import React from "react";
import Card from "./Card";
import * as styles from "../components/Blog.module.scss";
import { graphql, useStaticQuery } from "gatsby";

const getAllBlogs = graphql`
 {
   allContentfulBlogs {
    nodes {
      hero {
        gatsbyImageData(layout: CONSTRAINED)
      }
      category {
        name
      }
      createdAt(locale: "ID", formatString: "D MMM, YYYY")
      title
      subtitle
      slug
      id
    }
  }
}
`;

const Blog = () => {
  const {
    allContentfulBlogs: { nodes: blogs },
  } = useStaticQuery(getAllBlogs);
  return (
    <div className={styles.blog}>
      {" "}
      {blogs.map((blog) => (
        <Card
          key={blog.id}
          slug={blog.slug}
          hero={blog.hero.gatsbyImageData}
          category={blog.category}
          createdAt={blog.createdAt}
          title={blog.title}
          subtitle={blog.subtitle}
        />
      ))}{" "}
    </div>
  );
};

export default Blog;

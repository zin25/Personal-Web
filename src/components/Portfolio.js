import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "../components/portfolio.module.scss";


const getAllPortfolios = graphql `
{
  allContentfulPortofolios(sort: { fields: createdAt, order: DESC }) {
    nodes {
      id
      tags
      title
      subtitle
      github
      hero {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
}`



const Portfolio = () => {
   const {
     allContentfulPortofolios: { nodes: portfolios },
   } = useStaticQuery(getAllPortfolios);
  return (
    <div className={styles.portfolio}>
      {" "}
      {portfolios.map((portofolio) => (
        <div key={portofolio.id} className={styles.card}>
          <a
            href={portofolio.github}
            target="_blank"
            rel="noreferrer"
            className={styles.hero}
          >
            <GatsbyImage image={portofolio.hero.gatsbyImageData} />{" "}
          </a>{" "}
          <div className={styles.caption}>
            <a
              href={portofolio.github}
              target="_blank"
              rel="noreferrer"
              className={styles.title}
            >
              {portofolio.title}{" "}
            </a>{" "}
            <p className={styles.subtitle}> {portofolio.subtitle} </p>{" "}
            <div className={styles.tags}>
            {
                    portofolio.tags.map((tag, index) => ( <span key = {
                            index
                        }
                        className = {
                            styles.tag
                        } > {
                            tag
                        } </span>
                    ))
                }

            </div>{" "}
          </div>{" "}
        </div>
      ))}{" "}
    </div>
  );
};

export default Portfolio;

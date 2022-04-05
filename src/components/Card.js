import React from "react";
import * as styles from "../components/Card.module.scss";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Card = ({ slug, hero, category, createdAt, title, subtitle }) => {
  return (
    <div className={styles.card}>
      <div className={styles.blogpost}>
        <Link to={"/" + slug} className={styles.hero}>
          <GatsbyImage image={hero} alt={title} />{" "}
        </Link>{" "}
        <div className={styles.caption}>
          <p className={styles.header}>
            <Link to={"/"} className={styles.category}>
              {" "}
              {category.name}{" "}
            </Link>{" "}
            • {createdAt}{" "}
          </p>{" "}
          <Link to={"/" + slug} className={styles.titles}>
            <h2 className={styles.title}> {title} </h2>{" "}
            <p className={styles.subtitle}> {subtitle} </p>{" "}
          </Link>{" "}
        </div>{" "}
      </div>{" "}
      <hr className={styles.line} />{" "}
    </div>
  );
};

export default Card;

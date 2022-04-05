import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import * as styles from "../components/Intro.module.scss";
import { GatsbyImage } from "gatsby-plugin-image";

const getImages = graphql`
{
  fluid: file(relativePath:  {eq: "azin.png"}){
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED)
    }
  }
  github: file(relativePath:  {eq: "GitHub.png"}){
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED)
    }
  }
  instagram: file(relativePath:  {eq: "Instagram.png"}){
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED)
    }
  }
  twitter: file(relativePath:  {eq: "Twitter.png"}){
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED)
    }
  }
  linkedin: file(relativePath:  {eq: "LinkedIn.png"}){
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED)
    }
  }
}
`;

const Intro = ({ header }) => {
  const data = useStaticQuery(getImages);
  return (
    <div className={styles.intro}>
        {" "}
      {header && (
        <Link to="/" className={styles.webtitle}>
          Azzin Maharil {" "}
        </Link>
      )}
      <div className={styles.profile}>
        <Link to="/" className={styles.avatar}>
          <GatsbyImage image={data.fluid.childImageSharp.gatsbyImageData} alt="Home" />
        </Link>{" "}
        <div className={styles.socials}>
          <a
            href="https://github.com/zin25"
            target="_blank"
            rel="noreferrer"
            className={styles.icon}
          >
            <GatsbyImage image={data.github.childImageSharp.gatsbyImageData}
              alt="GitHub Page"
            />
          </a>{" "}
          <a
            href="https://instagram.com/azzinmaharill"
            target="_blank"
            rel="noreferrer"
            className={styles.icon}
          >
            <GatsbyImage image={data.instagram.childImageSharp.gatsbyImageData}
              alt="Instagram Page"
            />
          </a>{" "}
          <a
            href="https://twitter.com/Azin2402"
            target="_blank"
            rel="noreferrer"
            className={styles.icon}
          >
            <GatsbyImage image={data.twitter.childImageSharp.gatsbyImageData}
              alt="Twitter Page"
            />
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/azin-maharil-870b31150"
            target="_blank"
            rel="noreferrer"
            className={styles.icon}
          >
            <GatsbyImage image={data.linkedin.childImageSharp.gatsbyImageData}
              alt="Linkedin Page"
            />
          </a>{" "}
        </div>{" "}
      </div>{" "}
      <p className={styles.bio}>
        Mahasiswa Teknik Informatika{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://teknokrat.ac.id"
          className={styles.highlight}
        >
          TEKNOKRAT{" "}
        </a>
        hobi{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://instagram.com/"
          className={styles.highlight}
        >
          bermain games{" "}
        </a>
        , dan gemar membuat{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://dribbble.com/azzinm"
          className={styles.highlight}
        >
          desain interaksi{" "}
        </a>
        .{" "}
      </p>{" "}
      <a href="mailto:jozzieazin@gmail.com" className={styles.hibutton}>
        Sapa saya!
      </a>{" "}
    </div>
  );
};

export default Intro;

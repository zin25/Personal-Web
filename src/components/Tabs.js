import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from './Tabs.module.scss'

 const getIcon = graphql `
 {
  Blog: file(relativePath: {eq: "Blog.png"}) {
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED)
    }
  }
  Achievment: file(relativePath: {eq: "Achievment.png"}) {
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED)
    }
  }
  Portfolio: file(relativePath: {eq: "Portfolio.png"}) {
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED)
    }
  }
}
 `


const activeStyle = {
     background: "var(--btn-text)",
     transition: ".2s",
 }

const Navbar = () => {
    const data = useStaticQuery(getIcon)
    return (

         <div className = {
             styles.tabs
         } >
         <Link className = {styles.tab}
         to = "/" exact = "true" activeStyle = {activeStyle}>
         <div className = {styles.icon}>
         <GatsbyImage image = {data.Blog.childImageSharp.gatsbyImageData}alt = "Blog" />
         </div> <span> Blog </span> 
         </Link>

        <Link className = {styles.tab}
        to = "/portofolio"activeStyle = {activeStyle}>
        <div className = {
            styles.icon}>
        <GatsbyImage image = {data.Portfolio.childImageSharp.gatsbyImageData}alt = "Portofolio" />
        </div> <span > Portofolio </span> </Link>
         </div>

         

    )
}

export default Navbar
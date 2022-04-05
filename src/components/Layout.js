import React from "react";
import Intro from './Intro'
import Tabs from "./Tabs"
import "../styles/global.scss"
import * as styles from './Layout.module.scss'
import Helmet from "react-helmet";

const Layout = ({children}) => {
    return (

        
        <div className = {styles.layout}>
            <Helmet htmlAttributes = {
            {lang: "id",}
            }>
        <meta name = "google-site-verification"
        content="wyLr5WyBGMxD3hABYU2K1TUElPCKDRR6wNkJeQ5mtwI"/>
        <title > Azzin Maharil </title> 
        <meta charset = "utf-8" />
        <meta name = "viewport"
        content = "width=device-width,initial-scale=1,viewport-fit=cover" />
        <meta http-equiv = "x-ua-compatible"
        content = "ie=edge" />
        <link rel = "preconnect"
        href = "https://www.google.com "
        crossOrigin />
        <link rel = "dns-prefetch"
        href = "https://www.google.com" />
        <link rel = "preconnect"
        href = "https://www.google-analytics.com"
        crossOrigin />
        <link rel = "dns-prefetch"
        href = "https://www.google-analytics.com" />
        <meta property = "og:site_name"
        content = "Azzin Maharil" />
        <meta property = "fb:admins"
        content = "azzin.m.9" />
        <meta property = "og:locale"
        content = "id_ID" />
        <meta property = "og:locale:alternate"
        content = "ms_MY" />
        <meta property = "og:title"
        content = "Azzin Maharil" />
        <meta property = "og:description"
        content = "Mahasiswa Informatika" />
        <meta property = "og:type"
        content = "website" />
        <meta property = "og:url"
        content = "https://www.azzinmaharil.me/" />
        <meta property = "og:image"
        content = {`http:`}/>
        <meta property = "og:image:secure_url"
        content = {`https:`}/> 
        <meta property = "og:image:width"
        content = "640" />
        <meta property = "og:image:height"
        content = "640" />
        <meta property = "og:image:alt"
        content = "Azzin Maharil" />
        <meta name = "twitter:card"
        content = "summary_large_image" />
        <meta name = "twitter:image"
        content = {`https:`}/>
        <meta name = "twitter:title"
        content = "Azzin Maharil" />
        <meta name = "twitter:description"
        content = "Mahasiswa Informatika" />
        <meta name = "twitter:site"
        content = "@Azin2402" />
        <meta name = "twitter:creator"
        content = "@Azin2402" />
        <link rel = "preconnect"
        href = "https://www.azzinmaharil.me" />
        <link rel = "canonical"
        href = "https://www.azzinmaharil.me" />
        <meta name = "description"
        content = "Mahasiswa Informatika" />
        <meta content = "index,follow"
        name = "robots" />
        <meta content name = "copyright" />
        < meta content = "Indonesian"
        name = "language" />
        <meta content = "index,follow"
        name = "googlebot" />
        <meta content = "follow, all"
        name = "Googlebot-Image" />
        <meta content = "follow, all"
        name = "Scooter" />
        <meta content = "follow, all"
        name = "msnbot" />
        <meta content = "follow, all"
        name = "alexabot" />
        <meta content = "follow, all"
        name = "Slurp" />
        <meta content = "follow, all"
        name = "ZyBorg" />
        <meta content = "follow, all"
        name = "Scooter" />
        <meta content = "true"
        name = "MSSmartTagsPreventParsing" />
        <meta content = "ALL"
        name = "SPIDERS" />
        <meta content = "ALL"
        name = "WEBCRAWLERS" />
        <meta content = "aeiwi, alexa, alltheWeb, altavista, aol netfind, anzwers, canada, directhit, euroseek, excite, overture, go, google, hotbot. infomak, kanoodle, lycos, mastersite, national directory, northern light, searchit, simplesearch, Websmostlinked, webtop, what-u-seek, aol, yahoo, webcrawler, infoseek, excite, magellan, looksmart, bing, cnet, googlebot"
        name = "search engines" />
        </Helmet>
            <Intro header={true}/>
            <div className = {styles.content}>
            <Tabs /> 
            {children}
            </div>
        </div>
    )
}
export default Layout
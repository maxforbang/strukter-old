/*eslint-disable*/ import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import makeStyles from '@mui/styles/makeStyles';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// @mui/icons-material
import Favorite from "@mui/icons-material/Favorite";
// core components
import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";

import landingPageStyle from "/styles/jss/nextjs-material-kit-pro/pages/landingPageStyle.js";
import MastelaResultsSection from "../page-components/mastela/MastelaResultsSection";
import ProjectsSection from "../page-components/index/ProjectsSection";
import CaseStudyText from "../page-components/mastela/CaseStudyText";

// Sections for this page


const useStyles = makeStyles(landingPageStyle);

export default function LandingPage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        color="transparent"
        brand="NextJS Material Kit PRO"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 50,
          color: "white"
        }}
        {...rest}
      />

        <MastelaResultsSection/>
        <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
                <CaseStudyText/>
            </div>
        </div>

      {/*<Footer*/}
      {/*  content={*/}
      {/*    <div>*/}
      {/*      <div className={classes.left}>*/}
      {/*        <List className={classes.list}>*/}
      {/*          <ListItem className={classes.inlineBlock}>*/}
      {/*            <a*/}
      {/*              href="https://www.creative-tim.com/?ref=njsmkp-landing"*/}
      {/*              target="_blank"*/}
      {/*              className={classes.block}*/}
      {/*            >*/}
      {/*              Creative Tim*/}
      {/*            </a>*/}
      {/*          </ListItem>*/}
      {/*          <ListItem className={classes.inlineBlock}>*/}
      {/*            <a*/}
      {/*              href="https://www.creative-tim.com/presentation?ref=njsmkp-landing"*/}
      {/*              target="_blank"*/}
      {/*              className={classes.block}*/}
      {/*            >*/}
      {/*              About us*/}
      {/*            </a>*/}
      {/*          </ListItem>*/}
      {/*          <ListItem className={classes.inlineBlock}>*/}
      {/*            <a*/}
      {/*              href="http://blog.creative-tim.com/?ref=njsmkp-landing"*/}
      {/*              className={classes.block}*/}
      {/*            >*/}
      {/*              Blog*/}
      {/*            </a>*/}
      {/*          </ListItem>*/}
      {/*          <ListItem className={classes.inlineBlock}>*/}
      {/*            <a*/}
      {/*              href="https://www.creative-tim.com/license?ref=njsmkp-landing"*/}
      {/*              target="_blank"*/}
      {/*              className={classes.block}*/}
      {/*            >*/}
      {/*              Licenses*/}
      {/*            </a>*/}
      {/*          </ListItem>*/}
      {/*        </List>*/}
      {/*      </div>*/}
      {/*      <div className={classes.right}>*/}
      {/*        &copy; {1900 + new Date().getYear()} , made with{" "}*/}
      {/*        <Favorite className={classes.icon} /> by{" "}*/}
      {/*        <a*/}
      {/*          href="https://www.creative-tim.com/?ref=njsmkp-landing"*/}
      {/*          target="_blank"*/}
      {/*        >*/}
      {/*          Creative Tim*/}
      {/*        </a>{" "}*/}
      {/*        for a better web.*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  }*/}
      {/*/>*/}
    </div>
  );
}

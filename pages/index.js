/*eslint-disable*/ import React from "react";

import classNames from "classnames";
import makeStyles from '@mui/styles/makeStyles';

import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";

import landingPageStyle from "/styles/jss/nextjs-material-kit-pro/pages/landingPageStyle.js";

// Sections for this page

import PhoneSection from "../page-components/index/PhoneSection";
import FeaturesSection from "../page-components/index/FeaturesSection";
import TestimonialSection from "../page-components/index/TestimonialSection";
import MacBookSection from "../page-components/index/MacBookSection";
import ProjectsSection from "../page-components/index/ProjectsSection";
import WorkSection from "../page-components/index/WorkSection";
import Link from "next/link";

const useStyles = makeStyles(landingPageStyle);

export default function Home() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    const classes = useStyles();

    const handleConsultationButton = () => {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <Header
                color="transparent"
                brand="Strukter"
                links={<HeaderLinks dropdownHoverColor="info" />}
                fixed
                changeColorOnScroll={{
                    height: 300,
                    color: "white"
                }}
            />
            <Parallax image="/img/home/header2.jpg" filter="dark">
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={6} md={6}>
                            <h1 className={classes.title}>Make your AirBnB business come alive.</h1>
                            <h4>
                                Your investments should be working for you, not the other way around. Take full advantage of leveraging
                                automation in the digital age to attract new guests and keep old ones.
                            </h4>
                            <br />
                                <Button
                                    color={"linkedin"}
                                    target="_blank"
                                    className={classes.navButton}
                                    round
                                    size="lg"
                                    onClick={handleConsultationButton}
                                >
                                    Free Consultation
                                </Button>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)} >
                <div >


                    <FeaturesSection />
                    <MacBookSection />
                    <ProjectsSection />
                    <PhoneSection />
                    {/*<GridSection />*/}
                    <TestimonialSection id="testimonials" />
                    <div id='contact-form'>
                    <WorkSection/>
                    </div>
                </div>
            </div>
            <Footer
/*                content={
                    <div>
                        <div className={classes.left}>
                            <List className={classes.list}>
                                <ListItem className={classes.inlineBlock}>
                                    <a
                                        href="https://www.creative-tim.com/?ref=njsmkp-landing"
                                        target="_blank"
                                        className={classes.block}
                                    >
                                        Creative Tim
                                    </a>
                                </ListItem>
                                <ListItem className={classes.inlineBlock}>
                                    <a
                                        href="https://www.creative-tim.com/presentation?ref=njsmkp-landing"
                                        target="_blank"
                                        className={classes.block}
                                    >
                                        About us
                                    </a>
                                </ListItem>
                                <ListItem className={classes.inlineBlock}>
                                    <a
                                        href="http://blog.creative-tim.com/?ref=njsmkp-landing"
                                        className={classes.block}
                                    >
                                        Blog
                                    </a>
                                </ListItem>
                                <ListItem className={classes.inlineBlock}>
                                    <a
                                        href="https://www.creative-tim.com/license?ref=njsmkp-landing"
                                        target="_blank"
                                        className={classes.block}
                                    >
                                        Licenses
                                    </a>
                                </ListItem>
                            </List>
                        </div>
                        <div className={classes.right}>
                            &copy; {1900 + new Date().getYear()} , made with{" "}
                            <Favorite className={classes.icon} /> by{" "}
                            <a
                                href="https://www.creative-tim.com/?ref=njsmkp-landing"
                                target="_blank"
                            >
                                Creative Tim
                            </a>{" "}
                            for a better web.
                        </div>
                    </div>
                }*/
            />
        </div>
    );
}
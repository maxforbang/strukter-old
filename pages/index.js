/*eslint-disable*/ import React, {useEffect, useRef} from "react";

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
import Typed from 'typed.js';


// Sections for this page
import PhoneSection from "../page-components/index/PhoneSection";
import FeaturesSection from "../page-components/index/FeaturesSection";
import MacBookSection from "../page-components/index/MacBookSection";
import ProjectsSection from "../page-components/index/ProjectsSection";
import ContactSection from "../page-components/index/ContactSection";
import {FadeInWhenVisible, FadeInWhenVisibleHorizontal} from "../animations/FadeInWhenVisible";

const useStyles = makeStyles(landingPageStyle);

export default function Home() {
    // let options = {
    //     strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
    //     typeSpeed: 40,
    //     smartBackspace: true
    // };
    //
    // let typed = new Typed('#typedd', options);


    function TypedHeader() {
        const typedRef = useRef(null);

        useEffect(() => {
            const options = {
                strings: ['Let your AirBnB business work for you.', 'Let your AirBnB business run by itself.', 'Let your AirBnB business come alive.'],
                typeSpeed: 50,
                backSpeed: 30,
                loop: true,
                smartBackspace: true,
                showCursor: false,
            };

            const typed = new Typed(typedRef.current, options);

            return () => {
                typed.destroy();
            };
        }, []);

        return <h1 className={classes.title} style={{maxWidth:'900px'}} ref={typedRef}></h1>;
    }

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
            <Parallax image='https://ik.imagekit.io/strukter/Strukter/Landing/header?w=3000' filter="dark">
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={7} md={7}>
                            {/*<h1 className={classes.title} id='typedd'>Let your AirBnB business come alive.</h1>*/}
                            <TypedHeader />
                            <FadeInWhenVisibleHorizontal initial={-100} duration={1.5}>
                            <h4 style={{maxWidth: '500px'}}>
                                Your investments should be working for you, not the other way around. Take full advantage of leveraging
                                automation in the digital age to attract new guests and keep old ones.
                            </h4>
                            </FadeInWhenVisibleHorizontal>
                            <br />
                            <FadeInWhenVisible duration={4}>
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
                            </FadeInWhenVisible>
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
                    {/*<TestimonialSection id="testimonials" />*/}
                    <ContactSection/>
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
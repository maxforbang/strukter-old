import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import makeStyles from "@mui/styles/makeStyles";
// @mui/icons-material
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Quote from "/components/Typography/Quote.js";
// core components

import sectionTextStyle from "/styles/jss/nextjs-material-kit-pro/pages/blogPostSections/sectionTextStyle.js";

const useStyles = makeStyles(sectionTextStyle);

export default function CaseStudyText() {
  const classes = useStyles();
  const imgClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <GridContainer justifyContent="center">
        <GridItem xs={12} sm={8} md={8}>
          <h2 className={classes.title}>
            Background & Objectives
          </h2>
          <p>
            Thomas and Anna are vacation rental property owners who have 4 properties in Cape Coral, Florida totalling at over $5 million in real estate. Thomas has over a decade of experience leasing out apartments to students in college towns, however, he was new to vacation rentals. In their first year of investing in short-term vacation rentals, they struggled to maintain profits after AirBnB and their rental management company took their cut of their bookings. For every booking, they were paying a 20% fee to their management company (plus vague, expensive service fees) and a 12.5% hosting fee to AirBnB. On top of that, their rental management company managed so many other properties that they barely had time to give their properties the time and attention they needed to grow, and as a result, weren’t able to provide them with many bookings. They tried switching management properties two times before deciding to take matters into their own hands.
            <br />
            <br />
            He realized that he needed a way to find high-paying guests and manage all of the guest communication himself. His goal was to attract guests who were willing to pay a premium for a luxury vacation rental experience, so he needed to differentiate his properties from competitors and offer exceptional service. Thomas's first challenge was to create a direct booking website that would showcase his properties and offer an easy booking process to potential guests.
          </p>
          <Quote
            textClassName={classes.quoteText}
            text="“There's no way I'm going to make a profit with the way things are currently going.”"
            author="Thomas Forbang, Vacation Rental Property Owner."
          />
        </GridItem>
        {/*<GridItem xs={12} sm={10} md={10} className={classes.section}>*/}
        {/*  <GridContainer>*/}
        {/*    <GridItem xs={12} sm={4} md={4}>*/}
        {/*      <img*/}
        {/*        src="/img/examples/blog4.jpg"*/}
        {/*        alt="..."*/}
        {/*        className={imgClasses}*/}
        {/*      />*/}
        {/*    </GridItem>*/}
        {/*    <GridItem xs={12} sm={4} md={4}>*/}
        {/*      <img*/}
        {/*        src="/img/examples/blog3.jpg"*/}
        {/*        alt="..."*/}
        {/*        className={imgClasses}*/}
        {/*      />*/}
        {/*    </GridItem>*/}
        {/*    <GridItem xs={12} sm={4} md={4}>*/}
        {/*      <img*/}
        {/*        src="/img/examples/blog1.jpg"*/}
        {/*        alt="..."*/}
        {/*        className={imgClasses}*/}
        {/*      />*/}
        {/*    </GridItem>*/}
        {/*  </GridContainer>*/}
        {/*</GridItem>*/}
        <GridItem xs={12} sm={8} md={8}>
          <h2 className={classes.title}>Solution & Results</h2>
          <p>
            Thomas and Anna and Anna had beautiful homes, however, they simply weren't getting the recognition they deserved. To address this challenge, I created a direct booking website that would rank high on search engines, drive traffic, and ultimately increase bookings. I helped them create a brand and digital presence that would instill trust in anyone deciding to book a vacation on their site. The website itself included high-quality photos and descriptions of each property, as well as a consistently managed blog that highlighted local attractions and events.
          </p>
          <p>
            We then created a custom Owner Dashboard for Thomas and Anna that allowed them to control all the finances, customer support, and security of all their properties in one place. Each house received a digital keypad with codes that are automatically rotated between bookings. This feature gave Thomas and Anna greater control over their properties and allowed them to manage them efficiently, all while living in another state.          </p>
          <p>
            To enhance the guest experience, I guided Thomas and Anna through setting up Smart Home features in all of their properties. I created a Guest Smart Home app that enables guests to control smart home functionality, such as turning on/off lights, controlling the temperature of the house/pool, locking doors, and controlling the sound system. All the smart home functionality for each house is also controllable by Thomas and Anna themselves through the Owner Dashboard. The app includes a digital guidebook which answers guests’s FAQ’s and a local area guide which informs guests on how to make the most of their stay. I’m currently in the process of creating an AI-powered chatbot for the app that can answer questions specific to each of Thomas and Anna’s properties and the general Cape Coral area.          </p>
          <p>
            After the website, blog, and smart-home functionality went live, Thomas and Anna saw a significant increase in bookings and attracted high-paying guests who appreciated the exceptional service and luxury experience they provided. They also saved money from AirBnB and rental management fees since they no longer needed them to attract guests or run their properties. By cutting out the middle-man, Thomas and Anna make more per booking and guests actually pay less than they would on AirBnB by booking directly through the website.          </p>
          <p>
            The Owner Dashboard has helped them manage their properties more efficiently, and the Guest Smart Home app has helped them receive rave reviews from guests. Other property owners in the area have recently asked Thomas and Anna to manage their properties as well. This has given them ideas to start their own rental management company- one that is consistently able to attract guests and is transparent with service fees and owner finance, inspired by their bad experience of their previous management companies’ failings of the past. Right now they manage all of their properties themselves but they have plans on hiring more staff soon and bringing all of their service contractors in-house (cleaning people, pool service, and more managers) which they can easily onboard and manage through their newly-created Owner Dashboard.
          </p>
          <p>
            Thomas and Anna's rental business is now thriving, and most of the time spent on their business involves expanding their portfolio with additional properties. They can now focus on providing exceptional service to their guests while the Owner Dashboard and Guest Smart Home app take care of the rest. They’ve cultivated exceptional relationships with many of their clients, resulting in double the amount of repeat guests. Thomas and Anna's rental business has become a profitable venture, and they have achieved their goal of attracting high-paying guests while also freeing up their schedule to spend time with their family and focus on what they love.          </p>
        </GridItem>
      </GridContainer>
    </div>
  );
}

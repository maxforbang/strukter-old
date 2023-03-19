import React from "react";
import makeStyles from '@mui/styles/makeStyles';
// @mui/icons-material
import Chat from "@mui/icons-material/Chat";
import VerifiedUser from "@mui/icons-material/VerifiedUser";
import Fingerprint from "@mui/icons-material/Fingerprint";
import GroupWork from "@mui/icons-material/GroupWork";
import Airplay from "@mui/icons-material/Airplay";
import LocationOn from "@mui/icons-material/LocationOn";
import Extension from "@mui/icons-material/Extension";
import ChildFriendly from "@mui/icons-material/ChildFriendly";
import WatchLater from "@mui/icons-material/WatchLater";
import Code from "@mui/icons-material/Code";
import FormatPaint from "@mui/icons-material/FormatPaint";
import Dashboard from "@mui/icons-material/Dashboard";
import ViewCarousel from "@mui/icons-material/ViewCarousel";
import AccessTime from "@mui/icons-material/AccessTime";
import AttachMoney from "@mui/icons-material/AttachMoney";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";

import featuresStyle from "/styles/jss/nextjs-material-kit-pro/pages/sectionsSections/featuresStyle.js";
import {Box} from "@mui/material";
import {CurrencyExchange, HistoryEdu, HolidayVillage, LockClock, MenuBookOutlined, Web} from "@mui/icons-material";

const useStyles = makeStyles(featuresStyle);

export default function MastelaResultsSection({ ...rest }) {
  const classes = useStyles();
  return (
      <Box
        className={classes.features5}
        style={{ backgroundImage: "url('https://ik.imagekit.io/strukter/Strukter/Encore.jpg/tr:w-1500')" }}
      >
        <GridContainer className={classes.margin0}>
          <GridItem
            xs={12}
            sm={8}
            md={8}
            className={
              classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
            }
          >
            <Box mt={10}>
              <h1 className={classes.title}>Mastela Vacations Complete Overhaul</h1>
            </Box>
          </GridItem>
          <div className={classes.container}>
            <GridContainer
              className={classes.gridContainer}
              style={{ margin: "0!important" }}
            >
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={Web}
                  title="Direct Booking Website"
                  description={
                    <p>
                      I cut out the middleman for many of their bookings -
                      guests were paying less and Mastela was making more. More personalized
                      communication also resulted in more return guests and opportunities to refer
                      their friends.

                    </p>
                  }
                  iconColor="info"
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={HistoryEdu}
                  title="Weekly Blog"
                  description={
                    <p>
                      Created a blog that is still maintained weekly by me. This is the most exciting format
                      to provide guests with a detailed local area guide.
                      Mastela saves a lot of time answering questions by referring customers to the blog's local recommendations.
                    </p>
                  }
                  iconColor="danger"
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={MenuBookOutlined}
                  title="Digital Welcome Book"
                  description={
                    <p>
                      Created a custom guidebook for each property which contain all the information
                      a guest needs before, during, and after their stay: check-in/out procedures, house rules,
                      and even a straight-to-the-point version of the local area guide.
                    </p>
                  }
                  iconColor="primary"
                />
              </GridItem>
            </GridContainer>
            <GridContainer
              className={classes.gridContainer}
              style={{ margin: "0!important" }}
            >
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={LockClock}
                  title="Automatic Reviews + Keypad Codes"
                  description={
                    <p>
                      Email each guest after their stay gently reminding them to leave a review.
                      Automatically generate and email a new digital keypad combination for each guest before their stay. Removed the need for separate, physical
                      keys for each guest, cleaner, and owner.
                    </p>
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={CurrencyExchange}
                  title="Smart Pricing"
                  description={
                    <p>
                      Use Machine Learning to automatically set prices for each day of the week, month, and year.
                      Resulted in higher priced bookings in the peak season and more overall bookings in the slow season.
                    </p>
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={HolidayVillage}
                  title="Optimized Listings"
                  description={
                    <p>
                      Audited photos, descriptions, refund & pet policy, and even ordering of photos
                      of each listing on various booking channels. There's a science to ranking high on
                      the OTA algorithms- I make sure listings conform to it.
                    </p>
                  }
                />
              </GridItem>
            </GridContainer>
          </div>
        </GridContainer>
      </Box>
  );
}

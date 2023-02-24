import React from "react";
import makeStyles from "@mui/styles/makeStyles";

// @mui/icons-material

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import CustomInput from "/components/CustomInput/CustomInput.js";
import Button from "/components/CustomButtons/Button.js";

import workStyle from "/styles/jss/nextjs-material-kit-pro/pages/landingPageSections/workStyle.js";

const useStyles = makeStyles(workStyle);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justifyContent="center">
        <GridItem cs={12} sm={8} md={8}>
          <h2 className={classes.title}>How to Reach Me</h2>
          <h4 className={classes.description}>
            Have a question? Want to schedule a call? Fill out the form below and I'll get back to you within 24 hours.
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={6} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                }}
              />
              <GridItem
                xs={12}
                sm={4}
                md={4}
                className={classes.mrAuto}
              >
                <Button round color="linkedin">Send Message</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}

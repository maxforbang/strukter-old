import React from "react";
import makeStyles from "@mui/styles/makeStyles";


// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";


import workStyle from "/styles/jss/nextjs-material-kit-pro/pages/landingPageSections/workStyle.js";

import {Box, useMediaQuery} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {InlineWidget} from "react-calendly";
import TabPanel from "./TabPanel";
import EmailForm from "./EmailForm";
import {FadeInWhenVisible, FadeInWhenVisibleHorizontal} from "../../../animations/FadeInWhenVisible";

const useStyles = makeStyles(workStyle);

export default function ContactSection() {
	const classes = useStyles();

	const [value, setValue] = React.useState(0);
	const isMobile = useMediaQuery('(max-width:1200px)');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	function a11yProps(index) {
		return {
			id: `simple-tab-${index}`,
			'aria-controls': `simple-tabpanel-${index}`,
		};
	}

	return (
		<div className={classes.section}>
			<GridContainer justifyContent='center'>
				<GridItem cs={12} sm={8} md={8} display='flex' justifyContent='center' flexDirection='column'>
					<FadeInWhenVisible>
						<h2 className={classes.title}>How to Reach Me</h2>
						<h4 className={classes.description}>
							Send me a message or book a call below.
						</h4>
					</FadeInWhenVisible>
				</GridItem>
				<GridItem xs={12} lg={8}>
					<FadeInWhenVisibleHorizontal initial={-300} duration={1.5}>
						<Box sx={{justifyContent: 'center', display: 'flex'}} mt={3} width='100%'>
							<Tabs value={value} onChange={handleChange}
							      textColor="primary"
							      indicatorColor="primary"
							>
								<Tab label="Send Message" {...a11yProps(0)} />
								<Tab label="Book a Call" {...a11yProps(1)} />
							</Tabs>
						</Box>
					</FadeInWhenVisibleHorizontal>
				</GridItem>
				<GridItem mt={2} lg={8}>
					<FadeInWhenVisible duration={2}>
						<TabPanel value={value} index={0}>
							<EmailForm isMobile={isMobile}/>
						</TabPanel>
						<TabPanel value={value} index={1}>
							<InlineWidget url="https://calendly.com/strukter/30min"/>
						</TabPanel>
					</FadeInWhenVisible>
				</GridItem>
			</GridContainer>


		</div>
	);
}


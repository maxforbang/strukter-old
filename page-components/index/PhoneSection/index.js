import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import InfoArea from "../../../components/InfoArea/InfoArea";
import Extension from "@mui/icons-material/Extension";
import ChildFriendly from "@mui/icons-material/ChildFriendly";
import WatchLater from "@mui/icons-material/WatchLater";
import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import featuresStyle from "../../../styles/jss/nextjs-material-kit-pro/pages/sectionsSections/featuresStyle";
import InfoAreaPhone from "./InfoAreaPhone";
import Dashboard from "@mui/icons-material/Dashboard";
import {
	DashboardOutlined,
	DashboardRounded,
	DashboardTwoTone,
	LibraryBooksOutlined,
	PhoneIphone
} from "@mui/icons-material";

const useStyles = makeStyles(featuresStyle)
export default function PhoneSection() {

	const classes = useStyles();

	return (
		<div className={classes.container}>
			<div className={classes.features3}>
				<GridContainer>
					<GridItem xs={12} sm={6} md={6}>
						<div className={classes.phoneContainer}>
							<img src="img/home/iphone-dashboard.png" alt="..."/>
						</div>
					</GridItem>
					<GridItem xs={12} sm={6} md={6}>
						<h2 className={classes.title}>Everything. All in One Place.</h2>
						{/*Prices are automatically set, keypad combinations automatically generated,*/}
						<InfoAreaPhone
							className={classes.infoArea}
							icon={DashboardOutlined}
							title="Owner Dashboard"
							description={<p>Communicate with guests and contractors with <strong> every inbox combined into one. </strong> Receive real-time alerts and notifications about bookings and guest inquiries, never missing an important message. <strong>Remotely control cameras and other smart home features</strong> and set what guests are allowed to do.</p>}
							iconColor="primary"
						/>
						<InfoAreaPhone
							className={classes.infoArea}
							icon={PhoneIphone}
							title="Guest App"
							description={<p>Allow guests to <strong>control locks, lighting, music, and pool/house temperatures</strong> during their stay. Included chat widget allowing instant communication with you (or your virtual assistant) and preemptive answers to any general questions with <strong>powerful, human-friendly AI.</strong></p>}
							iconColor="primary"
						/>
						<InfoAreaPhone
							className={classes.infoArea}
							icon={LibraryBooksOutlined}
							title="Digital Guidebook"
							description={<p><strong>All the information a guest needs</strong>, from check-in to check-out. Includes a local area guide with activity recommendations, restaurant reservations, and transportation options <strong>to help guests make the most of their stay</strong>, as well as basic instructions and information tailored to each house.</p>}
							iconColor="primary"
						/>
					</GridItem>
				</GridContainer>
			</div>
		</div>
	)
}
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import InfoArea from "../../components/InfoArea/InfoArea";
import Extension from "@mui/icons-material/Extension";
import ChildFriendly from "@mui/icons-material/ChildFriendly";
import WatchLater from "@mui/icons-material/WatchLater";
import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import featuresStyle from "../../styles/jss/nextjs-material-kit-pro/pages/sectionsSections/featuresStyle";
import GroupWork from "@mui/icons-material/GroupWork";
import Airplay from "@mui/icons-material/Airplay";
import LocationOn from "@mui/icons-material/LocationOn";

const useStyles = makeStyles(featuresStyle)
export default function FeaturesSection() {

	const classes = useStyles();

	return (
		<div className={classes.container}>
			<div className={classes.features2}>
				<GridContainer>
					<GridItem
						xs={12}
						sm={8}
						md={8}
						className={
							classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
						}
					>
						<h2 className={classes.title}>What I Do</h2>
						<h5 className={classes.description}>
							I help AirBnB owners make more money with less time by creating automated systems that increase bookings and allow rental properties to run smoothly while you sleep.
						</h5>
					</GridItem>
				</GridContainer>
				<GridContainer>
					<GridItem xs={12} sm={4} md={4}>
						<InfoArea
							icon={GroupWork}
							title="Web Development"
							description={
								<span>
                    <p>
                      Have 100% control over your bookings and guest communication with a custom website that not only looks great but also drives bookings and revenue.
                    </p>
{/*                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Find more...
                    </a>*/}
                  </span>
							}
							iconColor="info"
						/>
					</GridItem>
					<GridItem xs={12} sm={4} md={4}>
						<InfoArea
							icon={Airplay}
							title="BnB Marketing"
							description={
								<span>
                    <p>
                      Create a rock-solid digital presence that isn't reliant on the mercy of online travel agencies like AirBnB or Vrbo to attract new guests.
                    </p>
{/*                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Find more...
                    </a>*/}
                  </span>
							}
							iconColor="danger"
						/>
					</GridItem>
					<GridItem xs={12} sm={4} md={4}>
						<InfoArea
							icon={LocationOn}
							title="Smart Home Integration"
							description={
								<span>
                    <p>
                      Automate locks, keypad codes, and security cameras. Allow your guests to control the lighting, temperature, and sound system from a single app.
                    </p>
{/*                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Find more...
                    </a>*/}
                  </span>
							}
							iconColor="success"
						/>
					</GridItem>
				</GridContainer>
			</div>
		</div>
	)
}
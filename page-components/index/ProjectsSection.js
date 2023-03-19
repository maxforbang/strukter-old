import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import Button from "../../components/CustomButtons/Button";
import Icon from "@mui/material/Icon";
import Build from "@mui/icons-material/Build";
import Subject from "@mui/icons-material/Subject";
import projectsStyle from "../../styles/jss/nextjs-material-kit-pro/pages/sectionsSections/projectsStyle";
import {FadeInWhenVisibleHorizontal, FadeInWhenVisibleVertical} from "../../animations/FadeInWhenVisible";
import {HistoryEdu} from "@mui/icons-material";
import Link from "next/link";

const useStyles = makeStyles(projectsStyle)
export default function ProjectsSection() {

	const classes = useStyles();

	return (
		<div className={classes.projects}>
			<div className={classes.container}>
				<GridContainer>
					<GridItem
						xs={12}
						sm={8}
						md={8}
						className={
							classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
						}
					>
						<h2 className={classes.title}>
							My Results
						</h2>
						{/*<NavPills*/}
						{/*	alignCenter*/}
						{/*	color="rose"*/}
						{/*	tabs={[*/}
						{/*		{ tabButton: "All", tabContent: "" },*/}
						{/*		{ tabButton: "Marketing", tabContent: "" },*/}
						{/*		{ tabButton: "Development", tabContent: "" },*/}
						{/*		{ tabButton: "Productivity", tabContent: "" },*/}
						{/*		{ tabButton: "Web Design", tabContent: "" }*/}
						{/*	]}*/}
						{/*/>*/}
						{/*<div className={classes.tabSpace} />*/}
					</GridItem>
				</GridContainer>
				<GridContainer>
					<GridItem xs={12} sm={12} md={12}>
						<FadeInWhenVisibleVertical initial={100} duration={1}>
							<Card
								raised
								background
								style={{
									backgroundImage: "url('https://ik.imagekit.io/strukter/Strukter/Landing/project-1.jpg/tr:w-1200)"
								}}
							>
								<CardBody background>
									<h6 className={classes.cardCategory}>Direct Booking Site</h6>
									<Link href="/mastela">
										<a>
											<h3 className={classes.cardTitleWhite}>
												21% Increase in Revenue from Bookings
											</h3>
										</a>
									</Link>
									<p className={classes.cardDescription}>
										Skipping AirBnB fees means that you enjoy higher returns while also saving
										guests money.
										Have 100% control over your bookings and guest communication with a custom
										website that not only looks great but also drives bookings and revenue.
									</p>
									<Link href="/mastela">
										<Button round color="warning">
											<Subject/> Case study
										</Button>
									</Link>
								</CardBody>
							</Card>
						</FadeInWhenVisibleVertical>
					</GridItem>
					<GridItem xs={12} sm={6} md={6}>
						<FadeInWhenVisibleHorizontal initial={-100} duration={1}>
							<Card
								raised
								background
								style={{backgroundImage: "url('https://ik.imagekit.io/strukter/Strukter/Landing/projects-2.jpg/tr:w-800')"}}
							>
								<CardBody background>
									<h6 className={classes.cardCategory}>SEO & Branding</h6>
									<Link href="/mastela">
										<a href="/mastela">
											<h3 className={classes.cardTitleWhite}>
												More Organic Traffic and Repeat Guests
											</h3>
										</a>
									</Link>
									<p className={classes.cardDescription}>
										Make your rentals easily discoverable by potential guests with Search Engine
										Optimization (SEO) and a consistently updated newsletter
										filled with specially curated content that keeps guests coming back for more.
									</p>
									<Link href="/mastela">
										<Button round color="info">
											<HistoryEdu/>
											View Campaign
										</Button>
									</Link>
								</CardBody>
							</Card>
						</FadeInWhenVisibleHorizontal>
					</GridItem>
					<GridItem xs={12} sm={6} md={6}>
						<FadeInWhenVisibleHorizontal initial={100} duration={1}>
							<Card
								raised
								background
								style={{
									backgroundImage: "url('https://ik.imagekit.io/strukter/Strukter/Landing/projects-3.jpg/tr:w-800')"
								}}
							>
								<CardBody background>
									<h6 className={classes.cardCategory}>Smart Home Guest App</h6>
									<Link href="/mastela">

										<a href="/mastela">
											<h3 className={classes.cardTitleWhite}>
												Better Reviews and Guest Experience
											</h3>
										</a>
									</Link>
									<p className={classes.cardDescription}>
										Stand out from other properties by providing an all-inclusive mobile app that
										allows guests
										to control lighting, temperature, and music with just a few taps. Create an
										unforgettable guest experience that they're sure to rave about.
										{/*In addition, provide local recommendations, reservations, and transportation options that help them make the most of their stay.*/}
									</p>
									<Link href="/mastela">
										<Button round color="danger">
											<Icon>phone_iphone</Icon> View App
										</Button>
									</Link>
								</CardBody>
							</Card>
						</FadeInWhenVisibleHorizontal>
					</GridItem>
				</GridContainer>
			</div>
		</div>
	)
}
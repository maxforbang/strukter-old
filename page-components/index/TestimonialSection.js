import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import InfoArea from "../../components/InfoArea/InfoArea";
import Extension from "@mui/icons-material/Extension";
import ChildFriendly from "@mui/icons-material/ChildFriendly";
import WatchLater from "@mui/icons-material/WatchLater";
import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import featuresStyle from "../../styles/jss/nextjs-material-kit-pro/pages/sectionsSections/featuresStyle";
import testimonialsStyle from "../../styles/jss/nextjs-material-kit-pro/pages/sectionsSections/testimonialsStyle";
import Card from "../../components/Card/Card";
import FormatQuote from "@mui/icons-material/FormatQuote";
import CardBody from "../../components/Card/CardBody";
import CardFooter from "../../components/Card/CardFooter";
import CardAvatar from "../../components/Card/CardAvatar";

const useStyles = makeStyles(testimonialsStyle)
export default function TestimonialSection() {

	const classes = useStyles();

	return (
		<div
			className={classes.testimonials + " " + classes.sectionImage}
			style={{ backgroundImage: "url('/img/dg2.jpg')" }}
		>
			<div className={classes.container}>
				<GridContainer>
					<GridItem
						xs={12}
						sm={6}
						md={6}
						className={
							classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
						}
					>
						<h2 className={classes.title}>What My Clients Say</h2>
						<h5 className={classes.description}>
							You need more information? Check what other persons are saying
							about our product. They are very happy with their purchase.
						</h5>
					</GridItem>
				</GridContainer>
				<GridContainer>
					<GridItem xs={12} sm={4} md={4}>
						<Card testimonial className={classes.card1}>
							<div className={classes.icon}>
								<FormatQuote />
							</div>
							<CardBody>
								<h5 className={classes.cardDescription}>
									Your products, all the kits that I have downloaded from your
									site and worked with are sooo cool! I love the color
									mixtures, cards... everything. Keep up the great work!
								</h5>
							</CardBody>
							<CardFooter testimonial>
								<h4 className={classes.cardTitle}>Alec Thompson</h4>
								<h6 className={classes.cardCategory}>@ALECTHOMPSON</h6>
								<CardAvatar testimonial testimonialFooter>
									<a href="#pablo" onClick={(e) => e.preventDefault()}>
										<img
											src="/img/faces/card-profile1-square.jpg"
											alt="..."
										/>
									</a>
								</CardAvatar>
							</CardFooter>
						</Card>
					</GridItem>
					<GridItem xs={12} sm={4} md={4}>
						<Card testimonial className={classes.card1}>
							<div className={classes.icon}>
								<FormatQuote />
							</div>
							<CardBody>
								<h5 className={classes.cardDescription}>
									{'"'}Don{"'"}t be scared of the truth because we need to
									restart the human foundation in truth. That{"'"}s why I love
									you like Kanye loves Kanye I love Rick Owens’ bed design but
									the back is not so attractive{'"'}
								</h5>
							</CardBody>
							<CardFooter testimonial>
								<h4 className={classes.cardTitle}>Gina Andrew</h4>
								<h6 className={classes.cardCategory}>@GINAANDREW</h6>
								<CardAvatar testimonial testimonialFooter>
									<a href="#pablo" onClick={(e) => e.preventDefault()}>
										<img
											src="/img/faces/card-profile4-square.jpg"
											alt="..."
										/>
									</a>
								</CardAvatar>
							</CardFooter>
						</Card>
					</GridItem>
					<GridItem xs={12} sm={4} md={4}>
						<Card testimonial className={classes.card1}>
							<div className={classes.icon}>
								<FormatQuote />
							</div>
							<CardBody>
								<h5 className={classes.cardDescription}>
									{'"'}Your products, all the kits that I have downloaded from
									your site and worked with are sooo cool! I love the color
									mixtures, cards... everything. Keep up the great work!{'"'}
								</h5>
							</CardBody>
							<CardFooter testimonial>
								<h4 className={classes.cardTitle}>George West</h4>
								<h6 className={classes.cardCategory}>@GEORGEWEST</h6>
								<CardAvatar testimonial testimonialFooter>
									<a href="#pablo" onClick={(e) => e.preventDefault()}>
										<img
											src="/img/faces/card-profile2-square.jpg"
											alt="..."
										/>
									</a>
								</CardAvatar>
							</CardFooter>
						</Card>
					</GridItem>
				</GridContainer>
			</div>
		</div>	)
}
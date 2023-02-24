import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import InfoArea from "../../components/InfoArea/InfoArea";
import Extension from "@mui/icons-material/Extension";
import ChildFriendly from "@mui/icons-material/ChildFriendly";
import WatchLater from "@mui/icons-material/WatchLater";
import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import featuresStyle from "../../styles/jss/nextjs-material-kit-pro/pages/sectionsSections/featuresStyle";
import Code from "@mui/icons-material/Code";
import FormatPaint from "@mui/icons-material/FormatPaint";
import Dashboard from "@mui/icons-material/Dashboard";
import ViewCarousel from "@mui/icons-material/ViewCarousel";
import AccessTime from "@mui/icons-material/AccessTime";
import AttachMoney from "@mui/icons-material/AttachMoney";

const useStyles = makeStyles(featuresStyle)
export default function GridSection() {

	const classes = useStyles();

	return (
		<div className={classes.container}>
			<div
				className={classes.features5}
				style={{ backgroundImage: "url('/img/bg9.jpg')" }}
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
						<h2 className={classes.title}>Your life will be much easier</h2>
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
									icon={Code}
									title="For Developers"
									description={
										<p>
											The moment you use Material Kit, you know you’ve never
											felt anything like it. With a single use, this powerfull
											UI Kit lets you do more than ever before.
										</p>
									}
									iconColor="info"
								/>
							</GridItem>
							<GridItem xs={12} sm={4} className={classes.gridItem}>
								<InfoArea
									vertical
									className={classes.infoArea5}
									icon={FormatPaint}
									title="For Designers"
									description={
										<p>
											Divide details about your product or agency work into
											parts. Write a few lines about each one. A paragraph
											describing a feature will be enough.
										</p>
									}
									iconColor="danger"
								/>
							</GridItem>
							<GridItem xs={12} sm={4} className={classes.gridItem}>
								<InfoArea
									vertical
									className={classes.infoArea5}
									icon={Dashboard}
									title="Material-UI Grid"
									description={
										<p>
											Divide details about your product or agency work into
											parts. Write a few lines about each one. A paragraph
											describing a feature will be enough.
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
									icon={ViewCarousel}
									title="Example Pages Included"
									description={
										<p>
											The moment you use Material Kit, you know you’ve never
											felt anything like it. With a single use, this powerfull
											UI Kit lets you do more than ever before.
										</p>
									}
								/>
							</GridItem>
							<GridItem xs={12} sm={4} className={classes.gridItem}>
								<InfoArea
									vertical
									className={classes.infoArea5}
									icon={AccessTime}
									title="Save Time"
									description={
										<p>
											The moment you use Material Kit, you know you’ve never
											felt anything like it. With a single use, this powerfull
											UI Kit lets you do more than ever before.
										</p>
									}
								/>
							</GridItem>
							<GridItem xs={12} sm={4} className={classes.gridItem}>
								<InfoArea
									vertical
									className={classes.infoArea5}
									icon={AttachMoney}
									title="Save Money"
									description={
										<p>
											The moment you use Material Kit, you know you’ve never
											felt anything like it. With a single use, this powerfull
											UI Kit lets you do more than ever before.
										</p>
									}
								/>
							</GridItem>
						</GridContainer>
					</div>
				</GridContainer>
			</div>
		</div>
	)
}
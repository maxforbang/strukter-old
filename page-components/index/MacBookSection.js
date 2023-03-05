import React from "react";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import makeStyles from "@mui/styles/makeStyles";

import componentsStyle from "/styles/jss/nextjs-material-kit-pro/pages/presentationSections/componentsStyle.js";
import classNames from "classnames";
import presentationStyle from "../../styles/jss/nextjs-material-kit-pro/pages/presentationStyle";

const useStyles = makeStyles(componentsStyle);
const usePresentationStyles = makeStyles(presentationStyle);
import Image from 'next/image'
import {Box} from "@mui/material";
import {FadeInWhenVisibleHorizontal} from "../../animations/FadeInWhenVisible";

export default function MacBookSection() {
	const classes = useStyles();
	const presentation = usePresentationStyles();
	return (
		<div className={classNames(presentation.main)}>

			<div className={classes.section}>
				<div className={classes.container}>
					<GridContainer justifyContent="center">
						<GridItem md={5} lg={5} sm={12} xs={12}>
							<FadeInWhenVisibleHorizontal initial={-300} duration={1.5}>
								<h3 className={classes.title}>Let Your Rental Business Run Itself</h3>
								<h6 className={classes.description}>
									Like you've always intended it to
								</h6>
								<h5 className={classes.description}>
									Have a system that <strong>handles everything for you</strong> - attracting new
									clients, handling move-in logistics, and communicating
									with guests and contractors. Finally allow your rental property to be what you've
									always wanted it to be:
									a passive investment vehicle that makes you money and frees up time so you
									can <strong>focus on what really matters- living your life.</strong>
								</h5>
							</FadeInWhenVisibleHorizontal>
						</GridItem>
						<GridItem xs={12} sm={12} md={6} lg={6} className={classes.mlAuto}>
							<FadeInWhenVisibleHorizontal initial={150} duration={1.5}>
								<div className={classes.imageContainer}>
									<img
										src="img/home/laptop-site-mockup.png"
										alt="macbook"
										className={classes.componentsMacbook}
									/>
									<Box height={175} width={331.96} className={classes.shoppingCart}>
										<Image
											src="/img/home/dashboard1.png"
											alt="macbook"
											layout='fill'
											objectFit='cover'
										/>
									</Box>
									<img
										src="/img/assets-for-demo/presentationViewSectionComponent/share-btn.png"
										alt="macbook"
										className={classes.shareButton}
									/>
									<img
										src="/img/assets-for-demo/presentationViewSectionComponent/coloured-card-with-btn.jpg"
										alt="macbook"
										className={classes.cardImage}
									/>
									<img
										src="/img/assets-for-demo/presentationViewSectionComponent/coloured-card.jpg"
										alt="macbook"
										className={classes.twitterImage}
									/>
									<img
										src="/img/assets-for-demo/presentationViewSectionComponent/social-row.jpg"
										alt="macbook"
										className={classes.iconsImage}
									/>
									<img
										src="/img/assets-for-demo/presentationViewSectionComponent/pin-btn.jpg"
										alt="macbook"
										className={classes.repostImage}
									/>
								</div>
							</FadeInWhenVisibleHorizontal>
						</GridItem>
					</GridContainer>
				</div>
			</div>
		</div>
	);
}

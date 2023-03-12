import Card from "../../../components/Card/Card";
import CardHeader from "../../../components/Card/CardHeader";
import CardBody from "../../../components/Card/CardBody";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import InfoArea from "../../../components/InfoArea/InfoArea";
import Phone from "@mui/icons-material/Phone";
import PinDrop from "@mui/icons-material/PinDrop";
import CustomInput from "../../../components/CustomInput/CustomInput";
import CardFooter from "../../../components/Card/CardFooter";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Check from "@mui/icons-material/Check";
import Button from "../../../components/CustomButtons/Button";
import React, {useState} from "react";
import makeStyles from "@mui/styles/makeStyles";
import workStyle from "../../../styles/jss/nextjs-material-kit-pro/pages/landingPageSections/workStyle";
import Mail from "@mui/icons-material/Mail";
import {Box, Typography, useMediaQuery} from "@mui/material";
import Icon from "@mui/material/Icon";

const useStyles = makeStyles(workStyle);

export default function EmailForm({isMobile}) {

	const classes = useStyles();

	const [name, setName] = useState('')
	const [email, setEmail] = useState('email value')
	const [message, setMessage] = useState('')
	const [submitted, setSubmitted] = useState('')
	const [error, setError] = useState('')

	function handleSubmit() {
		if (!name || !email || !message) {
			setError('Please fill out every field.')
			return
		}

		fetch('/api/contact', {
			method: 'POST',
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({name, email, message})
		}).then(async (res) => {
			const {message} = await res.json();
			if (res.status === 200) {
				setSubmitted(message)
				setError('')
			} else {
				setError(`There was an error submitting your response. ${message}`)
			}
		})
	}

	return (
		<Card className={classes.card2} plain={isMobile ? true : false}>
			<form>
				<CardHeader contact color="info" className={classes.textCenter}>
					<h4 className={classes.cardTitle}>Contact Form</h4>
				</CardHeader>
				{submitted ?
					<Box mx='auto' my={10} textAlign='center'>
						<Icon color='success'>check_circle</Icon>
						<Typography mt={1}>
							{submitted}
						</Typography>
					</Box>
					:
					<>
					<CardBody>
						<GridContainer>
							<GridItem xs={12} sm={6} md={6}>
								<InfoArea
									className={classes.infoArea2}
									title="Contact Information"
									description={
										<span>
										<strong>Max Forbang</strong>
                          <br/> max@strukter.io
                          <br/> (703) 679-7985
                        </span>
									}
									icon={Mail}
									iconColor="info"
								/>
							</GridItem>
						</GridContainer>
						<GridContainer>
							<GridItem xs={12} sm={6} md={6}>
								<CustomInput
									labelText="Full Name"
									id="first2"
									formControlProps={{
										fullWidth: true
									}}
									inputProps={{
										onChange: (e) => setName(e.target.value)
									}
									}
								/>
							</GridItem>
							<GridItem xs={12} sm={6} md={6}>
								<CustomInput
									labelText="Email Address"
									id="email-address2"
									formControlProps={{
										fullWidth: true
									}}
									inputProps={{
										onChange: (e) => setEmail(e.target.value)
									}
									}
								/>
							</GridItem>
						</GridContainer>
						<CustomInput
							labelText="Your Message"
							formControlProps={{
								fullWidth: true
							}}
							inputProps={{
								multiline: true,
								rows: 5,
								onChange: (e) => setMessage(e.target.value),
							}}
						/>
					</CardBody>

				<CardFooter className={classes.justifyContentBetween} >
					<Box mx='auto' display={'flex'} flexDirection={'column'} >
						{error ?
							<Typography mb={3} color={'#cc0000'}>{error}</Typography>
							: null
						}
						<Box mx='auto'>
						<Button onClick={handleSubmit} color="linkedin" className={classes.pullRight}>
							Send Message
						</Button>
						</Box>
					</Box>
				</CardFooter>
					</>}
			</form>
		</Card>
	)
}
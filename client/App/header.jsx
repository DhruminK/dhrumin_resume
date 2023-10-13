import React from 'react';
import { Header, Heading, Nav, Anchor, PageHeader } from 'grommet';
import { Linkedin, Instagram, Github } from 'grommet-icons';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledAnchor = styled(Anchor)`
	&:hover {
		text-decoration: none;
	}`

const OurHeader = () => {

	const navigate = useNavigate();
	const redirectToHome = () => {
		console.log("HERE");
		navigate("/");
	};

	return (
		<Header margin={{horizontal: 'large', top: 'small', bottom: 'large'}}>
			<Heading level="1" margin="small" color="neutral-3"><Anchor onClick={redirectToHome}>DK</Anchor></Heading>
				<Nav margin="xsmall" direction="row">
					<Anchor href="https://www.linkedin.com/in/dhruminkhatri" target="blank"><Linkedin color="plain" size="medium" /></Anchor>
					<Anchor href="https://github.com/DhruminK/" target="blank"><Github color="plain" size="medium" /></Anchor>
					<Anchor href="https://www.instagram.com/dhrumin/" target="blank"><Instagram color="plain" size="medium" /></Anchor>
				</Nav>
		</Header>
	)
};

export default OurHeader;

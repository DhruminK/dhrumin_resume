import React from "react";
import { Flex, Spacer, Box, Heading, HStack, IconButton } from "@chakra-ui/react";
import { TfiInstagram, TfiLinkedin } from "react-icons/tfi";
import { useNavigate } from "react-router-dom"
import { VscGithubAlt } from "react-icons/vsc";

const MainHeader = () => {
	const navigate = useNavigate();
	const redirectToHome = () => navigate("/");
	const openNewWindow = url => window.open(url, "_blank");

	return (
		<Flex minWidth="max-content" alignItems="center" gap="2" margin="1.5em" borderBottom="2px" borderBottomColor="gray.200">
			<Box p="2">
				<Heading
					as="h1"
					size="4xl"
					sx={{cursor: "pointer"}}
					m={2}
					onClick={() => redirectToHome()}
					bgGradient="linear(to-tr, teal.300, teal.800)"
					bgClip="text">
					DK
				</Heading>
			</Box>
			<Spacer />
			<HStack spacing="1.5em">
				<IconButton variant="ghost" size="md"
					onClick={() => openNewWindow("https://www.linkedin.com/in/dhruminkhatri")}
					icon={<TfiLinkedin />} fontSize="2em"/>
				<IconButton variant="ghost" size="md"
					onClick={() => openNewWindow("https://github.com/DhruminK/")}
					icon={<VscGithubAlt />} fontSize="2em"/>
				<IconButton variant="ghost" size="md"
					onClick={() => openNewWindow("https://www.instagram.com/dhrumin/")}
					icon={<TfiInstagram />} fontSize="2em" />
			</HStack>
		</Flex>
	);
};

export default MainHeader;

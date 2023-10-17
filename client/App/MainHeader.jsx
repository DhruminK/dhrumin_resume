import React from "react";
import { VStack, Text, Flex, Spacer, Box, Heading, HStack, IconButton, Button } from "@chakra-ui/react";
import { TfiInstagram, TfiLinkedin } from "react-icons/tfi";
import { SiChakraui, SiFramer, SiReact } from "react-icons/si";

import { useNavigate } from "react-router-dom"
import { VscGithubAlt } from "react-icons/vsc";

export const MainHeader = () => {
	const navigate = useNavigate();
	const redirectToHome = () => navigate("/");
	const openNewWindow = url => window.open(url, "_blank", "noopener, noreferrer");

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

export const MainFooter = () => {
	return (
		<VStack w="100vw" m="1em" spacing="0em">
			<Text w="80%" fontFamily="playfair" textAlign="right" fontSize="xl">It is a wrap.<br />
				This website was made using</Text>
			<Flex mt="1em" gap="4" w="80%">
				<Spacer />
				<Button leftIcon={<SiReact />} variant="ghost" size="lg" textColor="cyan.500" as="a" href="https://react.dev/" target="_blank" rel="noopener" rel="noreferrer">React</Button>
				<Button leftIcon={<SiChakraui />} variant="ghost" size="lg" textColor="teal.500" as="a" href="https://chakra-ui.com/" target="_blank" rel="noopener" rel="noreferrer">Chakra UI</Button>
				<Button leftIcon={<SiFramer />} variant="ghost" size="lg" colorScheme="white" as="a" href="https://www.framer.com/motion/" target="_blank" rel="noopener" rel="noreferrer">FramerMotion</Button>
				<Button leftIcon={<SiReact />} variant="ghost" size="lg" textColor="pink.500" as="a" href="https://react-icons.github.io/react-icons" target="_blank" rel="noopener" rel="noreferrer">React Icon</Button>
			</Flex>
		</VStack>
	);
}

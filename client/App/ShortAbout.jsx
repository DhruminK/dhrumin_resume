/// Import External Dependencies
import React from "react";
import { HStack, Divider, Center, Container, Text, Link, VStack, Box, Heading } from "@chakra-ui/react";
import { Button, useColorModeValue } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { TfiInstagram, TfiLinkedin, TfiEmail } from "react-icons/tfi";
import { VscGithubAlt } from "react-icons/vsc";

export const ShortHeading = ({ title, subtitle }) => (
	<>
					<Heading bgGradient="linear(to-tr, teal.300, teal.800)" size="2xl" mb="0em" fontFamily="poppin" bgClip="text">{ title }</Heading>
					<Text fontWeight="700" fontSize="2xl" textAlign="center">{ subtitle }</Text>
					<Divider borderColor="gray.400" mt="0.5em" mb="2em" w="90vw" />
	</>
);

export const ShortAbout = () => {
	const borderColor = useColorModeValue("gray.200", "gray.900");

	return (
	<Box h="100%">
	<Container maxW={["4xl"]} border="1px" borderColor={borderColor} p="4em" mt="0em" boxShadow="2xl" rounded={["3xl"]}  >
		<Text fontSize={["4xl", undefined, undefined, "2xl"]} fontFamily="mono" fontWeight="500" as="i">Hey, my name is Dhrumin.</Text>
		<br/>
		<Text fontSize={["2xl", undefined, undefined, "xl"]} as="i" fontFamily="mono">
			I am a software developer based in Mumbai, India.
			I am currently working as a Software Engineer at <Link href="https://www.tidalwave.tech/" isExternal fontWeight="600">Tidalwave Technologies<ExternalLinkIcon ml="0.25em" mb="0.35em"/></Link>,
			writing code to emulate LTE protocol using C, Docker, JavaScript, React and many more such interesting technologies. <br />
			I have an interest in learning new things from web technologies like React, webpack, React native to more academically inclined things like Probabilities and Linear Algebra.
			In my spare time I enjy gaming, running and playing tennis.
		</Text>
	</Container>
	</Box>
)};

export const ToolsUsed = () => (
		<Center >
			<Container maxW={["5xl"]} m="4em">
				<VStack spacing="0.1em">
					<ShortHeading title="Tools" subtitle="I use for most of my development"/>
					<Text fontWeight="500" fontSize="xl">Operating System: <Text as="em" fontWeight="700">Linux</Text></Text>
					<Text fontWeight="500" fontSize="xl">Preferred IDE: <Text as="em" fontWeight="700">Vim, VS Code</Text></Text>
					<Text fontWeight="500" fontSize="xl">Containerization: <Text as="em" fontWeight="700">Docker</Text></Text>
					<Text fontWeight="500" fontSize="xl">Version Control System(VCS): <Text as="em" fontWeight="700">git</Text></Text>
				</VStack>
			</Container>
		</Center>
);

export const ContactMe = () => (
	<VStack mt="10em" spacing="0em" >
		<ShortHeading title="Contact me" />
		<Text textAlign="center" fontSize={['2xl', undefined, undefined, 'xl']} fontFamily="playfair">
			Always on the lookout for new experiences and opporunities<br />
			Feel free to contact me, here are some of ways :
		</Text>
		<HStack mt="2em">
			<Button leftIcon={<TfiEmail />} variant="outline" colorScheme="teal" as="a" href="mailto:dhruminkhatri@yahoo.com" rel="noopener" rel="noreferrer">Email</Button>
			<Button leftIcon={<TfiLinkedin />} variant="outline" colorScheme="linkedin" as="a" href="https://www.linkedin.com/in/dhruminkhatri" target="_blank" rel="noopener" rel="noreferrer">LinkedIn</Button>
			<Button leftIcon={<TfiInstagram />} variant="outline" colorScheme="instagram" href="https://www.instagram.com/dhrumin/" as="a" rel="noopener" rel="noreferrer">Instagram</Button>
			<Button leftIcon={<VscGithubAlt />} variant="outline" as="a" href="https://github.com/DhruminK/" target="_blank" rel="noopener" rel="noreferrer">Github</Button>
		</HStack>
	</VStack>
);

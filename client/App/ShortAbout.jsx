/// Import External Dependencies
import React from "react";
import { Divider, Center, Container, Text, Link, HStack, VStack, Box, Heading } from "@chakra-ui/react";
import { Button, SimpleGrid, Card, CardHeader, CardBody, CardFooter, useColorModeValue } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { SiGithub } from "react-icons/si";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { css } from "@emotion/react";
import { TfiInstagram, TfiLinkedin, TfiEmail } from "react-icons/tfi";
import { VscGithubAlt } from "react-icons/vsc";

export const ShortHeading = ({ title, subtitle }) => (
	<>
					<Heading bgGradient="linear(to-tr, teal.300, teal.800)" size="2xl" mb="0em" fontFamily="poppin" bgClip="text">{ title }</Heading>
					<Text fontWeight="700" fontSize="2xl">{ subtitle }</Text>
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

const NotableProjectsArray = [
	{ title: 'ft_ping', subtitle: 'Recoding of "ping" command in C by creating, sending and recieving ICMP packets using open sockets', url: 'https://github.com/DhruminK/ft_ping.git' },
	{ title: 'computerv1', subtitle: 'C program to parse polynomial equations upto quadratic and find solutions for the same', url: 'https://github.com/DhruminK/computorv1.git' },
	{ title: 'nm', subtitle: 'Recoding of "nm" command in C, that reads an ELF file output all the symbols in the unit file (mainly refers to functions used in C)', url: 'https://github.com/DhruminK/nm.git' },
	{ title: 'push_swap', subtitle: 'This project involves sorting data on a stack with a limited set of instraction and in smallest number of moves', url: 'https://github.com/DhruminK/push_swap.git' },
	{ title: 'ft_printf', subtitle: 'Implementation of ft_printf in C using write, malloc and va_args only', url: 'https://github.com/DhruminK/ft_printf.git' },
	{ title: 'get_next_line', subtitle: 'This function takes in a file descriptor and output a single line, every time the function is called', url: 'https://github.com/DhruminK/get_next_line.git' },
	{ title: 'dhrumin_resume', subtitle: 'JavaScript and React Code for this website, containing all the webpack configurations, babel configurations, express server configurations and nginx configuration', url: 'https://github.com/DhruminK/dhrumin_resume.git' },
	{ title: 'Other Projects', subtitle: 'Other Javascript and C projects can be found at my Github', url: 'https://github.com/DhruminK' }
];

const NotableProjectsCard = ({ index, title, subtitle, url }) => {

	const onGitButtonClick = () => window.open(url, "_blank");
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false, amount: "some" });

	const animate = {
		opacity: 1,
		x : 0,
		transition : {
			type: "tween",
			duration: 0.4,
			delay: 0.14
		}
	};

	return (
			<Card p="0.8em" size="lg" borderRadius="2xl"
				as={motion.div} whileHover={{scale: 1.2, zIndex: 2}} initial={{opacity: 0, x : -100 + ((index & 1) * 200) }} animate={ isInView ? animate : '' } ref={ref}>
				<CardHeader>
					<Center>
						<Heading size="lg" fontFamily="poppin">{title}</Heading>
					</Center>
				</CardHeader>
				<Center w="100%">
				<Divider borderColor="gray.300" w="75%"/>
				</Center>
				<CardBody>
					<Center><Text fontFamily="playfair" fontSize={["2xl", undefined, undefined, "xl"]}>{subtitle}</Text></Center>
				</CardBody>
				<CardFooter>
					<Center w="100%">
						<Button size="lg" rightIcon={<SiGithub />} colorScheme="teal" onClick={onGitButtonClick}>Source</Button>
					</Center>
				</CardFooter>
			</Card>
)};

export const NotableProjects = () => {
	const gridBg = useColorModeValue("cyan.50", "gray.800");
	const borderColor = useColorModeValue("gray.200", "gray.900");
	return (
				<VStack mt="4em" spacing="1em" >
					<ShortHeading title="Notable Projects" subtitle="Projects which make me proud" />
					<SimpleGrid spacing="2em" minChildWidth="360px" boxShadow="inner" p="2em" bg={gridBg} border="1px" borderColor={borderColor} borderRadius="md">
						{
							NotableProjectsArray.map((ele, index) => <NotableProjectsCard key={`NotableProjectCard_${index}`} title={ele.title} subtitle={ele.subtitle} index={index} url={ele.url} />)
						}
					</SimpleGrid>
				</VStack>
	);
};

export const MyJourney = () => {
	return (
		<VStack mt="10em" spacing="0em" >
			<ShortHeading title="My Journey" subtitle="" />
			<Text textAlign="center" fontSize={['2xl', undefined, undefined, 'xl']} fontFamily='playfair'>You can check out my Journey at <Link fontWeight="600">this page</Link>.<br />
				This webpage describes my professional experience along with my studies and the travel I did related to that <br />
				PS: Its really fun with lots of pictures and animations
			</Text>
		</VStack>
	);
};

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

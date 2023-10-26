/// Import External Dependencies
import React, { useRef } from "react";
import { Button, Text, Card, CardHeader, Center, Heading, Divider, CardBody, CardFooter } from "@chakra-ui/react";
import { useColorModeValue, VStack, SimpleGrid } from "@chakra-ui/react";
import { SiGithub } from "react-icons/si";
import { motion, useInView } from "framer-motion";
import { css } from "@emotion/react";

/// Import Custom Components
import { ShortHeading } from "./ShortAbout.jsx"
import { NotableProjectsArray } from "./utils.js";

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

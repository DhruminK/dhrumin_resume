/// Import External Dependencies
import React from "react";
import { Divider, Heading, Image, SimpleGrid, VStack, Skeleton, Box, Center, Text, Card, CardBody, CardHeader, CardFooter } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { motion, useInView } from "framer-motion";
import { css } from "@emotion/react";

/// Import component dependencies
import { ShortHeading, ShortAbout, ToolsUsed, NotableProjects } from "./ShortAbout.jsx";

const allSkills = [
	{img: "695px-C_Programming_Language.svg", skillName: "C (Programming Language)", skillLst: undefined},
	{img: "JavaScript", skillName: "JavaScript", skillLst: ["React", "ES6", "jQuery"]},
	{img: "java", skillName: "Java", skillLst: undefined},
	{img: undefined, skillName: "Others", skillLst: ["MongoDB", "MySQL", "Nginx", "HTML/CSS", "LTE", "SIMD"], setIcon: <ChevronDownIcon fontSize="4em"/>}
];

const SkillComponent = ({chkey, img, skillName, skillLst, setIcon}) => {

	const [state, changeState] = useState(undefined);
	const ref = useRef(null);
	const isInView = useInView(ref, {once: false, amount: 'some'});

	if (img)
	{
		useEffect(() => 
			(import(/* webpackMode: "lazy" */ `../static/images/${img}.png`)
				.then(val => changeState(val)), () => {})
			, []);
	}

	const animate = {
		opacity: 1,
		scale : 1,
		transition : {
			type: "spring",
			damping: 20,
			stiffness: 300
		}
	};

	const transition = {
	};
	return (
		<Card 
			as={motion.div} initial={{ opacity: 0, scale: 0.4 }}  animate={ isInView ? animate : '' } transition={transition} ref={ref}
				align="center" padding="2em" key={`skill_card_${chkey}`}>
			<CardBody>
				<Center>
				{
				!setIcon ?
				state ? <Image objectFit="cover" boxSize="100px" align="center" src={(`${state.default}`)} />
						: <Skeleton height="100px"/>
						: setIcon
				}
				</Center>
				<VStack spacing="1em" mt="3em">
					<Heading>{skillName}</Heading>
					{
						Array.isArray(skillLst) && skillLst.length > 0 ? 
							<VStack spacing="0.3em" mt="2em">
								{
									skillLst.map((val, index) => (<Text fontSize="xl" key={`SkillCardText${index}`}>{val}</Text>))
								}
							</VStack> : ''
					}
				</VStack>
			</CardBody>
		</Card>
	);
};

const MainBody = () => {
	return (
		<SimpleGrid columns={1} spacing="3em">
			<ShortAbout />
				<VStack spacing="0em" mt="4em" >
					<Center w="100%">
						<VStack w="100%">
						<ShortHeading title="Skills" subtitle="I am good at" />
						<SimpleGrid w="100%" boxShadow="inner" border="1px" borderRadius="xl" m="10em" p="7em" borderColor="gray.100" bg="teal.50" minChildWidth="20em" spacing="1.5em" >
			
						{
							allSkills.map((ele, index) => <SkillComponent key={`SkillComponent_${index}`} chkey={index} skillName={ele.skillName} img={ele.img} skillLst={ele.skillLst} setIcon={ele.setIcon} />)
						}
						</SimpleGrid>
						</VStack>
					</Center>
				</VStack>
			<ToolsUsed />
			<NotableProjects />
		</SimpleGrid>
	);
};

export default MainBody;

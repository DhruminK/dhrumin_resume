/// Import External Dependencies
import React from "react";
import { useEffect, useState, useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import { Button, Text, Card, CardHeader, Center, Heading, Divider, CardBody, CardFooter } from "@chakra-ui/react";
import { useColorModeValue, VStack, SimpleGrid, Skeleton, Image } from "@chakra-ui/react";

/// Import Custom Components
import { ShortHeading } from "./ShortAbout.jsx"
import { allSkills } from "./utils.js"

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

	return (
		<Card 
			as={motion.div} initial={{ opacity: 0, scale: 0.4 }}  animate={ isInView ? animate : '' } ref={ref}
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
					<Heading textAlign="center" fontFamily="poppin">{skillName}</Heading>
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

export const MainSkills = () => {
	const gridBg = useColorModeValue("teal.50", "gray.800");
	const borderColor = useColorModeValue("gray.200", "gray.900");

	return (
			<VStack spacing="0em" mt="4em" >
				<Center w="100%">
					<VStack w="100%">
						<ShortHeading title="Skills" subtitle="I am good at" />
							<SimpleGrid w="100%" boxShadow="inner" border="1px" borderRadius="xl" mx="10em" p="7em" borderColor={borderColor} bg={gridBg} minChildWidth="20em" spacing="1.5em" >
							{
								allSkills.map((ele, index) => <SkillComponent key={`SkillComponent_${index}`} chkey={index} skillName={ele.skillName} img={ele.img} skillLst={ele.skillLst} setIcon={ele.setIcon} />)
							}
							</SimpleGrid>
					</VStack>
				</Center>
			</VStack>
	);
};

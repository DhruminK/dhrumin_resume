/// Import External Dependencies
import React, { useRef, useImperativeHandle, forwardRef } from "react";
import { Tooltip, Box, VStack, Flex, Spacer, Heading, Text, Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion"

import { JourneyModal } from "./JourneyModal.jsx";

export const JourneyCardComponent = forwardRef((props, ref) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<> 
			<Tooltip label={ props.modelInfo ? "Tap to open modal" : "Modal not present" } hasArrow placement="right" fontSize="md">
		<Card ref={ref} as={motion.div} whileHover={{ scale : 1.2, zIndex: 3 }} onClick={onOpen}>
			<CardBody p="1em">
				<Text fontFamily="poppin" fontWeight={600} fontSize={["lg", undefined, undefined, "md"]}>{props.fromDate} {props.toDate ? `- ${props.toDate}` : ''}</Text>
				<Text fontFamily="poppin" fontSize={["3xl", undefined, undefined, "xl"]}>{props.subtitle}</Text>
				<Text fontFamily="playfair" fontWeight={600} fontSize={["lg", undefined, undefined, "md"]}>{props.category}</Text>
			</CardBody>
		</Card>
		</Tooltip>
			{
				props.modelInfo && 
			<JourneyModal isOpen={isOpen} onClose={onClose} {...props.modelInfo } category={props.category}/>
			}
		</>
	);
});

export const JourneyCardRowComponent = forwardRef((props, ref) => {
	return (
		<Flex {...(props.flexProps)} >
			{props.spacer ? <Spacer /> : ''}
			<JourneyCardComponent {...(props.cardProps)} ref={ref} />
		</Flex>
	);
});

export const JourneyCardColumnComponent = forwardRef((props, cardRef) => {
	const { mainProps, cardRowProps } = props;
	const numJourneyCard = cardRowProps.length
	const nRef = new Array(numJourneyCard);
	let i = -1;

	while (++i < numJourneyCard)
		nRef[i] = useRef();
	useImperativeHandle(cardRef, () => ({
		getCardRef(i) {
			if (i >= 0 && i < numJourneyCard)
				return (nRef[i].current);
			return ;
		}
	}));

	return (
		<VStack {...mainProps}>
			{
				nRef.map((r, index) => (
					<JourneyCardRowComponent {...(cardRowProps[index])} index={index} ref={nRef[index]} key={`JourneyCard.${index}`}/>
				))
			}
		</VStack>
	);
});

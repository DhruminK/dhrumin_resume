/// Import External Dependencies
import React, { useCallback, useRef, useEffect, useImperativeHandle, useState, forwardRef } from "react"
import { VStack, Flex, Spacer, Center, Text, Box, Link } from "@chakra-ui/react";
import { useColorModeValue, SimpleGrid } from "@chakra-ui/react";

import { ShortHeading } from "./ShortAbout.jsx";
import { JourneyCardColumnComponent } from "./JourneyCard.jsx";
import { JourneyNodeColumnComponent } from "./JourneyNode.jsx";
import { JourneySvgColumnComponent } from "./JourneySvg.jsx";

import { JourneyNodeInfo, JourneyCardInfo, JourneySvgConnector } from "./utils.js";

const JourneyMainComponent = () => {
	const nodeRef = useRef();
	const cardRef = useRef();
	const nodeColumnProps = {
		bgColor : useColorModeValue("teal.200", "teal.700"),
		w : "2%",
		h : "100%"
	};

	const cardColumnProps = {
		w : "85%",
		h : "100%"
	};

	useEffect(() => {
		if (!nodeRef.current || !cardRef.current)
		{
			console.log("Something not right", nodeRef.current, cardRef.current);
			return ;
		}
		console.log("Are here ??", nodeRef.current.getNodeRef(0), cardRef.current.getCardRef(0));
	}, []);

	return (
		<Flex spacing={0}  w={["80vw", undefined, undefined, "50vw"]} mt="3em">
			<JourneyNodeColumnComponent ref={nodeRef} nodeProps={JourneyNodeInfo} mainProps={nodeColumnProps}/>
			<JourneySvgColumnComponent nodeRef={nodeRef} cardRef={cardRef} connectorInfo={JourneySvgConnector} />
			<JourneyCardColumnComponent ref={cardRef} cardRowProps={JourneyCardInfo} mainProps={cardColumnProps} />
		</Flex>);

};

export const MyJourney = () => {
	return (
		<VStack mt="10em" spacing="0em" >
			<ShortHeading title="My Journey" subtitle="Describes my professional experience along with my studies and the travels I did related to my studies and work" />
			<JourneyMainComponent />
		</VStack>
	);
};

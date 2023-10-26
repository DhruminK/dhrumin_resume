/// Import External Dependencies
import React, { useEffect, useState } from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton
} from "@chakra-ui/react";
import { useDisclosure, Center, Image, AspectRatio, IconButton, Flex, Spacer, Box, Text, Heading, VStack, Button } from "@chakra-ui/react";

import {JourneyModelCarouselImageComponent } from "./JourneyCarousel.jsx";  
	
export const JourneyModal = ({ header, category, title, subtitle, img, imgDest, isOpen, onClose }) => {

	const [imgState, setImgState] = useState([]);

	if (Array.isArray(img))
	{
		useEffect(() => img.forEach(
							(i, index) => import(/* webpackMode : "lazy" */`../static/${imgDest}/${i}.jpg`)
											.then(val => { setImgState(state => [...state, val]) })), []);
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose} motionPresent="none" isCentered size="xl">
			<ModalOverlay />
			<ModalContent p="xl">
				<ModalHeader>
					<Flex>
						<Heading as="h5" fontFamily="playfair" fontSize="3xl">{ header }</Heading>
						<Spacer />
						<Text as="em" fontWeight="500" fontFamily="playfair" fontSize={["lg", undefined, undefined, "md"]}>{ category }</Text>
					</Flex>
				</ModalHeader>
				<ModalBody>
					{ 
						Array.isArray(img) && img.length > 0 &&
					<Center w="100%" my="1em" mb="1em">
					<AspectRatio h="100%" w="100%" ratio={21 / 9} maxW='95%'>
						<JourneyModelCarouselImageComponent img={imgState} />
					</AspectRatio>
						</Center>
					}
					<Text fontSize={["4xl", undefined, undefined, "xl"]} fontFamily="poppin" textAlign="center">{title}</Text>
					<Text sx={{whiteSpace: "pre-wrap"}} fontSize={["2xl", undefined, undefined, "lg"]} fontFamily="poppin" mt="1em" textAlign="justify">{subtitle}</Text>
				</ModalBody>
				<ModalFooter>
					<Button onClick={onClose}>Close</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

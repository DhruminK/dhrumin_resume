/// Import External Dependencies
import React, { useRef, useImperativeHandle, forwardRef } from "react";
import { Box, VStack } from "@chakra-ui/react";

const JourneyNodeComponent = forwardRef((props, ref) => (
	<Box borderRadius="lg" ref={ref} {...props} zIndex="3">
		<Box as="svg" h="100%" w="100%" preserveAspectRatio="none" viewBox="0 0 100 100">
			<Box as="circle" cx="50" cy="50" r="15" fill="white" stroke="black" /> 
		</Box>
	</Box>
));

export const JourneyNodeColumnComponent = forwardRef((props, ref) => {
	const { mainProps, nodeProps } = props;
	const numJourneyNode = nodeProps.length;
	console.log(numJourneyNode);
	const jRef = new Array(numJourneyNode);
	let i = -1;

	while (++i < numJourneyNode)
		jRef[i] = useRef();
	useImperativeHandle(ref, () => ({
		getNodeRef(i) {
			if (i >= 0 && i < numJourneyNode)
				return (jRef[i].current);
			return ;
		}
	}));

	return (
		<VStack {...mainProps}>
			{
				jRef.map((r, index) => (
					<JourneyNodeComponent {...(nodeProps[index])} ref={jRef[index]} key={`JourneyNode.${index}`} />
				))
			}
		</VStack>
	);
});

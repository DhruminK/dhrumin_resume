/// Import External Dependencies
import React, { useRef, useEffect, useMotionValue, useState, forwardRef } from "react";
import { Box, VStack } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";

export const SvgComponent = ({ x1, y1, x2, y2, mainProps, pathProps }) => {

	const ref = useRef();
	const pathRef = useRef();
	const isInView = useInView(ref, { once: false });

	const svgVariant = {
		visible : { opacity : 1, transition : { when: 'beforeChildren', staggerChilder: 0.2 }},
		hidden : { opacity : 0, transition : { when: 'afterChildren' }}
	}

	const svgCompVariant = {
		visible : (i) => ({	opacity : 1,
							pathLength : 1,
							transition : {
								opacity : { delay: (i * 0.5) , duration: 0.01 },
								pathLength : { delay: (i * 0.5), duration: 1, type: "spring"},
							} }),
		hidden : { pathLength: 0, opacity : 0}
	};

	let d = `M ${x1} ${y1}`;

	if (y1 === y2 && x1 !== x2)
		d += ` L ${x2} ${y2}`;
	else if (x1 === x2)
	{
		const mY = (y2 - y1) / 2;
		const steps = (y2 - y1) / 100;
		const p1 = { x : x1 + 3, y : y1 + (5 * steps) };
		const p2 = { x : x1 + 6, y : y1 + (20 * steps) };
		const p3 = { x : x1 + 6, y : y1 + (50 * steps) };

		d += ` C ${p1.x} ${p1.y}, ${p2.x} ${p2.y}, ${p3.x} ${p3.y}`;

		p1.x = x1 + 6;
		p1.y = y1 + (80 * steps);
		p2.x = x1 + 3;
		p2.y = y1 + (95 * steps);
		p3.x = x2;
		p3.y = y2;
		d += ` C ${p1.x} ${p1.y}, ${p2.x} ${p2.y}, ${p3.x} ${p3.y}`;
	}
	else
	{
		const mX = (x2 - x1) / 2;
		const mY = (y2 - y1) / 2;
		const p2 = {x : x1 + mX, y : y2};
		const p1 = {x : x1 + mX / 4, y : y1 + ((mX / 4) * (y2 - y1) / (x2 - (2 * x1)))};

		d += ` C ${p1.x} ${p1.y}, ${p2.x} ${p2.y}, ${x2} ${y2}`;
	}

	return (
		<Box h="100%" w="100%" as={motion.svg} initial="hidden" animate={isInView ? "visible" : ""}  variants={svgVariant} preserveAspectRatio="none" viewBox="0 0 100 100" {...mainProps} ref={ref}>
			<Box as={motion.path} ref={pathRef} variants={svgCompVariant} custom={0} d={d} stroke={pathProps.stroke() } {...pathProps} />
		</Box>
	);
};

export const JourneySvgComponent = ({mainRef, ref1, ref2, mainProps, svgProps}) => {
	const [val, setVal] = useState({x1 : 0, y1 : 0, x2 : 0, y2 : 0, top : 0, left: 0, svgHeight: 0, svgWidth : 0});
	const ref = useRef();

	const getCoordinates = (() => {
		if (!mainRef.current || !ref1 || !ref2)
			return ;
		const arr = [];
		if (ref1.offsetTop > ref2.offsetTop)
			(arr.push(ref2), arr.push(ref1));
		else
			(arr.push(ref1), arr.push(ref2));
		const v = {};
		const arrBR = arr.map(r => r.getBoundingClientRect());
		v.left = - (ref1.offsetWidth / 2)
		v.top = arr[0].offsetTop - mainRef.current.offsetTop;
		v.svgWidth = ref2.offsetLeft - (ref1.offsetLeft + (ref1.offsetWidth / 2));
		if (arr[1].offsetTop + arrBR[1].height < arr[0].offsetTop + arrBR[0].height)
			v.svgHeight = arrBR[0].height;
		else
			v.svgHeight = arr[1].offsetTop - mainRef.current.offsetTop - v.top + arrBR[1].height;
		v.x1 = 0;
		v.x2 = 100;
		v.y1 = ((ref1.offsetTop - mainRef.current.offsetTop - v.top) + (ref1.getBoundingClientRect().height / 2)) * 100 / v.svgHeight;
		v.y2 = ((ref2.offsetTop - mainRef.current.offsetTop - v.top) + (ref2.getBoundingClientRect().height / 2)) * 100 / v.svgHeight;

		setVal(v);
	});

	useEffect(() => getCoordinates(), []);
	useEffect(() => {
		window.addEventListener('resize', getCoordinates);
		return (() => window.removeEventListener('resize', getCoordinates));
	}, []);

	return (
		<Box {...mainProps} h={val.svgHeight} w={val.svgWidth || "100%"} sx={{ position: 'absolute', top: `${val.top}px`, left: `${val.left}px` }} >
			<SvgComponent {...svgProps} {...val} />
		</Box>
	);
};

export const JourneySvgColumnComponent = ({ nodeRef, cardRef, connectorInfo }) => {

	const [state, setState] = useState(0);
	const mainRef = useRef();

	useEffect(() => {
		if (nodeRef.current && cardRef.current)
			setState(1);
	}, []);

	const svgProps = {
		pathProps : {
			fill: "none",
			stroke: "pink.400",
			sx : { vectorEffect : "non-scaling-stroke" }
		}
	}

	return (
		<VStack w="10%" ref={mainRef} sx={{position: "relative" }} align="left">
			{state ? 
					connectorInfo.map((x, index) => <JourneySvgComponent key={`JourneySvg.${index}`} svgProps={x.svgProps} mainRef={mainRef} 
												ref1={nodeRef.current.getNodeRef(x.from)} 
												ref2={cardRef.current.getCardRef(x.to)} />  )
				: ''}
		</VStack>
	);
};

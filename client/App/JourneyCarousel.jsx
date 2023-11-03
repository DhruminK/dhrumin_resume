import React, { useState } from "react";
import { Image, Box, IconButton, Center } from "@chakra-ui/react";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
	enter: (direction) => ({zIndex: 0, x: direction < 0 ? 1000 : -1000, opacity: 0, transition: { x: {type: "spring", duration: 0.6, bounce: 0}, opacity: {duration: 0.2}}}),
	center: { zIndex: 1, x: 0, opacity: 1, transition: { delay: 0}  },
	exit: (direction) => ({zIndex: 0, x: direction < 0 ? -1000 : 1000, opacity: 0, transition: { x: {type: "spring", duration: 0.6, bounce: 0}, opacity: {duration: 0.2}}})

};

const swipeConfidenceThreshold = 1000;
const swipePower = (offset, velocity) => (Math.abs(offset) * velocity);
const index = (i, len) => (i % len + (i % len < 0 ? len : 0));

export const JourneyModelCarouselImageComponent = ({img}) =>
{
	const [[page, direction], setPage] = useState([0, 0]);
	const paginate = (newDir) => (setPage([page + newDir, newDir]));

	return (
		<Box sx={{ position: "relative" }} >
			<AnimatePresence initial={false} custom={direction} mode="wait">
				<Image as={motion.img} 
					key={page}
					src={img[index(page, img.length)].default}
					variants={variants}
					custom={direction}
					initial="enter"
					animate="center"
					exit="exit"
					drag="x"
					dragConstraints={{ left: 0, right: 0 }}
					dragElastic={1}
					onDragEnd={ (e, {offset, velocity}) => {
						const swipe = swipePower(offset.x, velocity.x);

						if (swipe < -swipeConfidenceThreshold)
							paginate(-1);
						else if (swipe > swipeConfidenceThreshold)
							paginate(1);
					}}
				/>
			</AnimatePresence>
			<IconButton onClick={() => paginate(1)} zIndex="2" colorScheme="whiteAlpha" size="lg" icon={<TfiArrowCircleLeft />} sx={{ position: "absolute", top: "50%", left: "1%" }} variant="ghost" />
			<IconButton onClick={() => paginate(-1)} zIndex="2" colorScheme="whiteAlpha" size="lg" icon={<TfiArrowCircleRight />} sx={{ position: "absolute", top: "50%", left: "92%" }} variant="ghost" />
		</Box>
	);
};

/// Import External Dependencies
import React from "react";
import { SimpleGrid } from "@chakra-ui/react";

/// Import component dependencies
import { ContactMe, ShortHeading, ShortAbout, ToolsUsed } from "./ShortAbout.jsx";
import { NotableProjects } from "./NotableProjects.jsx";
import { MainSkills } from "./Skills.jsx";
import { MyJourney } from "./MyJourney.jsx";

const MainBody = () => {
	return (
		<SimpleGrid columns={1} spacing="3em">
			<ShortAbout />
			<ToolsUsed />
			<MainSkills />
			<NotableProjects />
			<MyJourney />
			<ContactMe />
		</SimpleGrid>
	);
};

export default MainBody;

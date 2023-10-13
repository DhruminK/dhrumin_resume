import React from "react";
import { Diagram, Stack, Box, Grommet } from "grommet";

const len = 4;
const all_connect = [...Array(len).keys()].map(x => ({
	fromTarget	: `${x + 1}`,
	toTarget	: `${x + 2}`,
	thickness	: 'xsmall',
	color		: 'accent-4',
	anchor		: 'vertical'
}));


const OurSidebar = () => {

	const connections = all_connect.slice(0, all_connect.length - 1);

	console.log(connections);
	
	return (
	<Stack>
		<Grommet full>
		<Diagram connections={connections} />
		</Grommet>
		<Box>
			{
				all_connect.map((x, index) => (
					<Box key={index} id={index + 1} round="xlarge" margin={{horizontal: "medium", vertical: "xlarge"}} pad="medium" border={{color: 'accent-4', size: 'small'}} />
				))
			}
		</Box>
	</Stack>
	);
};

export default OurSidebar

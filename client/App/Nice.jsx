import React from "react";
import { Box, Stack, Card, CardHeader, CardBody, CardFooter } from "grommet";
import Nice42 from "../static/images/42_nice_hall.jpg"

const Nice = () => (
	<Stack fill anchor="center">
		<Box background={{image: `url(${Nice42})`, opacity: "medium", size: "cover"}} margin={{vertical: "xlarge"}} fill>
		</Box>
		<Card height="medium" width="medium" background="light-1">
			<CardBody pad="medium">Hello in card body</CardBody>
			<CardFooter pad={{vertical: "small", horizontal: "large"}}>ABC</CardFooter>
		</Card>
	</Stack>
);

export default Nice;

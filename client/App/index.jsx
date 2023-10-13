import React from "react";
import { Grommet, Grid, Box } from "grommet";
import { createRoot } from "react-dom/client";

import ShortAbout from "./about.jsx";
import OurHeader from "./header.jsx";
import Nice from "./Nice.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const domNode = document.getElementById('root');
const root = createRoot(domNode);

const rows = ['xsmall', 'auto'];
const columns = ['fill'];
const areas = [
	{ name: 'header',	start: [0, 0], end: [0, 0] },
	{ name: 'main',		start: [0, 1], end: [0, 1] }
];

const OurGrid = () => (
	<Grommet full>
		<Grid fill rows={rows} columns={columns} areas={areas} gap="small">
			<Box gridArea="header">
				<OurHeader />
			</Box>
			<Box gridArea="main">
				<Outlet />
			</Box>
		</Grid>
	</Grommet>
);

const router = createBrowserRouter([
	{
		path: "/",
		element: <OurGrid />,
		children: [
			{ path: "/", element: <ShortAbout /> },
			{ path: "/nice", element: <Nice /> }
		]
	}
]);

const App = () => (
	<RouterProvider router={router} />
);

root.render(App());

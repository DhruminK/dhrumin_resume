/// Import External Dependencies
import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ChakraProvider, extendTheme, SimpleGrid, Box} from "@chakra-ui/react";
import "@fontsource-variable/playfair-display";
import '@fontsource/poppins';
import { css } from "@emotion/react";

/// Import Necessary components
import MainHeader from "./MainHeader.jsx";
import MainPage from "./MainPage.jsx";

/// Get DOM element with id as 'root' which will act as a anchor for our React Application
const domNode = document.getElementById('root');
const root = createRoot(domNode);

const newFontTheme = extendTheme({
	fonts: {
		playfair: `Playfair Display Variable, sans-serif`,
		poppin: `Poppins, sans-serif`
	}
});

const MainGrid = () => (
	<SimpleGrid columns={1} rowGap="4vh" margin="2em" overflowY="hidden">
		<Box height="8vh" >
			<MainHeader />
		</Box>
		<Box height="80vh" overflowY="scroll" overflowX="hidden" >
			<Outlet />
		</Box>
	</SimpleGrid>
);

/// Initializing React Router
const router = createBrowserRouter([
	{
		path: "/",
		element: (<MainGrid />),
		children: [
			{ path: "/", element: <MainPage /> }
		]
	}
]);

const App = () => (
	<ChakraProvider theme={newFontTheme}>
		<RouterProvider router={router} />
	</ChakraProvider>
);


root.render(App());

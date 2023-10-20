/// Import External Dependencies
import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useColorModeValue, ChakraProvider, extendTheme, SimpleGrid, Box, CircularProgress, CircularProgressLabel, ColorModeScript } from "@chakra-ui/react";
import "@fontsource-variable/playfair-display";
import '@fontsource/poppins';
import { css } from "@emotion/react";
import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";

/// Import Necessary components
import { MainHeader, MainFooter } from "./MainHeader.jsx";
import MainPage from "./MainPage.jsx";

/// Get DOM element with id as 'root' which will act as a anchor for our React Application
const domNode = document.getElementById('root');
const root = createRoot(domNode);

const newFontTheme = extendTheme({
	fonts: {
		playfair: `Playfair Display Variable, sans-serif`,
		poppin: `Poppins, sans-serif`
	},
	initialColorMode: 'light',
	useSystemColorMode: false
});

const MainGrid = () => {
	const ref = useRef();
	const { scrollYProgress } = useScroll({ container : ref });
	const [ cState, changeCState ] = useState(0);

	const spinnerColor = useColorModeValue("teal.400", "teal.600");

	useEffect(() => scrollYProgress.on('change', l => (changeCState(l * 100))), []);

	return (
	<SimpleGrid columns={1} rowGap="0" mx="2em" my="0.2em" overflowX="hidden" overflowY="scroll" h="98vh" ref={ref} css={css`
			::-webkit-scrollbar {
			background-color: unset;
			}`}>
		<Box>
			<MainHeader />
		</Box>
		<CircularProgress as="span" color={spinnerColor} value={ cState } zIndex="4" sx={{ position: 'sticky', top: '10'}} >
		</CircularProgress>
		<Box mt="2vh">
			<Outlet />
		</Box>
		<Box bg="gray.800" textColor="gray.50" mt="8vh">
			<MainFooter />
		</Box>
	</SimpleGrid>
)};

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


root.render(
	<>
		<ColorModeScript initiaColorMode={newFontTheme.config.initialColorMode} />
		<App />
	</>
);

root.render(App());

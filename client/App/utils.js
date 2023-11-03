import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useColorModeValue } from "@chakra-ui/react";

export const allSkills = [
	{img: "695px-C_Programming_Language.svg", skillName: "C (Programming Language)", skillLst: undefined},
	{img: "JavaScript", skillName: "JavaScript", skillLst: ["React", "ES6", "jQuery"]},
	{img: "java", skillName: "Java", skillLst: undefined},
	{img: undefined, skillName: "Others", skillLst: ["MongoDB", "MySQL", "Nginx", "HTML/CSS", "LTE", "SIMD"], setIcon: <ChevronDownIcon fontSize="4em"/>}
];

export const NotableProjectsArray = [
	{ title: 'ft_ping', subtitle: 'Recoding of "ping" command in C by creating, sending and recieving ICMP packets using open sockets', url: 'https://github.com/DhruminK/ft_ping.git' },
	{ title: 'computerv1', subtitle: 'C program to parse polynomial equations upto quadratic and find solutions for the same', url: 'https://github.com/DhruminK/computorv1.git' },
	{ title: 'malloc', subtitle: 'Recoding of dynamic allocation and memory management library, functions like malloc, realloc and free', url: 'https://github.com/DhruminK/malloc.git' },
	{ title: 'nm', subtitle: 'Recoding of "nm" command in C, that reads an ELF file output all the symbols in the unit file (mainly refers to functions used in C)', url: 'https://github.com/DhruminK/nm.git' },
	{ title: 'push_swap', subtitle: 'This project involves sorting data on a stack with a limited set of instraction and in smallest number of moves', url: 'https://github.com/DhruminK/push_swap.git' },
	{ title: 'ft_printf', subtitle: 'Implementation of ft_printf in C using write, malloc and va_args only', url: 'https://github.com/DhruminK/ft_printf.git' },
	{ title: 'get_next_line', subtitle: 'This function takes in a file descriptor and output a single line, every time the function is called', url: 'https://github.com/DhruminK/get_next_line.git' },
	{ title: 'dhrumin_resume', subtitle: 'JavaScript and React Code for this website, containing all the webpack configurations, babel configurations, express server configurations and nginx configuration', url: 'https://github.com/DhruminK/dhrumin_resume.git' },
	{ title: 'Other Projects', subtitle: 'Other Javascript and C projects can be found at my Github', url: 'https://github.com/DhruminK' }
];

/**
export const JourneyCardInfo = [
	{ spacer : true, flexProps : { w: "100%" }, cardProps : { subtitle : "Tidalwave Technologies", fromDate : 'June, 2020', toDate : 'present', category : 'work'}},
	{ spacer : false, flexProps : { w: "100%" }, cardProps : { subtitle : "42, Nice", fromDate : 'March, 2023', toDate : 'July, 2023', category : 'studies'}},
	{ spacer : true, flexProps : { w: "100%" }, cardProps : { subtitle : "Seashore Networks", fromDate : 'Jan, 2020', toDate : 'June, 2020', category : 'work'}},
	{ spacer : false, flexProps : { w: "100%" }, cardProps : { subtitle : "42, Paris", fromDate : 'November, 2018', toDate : 'December, 2020', category : 'studies'}},
	{ spacer : true, flexProps : { w: "100%" }, cardProps : { subtitle : "Mutterfly", fromDate : 'June, 2017', toDate : 'December, 2017', category : 'work'}},
	{ spacer : false, flexProps : { w: "100%" }, cardProps : { subtitle : "K. J. Somaiya College of Engineering", fromDate : 'June, 2013', toDate : 'May, 2017', category : 'studies'}},
];
*/
const JourneyModalInfo = [
	{ 
		header : "42 Nice",
		title: "Went to Ecole 42 in Nice, France to finish my studies",
		subtitle:	"I went to finish the course which was left incomplete due to my internship at Seashore Networks and subsequently due to joining work at TidalWave Technologies as a Software Developer."
					+ "This ecole is located in Nice on Southern cost of France, this ecole acts as a sister school to 42 in Paris and works in similar way to Paris.",
		imgDest : '42_nice',
		img : ["42_nice_hall", "P_20230331_081412", "P_20230702_115526", "P_20230702_122504", "P_20230702_124726", "P_20230702_132909", "P_20230702_141206"]
	},
	{
		header: "BroadCast Engineering Consultants India Limited",
		title : "Visited BECIL to provide support and setup the instruments for LTE",
		subtitle : `Visited BECIL where I provided support in setuping instruments and ensuring smooth operation of LTE protocol via general purpose computers instead of ASICS which generally used in these scenario, this was a proof of concept`,
		imgDest : 'tidalwave',
		img : ["IMG-20220225-WA0002"]
	},
	{
		header : "Tidalwave Technologies",
		title: "Started working at TidalWave Technologies at 20 June, 2020",
		subtitle : `Converted my internship at Seashore Networks to a full time job in Tidalwave Technologies which is an Indian subsidiary of Seashore Networks (which is a Singapore based company).
I took this decision as I really like the culture and job responsibility during my internship at Seashore Networks and decided to put hold on Ecole 42 degree of quite sometime till I finished that course in 2023.
Wrote clean, efficient, modular and optimized C code to emulate functions of PHY, MAC, RLC layers of LTE protocol stack as per 3GPP specifications. Some of the features for which I was directly involved in realizing include: -
Preforming encoding on Outgoing Data and Decoding on Incoming data as per 3GPP specified coding algorithms
Creating control data or metadata for outgoing data which helps the mobile phones in receiving data and identifying the data blocks relevant to the mobile phones
Converting the outgoing data bits to IQ Samples (complex value represent digit signals) using modulation schemes provided in the specification
Applying Discrete Fourier Transform on the Frequency Domain IQ Samples to get Time Domain IQ Samples which are then sent to Radio Unit(RU) to be converted to Analog Signals and transmitted via antennas
Notable accomplishment in the job was developing PRACH receiver using C which was solely developed by myself, this gave me quite a lot of understanding of Fourier Transforms and working knowledge of Digital Signal Processing.

Also worked on other projects during my job include :-
Using ReactJS to make working webpages for clients
Making basic docker containers which will host the final RAN when it is ready
Connecting Docker container to a FPGA using Network Function Virtualization, granting me understanding of pnf and vnfs`,
		imgDest : "tidalwave",
		img : ['IMG-20201110-WA0002']
	},
	{
		header : "Seashore Networks",
		title : "Mid-term internship at Seashore Networks started in Feb, 2020 till June, 2020",
		subtitle : `Internship at Seashore was a mandatory mid-term internship as a part of curriculum at 42, Paris.
This internship mainly included writing foundational code since I was one of the first members of the founding team, my job responsibility included writing C code to emulate S1AP, RRC and PDCP layers of LTE celluar protocol that can run in Docker container`,
		imgDest : "tidalwave",
		img : ['IMG-20201110-WA0002']
	},
	{
		header : "42 Paris",
		title : "Went to Ecole 42 in Paris, France",
		subtitle : `Digital Technology Architect degree,
42 Paris is a new concept of learning where instead of traditional lectures the school provides us with projects that we have collaborate with other peers to complete and evaluate.
Through this process I have accrued lots of knowledge in regards to team building, working with various working environments and differing people.
Project done here include: - rewriting C library to mimic malloc function, printf function, nm command, etc.`,
		imgDest : "42 Paris",
		img : ['AR_STUDIO_ECOLE_42_©11h45-HD-1', 'DSC_4851-e1629729343148', '42_paris_cluster', 'Amphi-1024x682', 'INEDIT_42_0314_06', 'INEDIT_42_1113_02', 'L1018059-2000x1331']
	},
	{
		header : "Mutterfly",
		title : "Was working at Mutterfly started in June, 2017 till December, 2017",
		subtitle: "Started working as a Front-end web developer at Mutterfly using Angular 4.0 to make progressive and highly interactive web pages. I also worked in some part as a backend developer during migration of backend technologies from Java to NodeJS"
	}
];

export const JourneyCardInfo = [
	{ spacer : false, flexProps : { w: "100%" }, cardProps : { subtitle : "Went to 42, Nice", fromDate : 'March, 2023', toDate : 'July, 2023', category : 'studies', modelInfo : JourneyModalInfo[0]}},
	{ spacer : true, flexProps : { w: "100%" }, cardProps : { subtitle : "Presentation at BECIL", fromDate : 'April, 2021', toDate : undefined, category : 'work', modelInfo : JourneyModalInfo[1]}},
	{ spacer : true, flexProps : { w: "100%" }, cardProps : { subtitle : "Tidalwave Technologies", fromDate : 'June, 2020', toDate : 'present', category : 'work', modelInfo : JourneyModalInfo[2]}},
	{ spacer : true, flexProps : { w: "100%" }, cardProps : { subtitle : "Internship at Seashore Networks", fromDate : 'Feb, 2020', toDate : 'June, 2020', category : 'work', modelInfo : JourneyModalInfo[3]}},
	{ spacer : false, flexProps : { w: "100%" }, cardProps : { subtitle : "Went to 42, Paris", fromDate : 'November, 2018', toDate : 'December, 2020', category : 'studies', modelInfo : JourneyModalInfo[4]}},
	{ spacer : true, flexProps : { w: "100%" }, cardProps : { subtitle : "Mutterfly", fromDate : 'June, 2017', toDate : 'December, 2017', category : 'work', modelInfo : JourneyModalInfo[5]}},
	{ spacer : false, flexProps : { w: "100%" }, cardProps : { subtitle : "K. J. Somaiya College of Engineering", fromDate : 'June, 2013', toDate : 'May, 2017', category : 'studies', modelInfo : undefined}},
];

export const JourneyNodeInfo = [
	{ h: ['2%', undefined, undefined, "4%"], w : '100%', bgColor: "none", mt: "2em"},
	{ h: ['2%', undefined, undefined, "4%"], w : '100%', bgColor: "none", mt: ["6em", undefined, undefined, "3em"]},
	{ h: ['2%', undefined, undefined, "4%"], w : '100%', bgColor: "none", mt: ["12em", undefined, undefined, "4em"]},
	{ h: ['2%', undefined, undefined, "4%"], w : '100%', bgColor: "none", mt: ["12em", undefined, undefined, "15em"]},
	{ h: ['2%', undefined, undefined, "4%"], w : '100%', bgColor: "none", mt: ["8em", undefined, undefined, "3em"]},
	{ h: ['2%', undefined, undefined, "4%"], w : '100%', bgColor: "none", mt: ["6em", undefined, undefined, "5em"]},
];

export const JourneySvgConnector = [
	{from : 0, to : 0, svgProps : { pathProps : {stroke : () => useColorModeValue("cyan.800", "cyan.200"), fill: "none", sx : { strokeWidth: "0.06em", shapeRendering: 'optimizeQuality' }}}},
	{from : 1, to : 1, svgProps : { pathProps : {stroke : () => useColorModeValue("cyan.800", "cyan.200"), fill: "none", sx : { strokeWidth: "0.04em", shapeRendering: 'optimizeQuality' }}}},
	{from : 1, to : 2, svgProps : { pathProps : {stroke : () => useColorModeValue("cyan.800", "cyan.200"), fill: "none", sx : { strokeWidth: "0.03em", shapeRendering: 'optimizeQuality' }}}},
	{from : 2, to : 3, svgProps : { pathProps : {stroke : () => useColorModeValue("cyan.800", "cyan.200"), fill: "none", sx : { strokeWidth: "0.03em", shapeRendering: 'optimizeQuality' }}}},
	{from : 3, to : 4, svgProps : { pathProps : {stroke : () => useColorModeValue("cyan.800", "cyan.200"), fill: "none", sx : { strokeWidth: "0.04em", shapeRendering: 'optimizeQuality' }}}},
	{from : 4, to : 5, svgProps : { pathProps : {stroke : () => useColorModeValue("cyan.800", "cyan.200"), fill: "none", sx : { strokeWidth: "0.04em", shapeRendering: 'optimizeQuality' }}}},
	{from : 5, to : 6, svgProps : { pathProps : {stroke : () => useColorModeValue("cyan.800", "cyan.200"), fill: "none", sx : { strokeWidth: "0.06em", shapeRendering: 'optimizeQuality' }}}},
];


import React from "react";
import { Page, PageContent, Heading, Paragraph, Text, Anchor } from "grommet";


const ShortAbout = () => (
	<Page kind="narrow">
		<PageContent elevation="small" round="medium" pad={{horizontal: 'none', vertical: 'large'}}>
			<Paragraph margin="none" textAlign="justify" alignSelf="center" size="large">
				<i>
					<Text pad="medium" alignSelf="stretch" size="xxlarge" weight="bold">Hey, my name is Dhrumin</Text> <br /><br />
				I am a software developer based in Mumbai, India.
				I am currently working as a Software Enginer at <Anchor href="https://www.tidalwave.tech/" target="blank" color="text-strong">Tidalwave Technologies,</Anchor> 
				writing code to emulate LTE protocol using C, Docker, JavaScript, React and many more interesting technologies. <br />
				In my spare time I enjoy gaming, running and playing tennis.
				I have interest in learning new things, currently I am very interested in learning about virtualization and cloud computing
				Along with making web applications using React.
				</i>
			</Paragraph>
		</PageContent>
	</Page>
);

export default ShortAbout

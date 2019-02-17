import * as React from "react";
import { Timeline, TimelineItem } from "./timeline";


export class JobsSlide extends React.Component {
	public render() {
		return (
			<Timeline title="Where I worked before">
				<TimelineItem title="Catalysts • summer 2018">
					<p>
						I worked on the Backend of <a href="http://newsadoo.com/">Newsadoo</a>,
						a startup which delivers customized feeds of news articles,
						by crawling different newspapers,
						and combining them to allow for an unique user experience.
					</p>
					<p>
						My job was mainly to create microservices for their own advertising platform,
						and integrate them into their existing backend.
					</p>
					<span className="light-text">
						Technologies used: Spring boot, Java, JHipster, Consul, ...
							</span>
				</TimelineItem>
				<TimelineItem title="JKU Institute of Computational Perception • summer 2018">
					<p>
						In that internship I had the pleasure to develop multiplayer board game environments, 
						for the <a href="https://gym.openai.com/">OpenAI gym</a> library.
					</p>
					<p>
						These will be used in the following years for teaching about reinforcement learning.
					</p>
					<p>
						Jan Aigner and I will be writing our thesis about these games and different algorithms to solve these games.
					</p>
					<span className="light-text">
						Technologies used: Keras, OpenAI gym, Python, Tensorflow, ...
					</span>
				</TimelineItem>
				<TimelineItem title="Catalysts • summer 2017">
					<p>
						That year I worked on 2 projects:
					</p>
					<p>
						<a href="http://cuttingspeed.com/">Cutting Speed</a> a calculator which helps reduce maintenance costs for different mechanical machines.
					</p>
					<p>
						The second project was the user management of <a href="https://datamarket.at/">Data Market Austria</a>. 
					</p>
					<span className="light-text">
						Technologies used: Spring boot, Java, Angular, TypeScript, ...
					</span>
				</TimelineItem>
				<TimelineItem title="3 Banken IT GmbH • summer 2016" />
			</Timeline>
		);
	}
}
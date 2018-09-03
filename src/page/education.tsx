import * as React from "react";
import { Timeline, TimelineItem } from "./timeline";


export class EducationSlide extends React.Component {
	public render() {
		return (
			<Timeline title="Education">
				<TimelineItem title="HTL Litec • information technology branch • 2014-now">
					<p>
						The IT branch of the HTL Litec has a main focus on:
						<ul>
							<li>Software Development <span className="light-text">in C, C# and Java</span></li>
							<li>Databases <span className="light-text">MSSQL and MySQL</span></li>
							<li>Network technology</li>
							<li>Project management</li>
						</ul>
					</p>
				</TimelineItem>
				<TimelineItem title="NMS Harbach • music branch • 2010-2014" />
			</Timeline>
		);
	}
}
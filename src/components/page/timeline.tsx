import * as React from "react";
import "./timeline.scss";

export interface ITimelineItemProps {
	title: string;
	children?: any;
}

export function TimelineItem(props: ITimelineItemProps) {
	return (
		<div className="card timeline-item">
			<h3>{props.title}</h3>
			{props.children}
		</div>	
	);
}

export interface ITimelineProps {
	title: string;
	children: any;
}

export class Timeline extends React.Component<ITimelineProps> {
	public render() {
		return (
			<div className="page-slide page-slide-timeline page-slide-padding">
				<h1 className="align-center">{this.props.title}</h1>
				<div className="flex-parent">
					<div className="timeline-line"/>
					<div className="list">
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}
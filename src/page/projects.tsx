import * as React from "react";
import "./projects.scss";

export class Projects extends React.Component {
	
	public render() {
		return (
			<div className="page-slide page-slide-projects page-slide-padding page-slide-secondary">
				<h1 className="align-center padding-bottom-1">Projects</h1>
				<div className="flex-parent flex-parent-image-text">
					<video playsinline={true} className="card card-img width-400" muted={true} autoPlay={true} loop={true}>
						<source src="video/smashblox.mp4" type="video/mp4" />
						{/*<source src="videos/grack.ogv" type="video/ogg" />*/}
					</video>
					<div className="card card-text">
						<h2>SmashBlox • 2017-2018</h2>
						<p>
							SmashBlox is a real-time multiplayer action game for Android. You can fight against your friends, random people or bots. 
						</p>
						<p>
							The game has great social media integration, allowing to connect to your Facebook friends or Google contacts.
						</p>
						<span className="light-text">
							Technologies used: Unity, C#, NodeJS, TypeScript, WebSockets, RethinkDB, ...
						</span>
					</div>
				</div>
				<div className="flex-parent flex-parent-image-text flex-parent-image-text-flipped">
					<video playsinline={true} className="card card-img width-300" muted={true} autoPlay={true} loop={true} poster="video/grack.png">
						<source src="video/grack.mp4" type="video/mp4"/>
						<source src="video/grack.ogv" type="video/ogg"/>
					</video>
					<div className="card card-text">
						<h2>Grack, a real-time messenger • 2015</h2>
						<p>
							Grack was a messenger which allowed for rich customization of the user interface, and had many features like groups, friends, sending videos and images.
						</p>
						<span className="light-text">
							Technologies used: NodeJS, Angular, Ionic, MySQL, ...
						</span>
					</div>
				</div>
			</div>
		)
	}
}
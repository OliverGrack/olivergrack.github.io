import * as React from "react";
import "./projects.scss";

const smashBloxVideoURL = "https://scontent-vie1-1.cdninstagram.com/vp/b5a6133ca48b95c4c784cf4b1afbaf80/5B8F8CF1/t50.2886-16/26822229_179737855962286_5109357648680058880_n.mp4";

export class Projects extends React.Component {
	public render() {
		return (
			<div className="page-slide page-slide-projects page-slide-padding page-slide-secondary">
				<h1 className="align-center padding-bottom-1">Projects</h1>
				<div className="flex-parent flex-parent-image-text">
					<video className="card card-img max-width-400" muted={true} src={smashBloxVideoURL} autoPlay={true} loop={true} />
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
					<video className="card card-img max-width-300" muted={true} src="video/grack.mp4" autoPlay={true} loop={true} poster="video/grack.png">
						<source src="videos/grack.mp4" type="video/mp4"/>
						<source src="videos/grack.ogv" type="video/ogg"/>
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
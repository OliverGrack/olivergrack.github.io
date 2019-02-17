import * as React from "react";
import "./projects.scss";

import hippieTreeFriendsVideoMP4 from "../../videos/hippie-tree-friends.mp4";
import smashBloxVideoMP4 from "../../videos/smashblox.mp4";
import grackVideoMP4 from "../../videos/grack.mp4";
import grackPosterPNG from "../../videos/grack.png";

export class Projects extends React.Component {
	public render() {
		return (
			<div className="page-slide page-slide-projects page-slide-padding page-slide-secondary">
				<h1 className="align-center padding-bottom-1">Projects</h1>
				<div className="project flex-parent flex-parent-image-text flex-parent-image-text-flipped">
					<video
						playsinline={true}
						className="card card-img width-400"
						muted={true}
						autoPlay={true}
						loop={true}
					>
						<source src={hippieTreeFriendsVideoMP4} type="video/mp4" />
					</video>
					<div className="card card-text">
						<h2>Hippie Tree Friends • November 2018</h2>
						<p>
							Hippie Tree Friends is a game, some friends of mine and I developed in a
							weekend. The most complex part of this project was to coordinate 8
							people to work on one game.
						</p>
						<p>
							Besides managing most of the software engineering I also did some of the
							art, like those adorable trees.
						</p>
						<span className="light-text">Technologies used: Unity, Photoshop, C#</span>
					</div>
				</div>
				<div className="project flex-parent flex-parent-image-text">
					<video
						playsinline={true}
						className="card card-img width-400"
						muted={true}
						autoPlay={true}
						loop={true}
					>
						<source src={smashBloxVideoMP4} type="video/mp4" />
						{/*<source src="videos/grack.ogv" type="video/ogg" />*/}
					</video>
					<div className="card card-text">
						<h2>SmashBlox • 2017-2018</h2>
						<p>
							SmashBlox is a real-time multiplayer action game for Android. You can
							fight against your friends, random people or bots.
						</p>
						<p>
							The game has great social media integration, allowing to connect to your
							Facebook friends or Google contacts.
						</p>
						<span className="light-text">
							Technologies used: Unity, C#, NodeJS, TypeScript, WebSockets, RethinkDB,
							...
						</span>
					</div>
				</div>
				<div className="project flex-parent flex-parent-image-text flex-parent-image-text-flipped">
					<video
						playsinline={true}
						className="card card-img width-300"
						muted={true}
						autoPlay={true}
						loop={true}
						poster={grackPosterPNG}
					>
						<source src={grackVideoMP4} type="video/mp4" />
					</video>
					<div className="card card-text">
						<h2>Grack, a real-time messenger • 2015</h2>
						<p>
							Grack was a messenger which allowed for rich customization of the user
							interface, and had many features like groups, friends, sending videos
							and images.
						</p>
						<span className="light-text">
							Technologies used: NodeJS, Angular, Ionic, MySQL, ...
						</span>
					</div>
				</div>
			</div>
		);
	}
}

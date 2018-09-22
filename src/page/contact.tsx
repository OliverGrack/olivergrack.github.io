import { faGithub, faInstagram, faLinkedin, faXing, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from "react";
import "./contact.scss";



const ME_IMG = "https://scontent-vie1-1.cdninstagram.com/vp/fd8804d4f0a7f33fb78c42ed7d0a9425/5C2B3764/t51.2885-15/e35/16465744_1093550554087505_4005631588539826176_n.jpg";

interface ISocialLinkProps {
	children: any;
	href: string;
	icon: IconDefinition;
}

function SocialLink (props: ISocialLinkProps) {
	return (
		<>
			<a href={props.href}>
				<FontAwesomeIcon icon={props.icon} fixedWidth={true} /> {props.children}
			</a><br />
		</>
	);
}

export class Contact extends React.Component {
	public render() {
		return (
			<div className="page-slide page-slide-header page-slide-padding page-slide-secondary">
				<div className="flex-parent flex-parent-image-text flex-parent-image-text-flipped">
					<img className="card card-img width-300" src={ME_IMG} />
					<div className="card card-text">
						<h2>Contact me</h2>
						<p>
							I am always interested in projects, or general ideas. <br/>
							Get in touch if you want to: 
						</p>
						<p>
							<SocialLink href="mailto:oliver_gstoe@hotmail.com" icon={faEnvelope} >
								oliver_gstoe@hotmail.com
							</SocialLink>
							<SocialLink href="https://github.com/OliverGrack" icon={faGithub} >
								Github
							</SocialLink>
							<SocialLink href="https://www.linkedin.com/in/oliver-gst%C3%B6ttenbauer-7b9609114/" icon={faLinkedin} >
								LinkedIn
							</SocialLink>
							<SocialLink href="https://www.xing.com/profile/Oliver_Gstoettenbauer/" icon={faXing} >
								Xing
							</SocialLink>
							<SocialLink href="https://www.instagram.com/olivergrack/" icon={faInstagram}>
								Instagram
							</SocialLink>
						</p>
					</div>
				</div>
			</div>
		);
	}
}
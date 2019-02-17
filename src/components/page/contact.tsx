import {
	faGithub,
	faInstagram,
	faLinkedin,
	faXing,
	IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import "./contact.scss";
import { ImageMePicContact } from "../../images/MePicContact";

const ME_IMG = "images/me_pic_contact.jpg";

interface ISocialLinkProps {
	children: any;
	href: string;
	icon: IconDefinition;
}

function SocialLink(props: ISocialLinkProps) {
	return (
		<>
			<a href={props.href}>
				<FontAwesomeIcon icon={props.icon} fixedWidth={true} /> {props.children}
			</a>
			<br />
		</>
	);
}

export function Contact() {
	return (
		<div className="page-slide page-slide-header page-slide-padding page-slide-secondary">
			<div className="flex-parent flex-parent-image-text flex-parent-image-text-flipped">
				{/* <img className="card card-img width-300" src={ME_IMG} /> */}
				<ImageMePicContact style={{ maxWidth: 450 }} className="card card-img width-300" />

				<div className="card card-text">
					<h2>Contact me</h2>
					<p>
						I am always interested in projects, or general ideas. <br />
						Get in touch if you want to:
					</p>
					<p>
						<SocialLink href="mailto:oliver_gstoe@hotmail.com" icon={faEnvelope}>
							oliver_gstoe@hotmail.com
						</SocialLink>
						<SocialLink href="https://github.com/OliverGrack" icon={faGithub}>
							Github
						</SocialLink>
						<SocialLink
							href="https://www.linkedin.com/in/oliver-gst%C3%B6ttenbauer-7b9609114/"
							icon={faLinkedin}
						>
							LinkedIn
						</SocialLink>
						<SocialLink
							href="https://www.xing.com/profile/Oliver_Gstoettenbauer/"
							icon={faXing}
						>
							Xing
						</SocialLink>
						<SocialLink
							href="https://www.instagram.com/olivergrack/"
							icon={faInstagram}
						>
							Instagram
						</SocialLink>
					</p>
				</div>
			</div>
		</div>
	);
}

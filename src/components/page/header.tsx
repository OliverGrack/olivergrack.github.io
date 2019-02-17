import * as React from "react";
import "./header.scss";
import { ImageMe } from "../../images/Me";

const ppImgUrl = "https://gravatar.com/avatar/62046e0f89ebc02873b8b3550d7a5fcb?s=511";

export function Header() {
	return (
		<div className="page-slide page-slide-header page-slide-padding page-slide-secondary">
			<div className="flex-parent flex-parent-image-text">
				{/* <img className="card card-img pp" src={ppImgUrl} /> */}

				<ImageMe style={{ flexGrow: 1, maxWidth: 511 }} className="card card-img pp" />
				<div className="card card-text">
					<h2>Oliver Gstöttenbauer</h2>
					<p>
						I am an Austria based computer science student, currently being in my matura
						year at the <a href="http://www.litec.ac.at/home/">HTL Litec</a>.
					</p>
					<p>This is my portfolio, keep scrolling down to see what I have been up to.</p>
				</div>
			</div>
		</div>
	);
}

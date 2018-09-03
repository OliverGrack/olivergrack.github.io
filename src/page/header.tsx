import * as React from "react";
import img_me from "../img/me.jpg";
import "./header.scss";

export class Header extends React.Component {
	public render() {
		return (
			<div className="page-slide page-slide-header page-slide-padding page-slide-secondary">
				<div className="flex-parent flex-parent-image-text">
					<img className="card card-img pp" src={img_me} />
					<div className="card card-text">
						<h2>Oliver Gstöttenbauer</h2>
						<p>
							I am an Austria based computer science student, currently being in my matura year 
							at the <a href="http://www.litec.ac.at/home/">HTL Litec</a>.
						</p>
						<p>
							This is my portfolio, keep scrolling down to see what I have been up to. 
						</p>
					</div>
				</div>
			</div>
		);
	}
}
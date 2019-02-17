import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import { SEO } from "../components/seo";
import { Header } from "../components/page/header";
import { JobsSlide } from "../components/page/jobs";
import { Projects } from "../components/page/projects";
import { EducationSlide } from "../components/page/education";
import { Contact } from "../components/page/contact";
import "../style/index.scss";

const IndexPage = () => (
	<Layout>
		<SEO keywords={[`gatsby`, `application`, `react`]} />
		<div className="page-parent">
			<Header />
			<JobsSlide />
			<Projects />
			<EducationSlide />
			<Contact />
		</div>
	</Layout>
);

export default IndexPage;

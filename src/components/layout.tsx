import React, { ReactNode } from "react";
import { StaticQuery, graphql } from "gatsby";

type Props = {
	children: ReactNode;
};

const Layout = ({ children }: Props) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={data => <>{children}</>}
	/>
);

export default Layout;

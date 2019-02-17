import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img, { GatsbyImageProps } from "gatsby-image";

export const ImageMe = (props: GatsbyImageProps) => (
	<StaticQuery
		query={graphql`
			query {
				placeholderImage: file(relativePath: { eq: "me.png" }) {
					childImageSharp {
						fluid(maxWidth: 511, quality: 90) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		`}
		render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} {...props} />}
	/>
);

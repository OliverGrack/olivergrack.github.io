import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img, { GatsbyImageProps } from "gatsby-image";

export const ImageMePicContact = (props: GatsbyImageProps) => (
	<StaticQuery
		query={graphql`
			query {
				placeholderImage: file(relativePath: { eq: "mePicContact.jpg" }) {
					childImageSharp {
						fluid(maxWidth: 450, quality: 75) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		`}
		render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} {...props} />}
	/>
);

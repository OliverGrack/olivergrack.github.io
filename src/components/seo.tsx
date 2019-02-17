import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

type Props = {
	description?: string;
	lang?: string;
	meta?: Array<{
		name: string;
		content: string;
	}>;
	keywords?: string[];
	title?: string;
};

export function SEO({ description, lang, meta, keywords, title }: Props) {
	return (
		<StaticQuery
			query={detailsQuery}
			render={data => {
				const metaDescription = description || data.site.siteMetadata.description;

				const fullTitle = (title ? title + " - " : "") + data.site.siteMetadata.title;

				return (
					<Helmet
						htmlAttributes={{
							lang,
						}}
						title={fullTitle}
						titleTemplate={`%s`}
						meta={[
							{
								name: `description`,
								content: metaDescription,
							},
							{
								property: `og:title`,
								content: title,
							},
							{
								property: `og:description`,
								content: metaDescription,
							},
							{
								property: `og:type`,
								content: `website`,
							},
							{
								name: `twitter:card`,
								content: `summary`,
							},
							{
								name: `twitter:creator`,
								content: data.site.siteMetadata.author,
							},
							{
								name: `twitter:title`,
								content: title,
							},
							{
								name: `twitter:description`,
								content: metaDescription,
							},
						]
							.concat(
								keywords.length > 0
									? {
											name: `keywords`,
											content: keywords.join(`, `),
									  }
									: [],
							)
							.concat(meta)}
					/>
				);
			}}
		/>
	);
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	keywords: [],
};

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.array,
	keywords: PropTypes.arrayOf(PropTypes.string),
	title: PropTypes.string.isRequired,
};
const detailsQuery = graphql`
	query DefaultSEOQuery {
		site {
			siteMetadata {
				title
				description
				author
			}
		}
	}
`;

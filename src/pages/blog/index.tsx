import BlogIndexPage from "@components/pages/BlogIndexPage"
import HeaderFooterLayout from "@layouts/HeaderFooterLayout"
import { GetStaticProps } from "next"
import { FC } from "react"

const Blog
: FC
= () => {

	return (
		<HeaderFooterLayout>
			<BlogIndexPage />
		</HeaderFooterLayout>
	)
}

// eslint-disable-next-line no-unused-vars
export const getStaticProps
	: GetStaticProps
	= async () => {

		return {
			props: {
				head: {
					title: "Articles",
					description: "I just wanna share some articles about programming and codes",
					meta: [],
				},
			},
			revalidate: 600,
		}
	}

export default Blog

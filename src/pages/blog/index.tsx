import { FC } from "react"
import HeaderFooterLayout from "@layouts/HeaderFooterLayout"
import BlogIndexPage from "@components/pages/BlogIndexPage"
import { GetStaticProps } from "next"

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
		}
	}

export default Blog

import BlogPage from "@components/pages/BlogPage"
import HeaderFooterLayout from "@layouts/HeaderFooterLayout"
import { FC } from "react"

import { blogData } from "__mock__/blog.data"
import { GetServerSideProps } from "next"
import { NextRouter, useRouter } from "next/router"

const Blog
: FC
= () => {

	const router: NextRouter = useRouter()
	const { slug } = router.query

	return (
		<HeaderFooterLayout>
			<BlogPage
				data={blogData[slug as string]}
			/>
		</HeaderFooterLayout>
	)
}

// eslint-disable-next-line no-unused-vars
export const getServerSideProps
	: GetServerSideProps
	= async (context: any) => {

		const { slug } = context.query

		if((slug as string) in blogData === false) {
			return {
				redirect: {
					permanent: false,
					destination: "/blog",
				},
				props: {},
			}
		}

		return {
			props: {
				head: {
					title: blogData[slug]?.title || "Indra Saswita",
					description: blogData[slug]?.subtitle || "",
					meta: [],
				},
			},
			revalidate: 600,
		}
	}

export default Blog

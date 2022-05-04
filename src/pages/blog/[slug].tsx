import { FC } from "react"
import HeaderFooterLayout from "@layouts/HeaderFooterLayout"
import BlogPage from "@components/pages/BlogPage"

import { NextRouter, useRouter } from "next/router"

const Blog
: FC
= () => {

	const router: NextRouter = useRouter()
	const { slug } = router.query

	return (
		<HeaderFooterLayout>
			<BlogPage
				slug={slug as string}
			/>
		</HeaderFooterLayout>
	)
}

export default Blog

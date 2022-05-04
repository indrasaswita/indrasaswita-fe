import { FC } from "react"
import HeaderFooterLayout from "@layouts/HeaderFooterLayout"
import BlogIndexPage from "@components/pages/BlogIndexPage"

const Blog
: FC
= () => {

	return (
		<HeaderFooterLayout>
			<BlogIndexPage />
		</HeaderFooterLayout>
	)
}

export default Blog

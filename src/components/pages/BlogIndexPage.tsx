import React from "react"
import { connect } from "react-redux"
import BlogList from "./blog-index/BlogList"
import { Wrapper } from "./BlogIndexPage.style"

interface BlogIndexPageProps {

}

interface DispatchProps {

}

export type Props = BlogIndexPageProps & DispatchProps
export const BlogIndexPage
	: React.FunctionComponent<Props>
	= () => {
		return (
			<Wrapper>
				<BlogList />
			</Wrapper>
		)
	}

export default connect(null, {

})(BlogIndexPage)

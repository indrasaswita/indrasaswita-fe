import React from "react"
import { connect } from "react-redux"
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
			</Wrapper>
		)
	}

export default connect(null, {

})(BlogIndexPage)

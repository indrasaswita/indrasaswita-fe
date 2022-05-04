import ContentWrapper from "@layouts/ContentWrapper"
import Blog from "comp-ext/layouts/Blog"
import React from "react"
import { connect } from "react-redux"
import { BlogData } from "__mock__/blog.data"
import { Wrapper } from "./BlogPage.style"

interface BlogPageProps {
	data: BlogData,
}

interface DispatchProps {

}

export type Props = BlogPageProps & DispatchProps
export const BlogPage
	: React.FunctionComponent<Props>
	= (props: Props) => {
		return (
			<Wrapper>
				<ContentWrapper>
					<Blog
						image={props.data.image}
						title={props.data.title}
						subtitle={props.data.subtitle}
						titlePostActions={props.data.titlePostItems}
						sidebar={props.data.sidebar}
					>
						{props.data.content}
					</Blog>
				</ContentWrapper>
			</Wrapper>
		)
	}

export default connect(null, {

})(BlogPage)

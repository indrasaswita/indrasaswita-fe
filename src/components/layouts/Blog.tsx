import Label from "@components/atoms/Label"
import React, { ReactNode } from "react"
import { Wrapper } from "./Blog.style"

export interface BlogProps {
	title?: string,
	subtitle?: string,
	titlePostActions?: ReactNode[],
	children?: ReactNode,
}

export const Blog
	: React.FunctionComponent<BlogProps>
	= (props: BlogProps) => {
		return (
			<Wrapper>
				<div className="blog-content">

					{props.title && (
						<div className="title-wrapper">
							<Label
								type="title blog"
							>
								{props.title}
							</Label>
							<Label
								type="title blog2"
							>
								{props.subtitle}
							</Label>
							<hr
								className="title-border"
							/>
							<div className="post-title">
								{props.titlePostActions
									&& props
										.titlePostActions
										.map((
											actions: ReactNode,
										) => {
											return (
												actions
											)
										})}
							</div>
						</div>
					)}

					{props.children}
				</div>
				<div className="sidebar-wrapper">
					SIDEBAR
				</div>
			</Wrapper>
		)
	}

export default Blog

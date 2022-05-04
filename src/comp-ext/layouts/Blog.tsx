/* eslint-disable @next/next/no-img-element */
import Label from "comp-ext/atoms/Label"
import React, { ReactNode } from "react"
import { Wrapper } from "./Blog.style"

export interface BlogProps {
	image?: string,
	title?: string,
	subtitle?: string,
	titlePostActions?: ReactNode[],
	children?: ReactNode,
	sidebar?: ReactNode,
}

export const Blog
	: React.FunctionComponent<BlogProps>
	= (props: BlogProps) => {
		return (
			<Wrapper>
				<div className="blog-content">

					{props.image && (
						<div className="cover-wrapper">
							<img
								srcSet={props.image}
								alt={props.title}
							/>
						</div>
					)}

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
				{props.sidebar && (
					<div className="sidebar-wrapper">
						{props.sidebar}
					</div>
				)}
			</Wrapper>
		)
	}

export default Blog

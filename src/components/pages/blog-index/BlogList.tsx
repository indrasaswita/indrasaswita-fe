import {
	faPlay as falPlay,
} from "@fortawesome/pro-light-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "@is-style/atoms/Button"
import { EnumButtonType } from "@is-style/atoms/Button.type"
import React, { ReactNode } from "react"
import { blogData } from "__mock__/blog.data"
import HomeSection from "../home/HomeSection"
import { Wrapper } from "./BlogList.style"

export interface BlogListProps {
	isHomeSection?: boolean,
}

export const BlogList
	: React.FunctionComponent<BlogListProps>
	= (props: BlogListProps) => {
		return (
			<Wrapper
				$maxColumn={props.isHomeSection ? 3 : 99}
			>

				<HomeSection
					categories={["articles"]}
					title={"That I want to share to you"}
					subtitle="Let's learn together"
				>

					<p>
						Learn and teach are almost the same, cause when you teach someone you need to learn. The more I teach, the more I will get. And gives its own satisfaction when you can understand and use it in your life.
					</p>

					<div className="blog-list-wrapper">
						{(function () {
							const result: ReactNode[] = []

							for(var k in blogData) {
								result.push(
									<a
										key={k}
										className="list"
										href={`/blog/${k}`}
										target="_self"
										rel="noreferrer"
									>
										<div
											className="cover"
											style={{
												backgroundImage: `url(${blogData[k].image})`,
											}}
										/>
										<div className="title">
											{blogData[k].title}
										</div>
										<div className="subtitle">
											{blogData[k].subtitle}
										</div>
									</a>,
								)
							}

							return result
						})()}
					</div>

					{props.isHomeSection && (
						<div className="action-wrapper">
							<Button
								type={EnumButtonType.Primary}
								href="/blog"
							>
								<FontAwesomeIcon
									icon={falPlay}
								/>&nbsp;&nbsp;
								View More Articles
							</Button>
						</div>
					)}
				</HomeSection>

			</Wrapper>
		)
	}

export default BlogList

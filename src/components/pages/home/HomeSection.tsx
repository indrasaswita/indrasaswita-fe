import Badge from "@is-style/atoms/Badge"
import Label from "@is-style/atoms/Label"
import ContentWrapper from "@layouts/ContentWrapper"
import React, { ReactNode } from "react"
import { Wrapper } from "./HomeSection.style"

export interface HomeSectionProps {
	backgroundColor?: string,
	color?: string,
	padding?: string,
	margin?: string,

	categories?: string[],
	title?: string,
	subtitle?: string,
	tags?: string[],
	children?: ReactNode,
	headlineUrl?: string,
}

export const HomeSection
	: React.FunctionComponent<HomeSectionProps>
	= (props: HomeSectionProps) => {
		return (
			<Wrapper
				backgroundColor={props.backgroundColor}
				color={props.color}
				padding={props.padding}
				margin={props.margin}
			>
				<ContentWrapper
					className="flex-box"
				>
					{props.headlineUrl && (
						<div
							className="section-headline"
							style={{
								backgroundImage: `url(${props.headlineUrl})`,
							}}
						/>
					)}
					<div className="section-main-wrapper">
						<div className="section-category-wrapper">
							{props.categories
								&& props
									.categories
									?.map((category: string, index: number) => {
										return (
											<Badge
												key={index}
												content={category.toUpperCase()}
												fontWeight="700"
												letterSpacing="1px"
											/>
										)
									})}
						</div>

						<Label
							type="title section"
							subChildren={props.subtitle}
						>
							{props.title}
						</Label>

						<div className="section-content-wrapper">
							{props.children}
						</div>
					</div>
				</ContentWrapper>
			</Wrapper>
		)
	}

export default HomeSection

import React from "react"
import { Wrapper } from "./SidebarCardTitle.style"

export interface SidebarCardTitleProps {
	title: string,
	subtitle?: string,
}

export const SidebarCardTitle
	: React.FunctionComponent<SidebarCardTitleProps>
	= (props: SidebarCardTitleProps) => {
		return (
			<Wrapper>
				<div className="title">
					{props.title}
				</div>
				{props.subtitle && (
					<div className="subtitle">
						{props.subtitle}
					</div>
				)}
			</Wrapper>
		)
	}

export default SidebarCardTitle

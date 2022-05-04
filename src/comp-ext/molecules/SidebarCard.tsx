import SidebarCardTitle from "comp-ext/atoms/sidebar-card/SidebarCardTitle"
import React, { ReactNode } from "react"
import { Wrapper } from "./SidebarCard.style"

export interface SidebarCardProps {
	title?: string,
	subtitle?: string,
	children: ReactNode,
}

export const SidebarCard
	: React.FunctionComponent<SidebarCardProps>
	= (props: SidebarCardProps) => {
		return (
			<Wrapper>
				{props.title && (
					<SidebarCardTitle
						title={props.title}
						subtitle={props.subtitle}
					/>
				)}
				<div className="content">
					{props.children}
				</div>
			</Wrapper>
		)
	}

export default SidebarCard

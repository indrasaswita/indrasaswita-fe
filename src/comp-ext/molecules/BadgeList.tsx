import React, { ReactNode } from "react"
import { Wrapper } from "./BadgeList.style"

export interface BadgeListProps {
	children: ReactNode,
}

export const BadgeList
	: React.FunctionComponent<BadgeListProps>
	= (props: BadgeListProps) => {
		return (
			<Wrapper>
				{props.children}
			</Wrapper>
		)
	}

export default BadgeList

import React, { ReactNode } from "react"
import { Wrapper } from "./SidebarCardGroup.style"

export interface SidebarCardGroupProps {
	children: ReactNode | ReactNode[],
}

export const SidebarCardGroup
	: React.FunctionComponent<SidebarCardGroupProps>
	= (props: SidebarCardGroupProps) => {
		return (
			<Wrapper>
				{props.children}
			</Wrapper>
		)
	}

export default SidebarCardGroup

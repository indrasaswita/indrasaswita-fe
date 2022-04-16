import Dropdown from "@components/atoms/Dropdown"
import { NavItem } from "@components/atoms/nav-item.interface"
import React, { ReactNode } from "react"
import { Wrapper } from "./DropdownPopup.style"

export interface DropdownPopupProps {
	toggler: ReactNode,
	navItems: NavItem[],
}

export const DropdownPopup
	: React.FunctionComponent<DropdownPopupProps>
	= (props: DropdownPopupProps) => {
		return (
			<Wrapper>
				{props.toggler}
				<Dropdown
					data={props.navItems}
				/>
			</Wrapper>
		)
	}

export default DropdownPopup

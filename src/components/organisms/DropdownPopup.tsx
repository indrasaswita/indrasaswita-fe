import Button from "@components/atoms/Button"
import Dropdown from "@components/atoms/Dropdown"
import { NavItem } from "@components/atoms/nav-item.interface"
import React, { ReactNode, useState } from "react"
import { Wrapper } from "./DropdownPopup.style"

interface DropdownPopupProps {
	toggler: ReactNode | ReactNode[],
	navItems: NavItem[],
}

const DropdownPopup
	: React.FunctionComponent<DropdownPopupProps>
	= (props: DropdownPopupProps) => {

		const [show, setShow] = useState<boolean>(false)

		return (
			<Wrapper>
				<Button
					onClick={() => {
						setShow(!show)
					}}
				>
					{props.toggler}
				</Button>
				<Dropdown
					show={show}
					data={props.navItems}
				/>
			</Wrapper>
		)
	}

export default DropdownPopup

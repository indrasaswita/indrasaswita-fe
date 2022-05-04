import { EnumButtonType } from "@is-style/atoms/Button.type"
import Button from "comp-ext/atoms/Button"
import Dropdown from "comp-ext/atoms/Dropdown"
import { NavItem } from "comp-ext/atoms/nav-item.interface"
import React, { ReactNode, useState } from "react"
import { Wrapper } from "./DropdownPopup.style"

interface DropdownPopupProps {
	toggler: ReactNode | ReactNode[],
	togglerPadding?: string,
	navItems: NavItem[],
}

const DropdownPopup
	: React.FunctionComponent<DropdownPopupProps>
	= (props: DropdownPopupProps) => {

		const [show, setShow] = useState<boolean>(false)

		return (
			<Wrapper
				onBlur={() => {
					setTimeout(() => {
						setShow(false)
					}, 100)
				}}
			>
				<Button
					type={EnumButtonType.Transp}
					padding={props.togglerPadding}
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

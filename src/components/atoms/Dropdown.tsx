import React from "react"
import { Wrapper } from "./Dropdown.style"
import { NavItem } from "./nav-item.interface"

export interface DropdownProps {
	data: NavItem[],
	show?: boolean,
}

export const Dropdown
	: React.FunctionComponent<DropdownProps>
	= (props: DropdownProps) => {

		return (
			<Wrapper
				show={props.show}
			>
				<div className="dropdown-list">
					{props
						.data
						.map((
							item: NavItem,
							index: number,
						) => {

							return [

								item.type === "item"
									&& !item.url
									&& (
										<div
											key={index}
											className="item"
											onClick={() => {
												if(item.onClick) {
													item.onClick()
												}
											}}
										>
											{item.label}
										</div>
									),

								item.type === "item"
									&& item.url
									&& (
										<a
											key={index}
											className="item"
											href={item.url}
										>
											{item.label}
										</a>
									),

								item.type === "divider"
									&& (
										<hr key={index} />
									),
							]

						})}
				</div>
			</Wrapper>
		)
	}

export default Dropdown

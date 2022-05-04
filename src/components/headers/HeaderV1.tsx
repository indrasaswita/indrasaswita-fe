import DropdownPopup from "comp-ext/organisms/DropdownPopup"
import {
	faMapLocationDot as fadMapLocationDot,
} from "@fortawesome/pro-duotone-svg-icons"
import {
	faUserCircle as falUserCircle,
} from "@fortawesome/pro-light-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ContentWrapper from "layouts/ContentWrapper"
import React from "react"
import { Wrapper } from "./HeaderV1.style"

export type HeaderNavItem = {
	label: string,
	url: string,
	children?: HeaderNavItem[],
}

export interface HeaderV1Props {
	menus: HeaderNavItem[],
}

export const HeaderV1
	: React.FunctionComponent<HeaderV1Props>
	= (props: HeaderV1Props) => {
		return (
			<Wrapper>
				<div className="very-top-wrapper">
					<ContentWrapper
						className="very-top-info"
					>
						<div className="info-text">
							This site is currently under construction
						</div>
						<div className="location">
							<FontAwesomeIcon
								icon={fadMapLocationDot}
								fixedWidth
							/>
							Jakarta, Indonesia
						</div>
					</ContentWrapper>
				</div>
				<ContentWrapper>
					<div className="nav-wrapper">
						<ul className="navs">
							{props
								.menus
								.map((
									menu: HeaderNavItem,
									index: number,
								) => {
									return (
										<li
											key={index}
										>
											<a href={menu.url}>
												{menu.label}
											</a>
										</li>
									)
								})}
						</ul>
						<DropdownPopup
							togglerPadding="calc(4px + .4vw) calc(8px + .8vw)"
							toggler={(
								<>
									<FontAwesomeIcon
										icon={falUserCircle}
									/>&nbsp;
									User
								</>
							)}
							navItems={[
								{
									type: "item",
									label: "Item 1",
									onClick: () => {
										console.log("ITEM 1")
									},
								},
								{
									type: "item",
									label: "Item 2",
									url: "Item 1",
								},
								{
									type: "divider",
								},
								{
									type: "item",
									label: "Item 3",
									url: "Item 1",
								},
							]}
						/>
					</div>
				</ContentWrapper>
			</Wrapper>
		)
	}

export default HeaderV1

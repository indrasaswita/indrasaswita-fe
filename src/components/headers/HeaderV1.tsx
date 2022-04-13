import {
	faMapLocationDot as fadMapLocationDot,
} from "@fortawesome/pro-duotone-svg-icons"
import {
	faUserCircle as falUserCircle,
} from "@fortawesome/pro-light-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Color from "@styles/themes/default/variable.mixin"
import ContentWrapper from "layouts/ContentWrapper"
import { lighten } from "polished"
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
				<ContentWrapper
					backgroundColor={lighten(.15, Color.primary)}
				>
					<div className="very-top-info">
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
					</div>
				</ContentWrapper>
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
						<div className="dropdown-account">
							<div className="btn-toggle">
								<FontAwesomeIcon
									icon={falUserCircle}
									fixedWidth
								/>
								User
							</div>
						</div>
					</div>
				</ContentWrapper>
			</Wrapper>
		)
	}

export default HeaderV1

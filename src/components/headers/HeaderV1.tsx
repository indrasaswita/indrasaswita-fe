import DropdownPopup from "comp-ext/organisms/DropdownPopup"
import {
	faMapLocationDot as fadMapLocationDot,
	faPhoneCircleAlt,
} from "@fortawesome/pro-duotone-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ContentWrapper from "layouts/ContentWrapper"
import React from "react"
import { Wrapper } from "./HeaderV1.style"
import {
	faWhatsapp as fabWhatsapp,
} from "@fortawesome/free-brands-svg-icons"
import {
	faEnvelopeBadge as falEnvelopeBadge,
	faMobileAndroid as falMobileAndroid,
} from "@fortawesome/pro-light-svg-icons"

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
										icon={faPhoneCircleAlt}
										flip="horizontal"
									/>&nbsp;
									Contact
								</>
							)}
							navItems={[
								{
									type: "item",
									label: (
										<>
											<FontAwesomeIcon
												icon={fabWhatsapp}
												fixedWidth
											/>&nbsp;
											Whatsapp
										</>
									),
									url: "https://wa.me/6281315519889",
									target: "_blank",
								},
								{
									type: "item",
									label: (
										<>
											<FontAwesomeIcon
												icon={falEnvelopeBadge}
												fixedWidth
											/>&nbsp;
											Email
										</>
									),
									url: "mailto:indrasaswita@gmail.com",
								},
								{
									type: "divider",
								},
								{
									type: "item",
									label: (
										<>
											<FontAwesomeIcon
												icon={falMobileAndroid}
												fixedWidth
											/>&nbsp;
											Phone
										</>
									),
									url: "tel:6281315519889",
								},
							]}
						/>
					</div>
				</ContentWrapper>
			</Wrapper>
		)
	}

export default HeaderV1

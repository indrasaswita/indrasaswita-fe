import HeaderV1 from "@components/headers/HeaderV1"
import React, { ReactNode } from "react"
import ContentWrapper from "./ContentWrapper"
import { Wrapper } from "./HeaderFooterLayout.style"

export interface HeaderFooterLayoutProps {
	children?: ReactNode,
}

export const HeaderFooterLayout
	: React.FunctionComponent<HeaderFooterLayoutProps>
	= (props: HeaderFooterLayoutProps) => {
		return (
			<Wrapper>
				<div className="header-wrapper">
					<HeaderV1
						menus={[
							{
								label: "Home",
								url: "/",
							},
							{
								label: "Article",
								url: "/blog",
							},
							{
								label: "About Me",
								url: "/aboutme",
							},
						]}
					/>
				</div>
				<div className="content-wrapper">
					{props.children}
				</div>
				<div className="footer-wrapper">
					<ContentWrapper>
						FOOTER
					</ContentWrapper>
				</div>
			</Wrapper>
		)
	}

export default HeaderFooterLayout

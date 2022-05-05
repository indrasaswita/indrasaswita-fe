import HeaderV1 from "@components/headers/HeaderV1"
import {
	faGithub as fabGithub,
	faLinkedin as fabLinkedin,
	faNpm as fabNpm,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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
					<ContentWrapper
						className="footer"
					>
						<div className="left">
							&copy; Copyright {(new Date()).getFullYear()}. Indra Saswita
						</div>
						<div className="center">
							&nbsp;
						</div>
						<div className="right">
							<a
								href="https://www.linkedin.com/in/indra-saswita/"
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={fabLinkedin}
								/>
							</a>
							<a
								href="https://github.com/indrasaswita"
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={fabGithub}
								/>
							</a>
							<a
								href="https://www.npmjs.com/~indrasaswita"
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={fabNpm}
								/>
							</a>
						</div>
					</ContentWrapper>
				</div>
			</Wrapper>
		)
	}

export default HeaderFooterLayout

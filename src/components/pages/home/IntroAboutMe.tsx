import ContentWrapper from "@layouts/ContentWrapper"
import React from "react"
import {
	faGithub as fabGithub,
	faLinkedin as fabLinkedin,
	faNpm as fabNpm,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Wrapper } from "./IntroAboutMe.style"

export interface IntroAboutMeProps {

}

export const IntroAboutMe
	: React.FunctionComponent<IntroAboutMeProps>
	= () => {
		return (
			<Wrapper>
				<ContentWrapper>
					<div className="intro-text">
						<div className="title">
							HEY! I&apos;M <span className="grad">INDRA</span>
						</div>
						<div className="subtitle">
							I AM A <span className="grad">WEB DEVELOPER</span>
						</div>
						<div className="description">
							Creating with love and passion, interactive and clean code is my rules. Enthusiatic with React, Angular, Laravel, and GoLang as my primary languages.
						</div>
						<div className="action">
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
					</div>
				</ContentWrapper>
			</Wrapper>
		)
	}

export default IntroAboutMe

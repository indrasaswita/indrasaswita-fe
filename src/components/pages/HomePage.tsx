import { screenSize } from "@config/screen-breakpoint"
import useReduxAuth from "@helpers/hooks/redux-auth"
import { useWindowSize, WindowSize } from "@helpers/hooks/window-size"
import Button from "@is-style/atoms/Button"
import { EnumButtonType } from "@is-style/atoms/Button.type"
import Divider from "@is-style/atoms/Divider"
import { updateAuth } from "@storages/auth/action"
import Color from "@styles/themes/default/variable.mixin"
import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import BlogList from "./blog-index/BlogList"
import HomeSection from "./home/HomeSection"
import IntroAboutMe from "./home/IntroAboutMe"
import { Wrapper } from "./HomePage.style"

interface HomePageProps {

}

interface DispatchProps {
	updateAuth: typeof updateAuth,
}

export type Props = HomePageProps & DispatchProps
export const HomePage
	: React.FunctionComponent<Props>
	= (props: Props) => {

		const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false)

		const windowSize: WindowSize = useWindowSize()

		const {
			authState,
		} = useReduxAuth()

		useEffect(() => {
			props.updateAuth({
				...authState,
				id: 1,
				firstName: "John",
				lastName: "Doe",
				name: "John Doe",
			})
		// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [])

		useEffect(() => {
			if (windowSize.width < screenSize.tabletL) {
				setIsSmallScreen(true)
			} else {
				setIsSmallScreen(false)
			}
		}, [windowSize.width])

		return (
			<Wrapper>
				<IntroAboutMe />

				<BlogList
					isHomeSection
				/>

				<HomeSection
					categories={["About"]}
					title={"About Me"}
					backgroundColor="#EEE"
					headlineUrl={isSmallScreen ? null : "/assets/images/aboutme_v1.jpg"}
				>
					<Divider
						text="Full Stack Engineer"
						lineLength={50}
						lineWidth={2}
						lineColor={Color.primary}
						color={Color.primary}
						fontSize="120%"
						fontWeight="500"
					/>

					<p>
						As a recent graduate from Binus University of Computer Science, I am excited to begin my career in the field of computer engineering and love to learn new algorithm and programming language. Please look at my resume below, to know me better.
					</p>

					<Button
						key={1}
						href="aboutme"
						type={EnumButtonType.PrimaryOutlined}
					>
						View My Resume
					</Button>
				</HomeSection>
			</Wrapper>
		)
	}

export default connect(null, {
	updateAuth,
})(HomePage)

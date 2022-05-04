import useReduxAuth from "@helpers/hooks/redux-auth"
import Button from "@is-style/atoms/Button"
import { EnumButtonType } from "@is-style/atoms/Button.type"
import Divider from "@is-style/atoms/Divider"
import { updateAuth } from "@storages/auth/action"
import Color from "@styles/themes/default/variable.mixin"
import React, { useEffect } from "react"
import { connect } from "react-redux"
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

		return (
			<Wrapper>
				<IntroAboutMe />

				<HomeSection
					categories={["articles"]}
					title={"That I want to share to you"}
					subtitle="Let's learn together"
				>

					<p>
						Learn and teach are almost the same, cause when you teach someone you need to learn. The more I teach, the more I will get. And gives its own satisfaction when you can understand and use it in your life.
					</p>
				</HomeSection>

				<HomeSection
					categories={["About"]}
					title={"About Me"}
					backgroundColor="#EEE"
					headlineUrl={"https://indrasaswita.com/assets/images/home-aboutme.png"}
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

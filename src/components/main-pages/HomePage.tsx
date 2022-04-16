import { Text } from "is-react-style"
import useReduxAuth from "@helpers/hooks/redux-auth"
import { updateAuth } from "@storages/auth/action"
import React, { useEffect } from "react"
import { connect } from "react-redux"
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
				{/* <Button /> */}
				<Text />
				{authState.name}
			</Wrapper>
		)
	}

export default connect(null, {
	updateAuth,
})(HomePage)

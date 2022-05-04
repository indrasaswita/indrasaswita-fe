import HomePage from "@components/pages/HomePage"
import { FC } from "react"
import HeaderFooterLayout from "@layouts/HeaderFooterLayout"

const Home
: FC
= () => {

	return (
		<HeaderFooterLayout>
			<HomePage />
		</HeaderFooterLayout>
	)
}

export default Home

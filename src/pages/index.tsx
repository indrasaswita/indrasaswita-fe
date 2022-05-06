import HomePage from "@components/pages/HomePage"
import { FC } from "react"
import HeaderFooterLayout from "@layouts/HeaderFooterLayout"
import { GetStaticProps } from "next"

const Home
: FC
= () => {

	return (
		<HeaderFooterLayout>
			<HomePage />
		</HeaderFooterLayout>
	)
}

// eslint-disable-next-line no-unused-vars
export const getStaticProps
	: GetStaticProps
	= async () => {

		return {
			props: {
				head: {
					title: "Indra Saswita",
					description: "Let's learn together and share the joy",
					meta: [],
				},
			},
		}
	}

export default Home

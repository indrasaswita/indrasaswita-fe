import AboutMePage from "@components/pages/AboutMePage"
import HeaderFooterLayout from "@layouts/HeaderFooterLayout"
import { GetStaticProps } from "next"
import { FC } from "react"

const AboutMe
: FC
= () => {

	return (
		<HeaderFooterLayout>
			<AboutMePage />
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
					title: "My Profile",
					description: "Here is my detail of experiences. Want to know me better?",
					meta: [],
				},
			},
			revalidate: 600,
		}
	}

export default AboutMe

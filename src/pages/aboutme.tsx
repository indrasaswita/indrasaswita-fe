import AboutMePage from "@components/pages/AboutMePage"
import { FC } from "react"
import HeaderFooterLayout from "@layouts/HeaderFooterLayout"

const AboutMe
: FC
= () => {

	return (
		<HeaderFooterLayout>
			<AboutMePage />
		</HeaderFooterLayout>
	)
}

export default AboutMe

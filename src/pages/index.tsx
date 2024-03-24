import dynamic from "next/dynamic"
import { GetStaticProps } from "next/types"
import { FC, Suspense } from "react"

// eslint-disable-next-line @typescript-eslint/typedef
const DynamicHeaderFooterLayout = dynamic(() => import("@layouts/HeaderFooterLayout"), {
	loading: () => <p>Loading...</p>,
	suspense: true,
})
// eslint-disable-next-line @typescript-eslint/typedef
const DynamicHome = dynamic(() => import("@components/pages/HomePage"), {
	loading: () => <p>Loading...</p>,
	suspense: true,
})

const Home
: FC
= () => {

	return (
		<Suspense
			fallback={<p>Loading...</p>}
		>
			<DynamicHeaderFooterLayout>
				<DynamicHome />
			</DynamicHeaderFooterLayout>
		</Suspense>
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
			revalidate: 600,
		}
	}

export default Home

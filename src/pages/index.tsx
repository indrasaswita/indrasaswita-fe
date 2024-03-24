import HomePage from "@components/pages/HomePage"
import { get } from "@vercel/edge-config"
import { GetStaticProps } from "next"
import dynamic from "next/dynamic"
import { FC, Suspense } from "react"

const DynamicHeaderFooterLayout = dynamic(() => import("@layouts/HeaderFooterLayout"), {
	loading: () => <p>Loading...</p>,
	suspense: true,
})


const Home
: FC
= (props: any) => {

	return (
		<Suspense
			fallback={<p>{props.vars.loadingText || ""}</p>}
		>
			<DynamicHeaderFooterLayout>
				<HomePage />
			</DynamicHeaderFooterLayout>
		</Suspense>
	)

}


export const getStaticProps
	= (async () => {
		const vars = await get('vars');

		return {
			props: {
				head: {
					title: "Indra Saswita",
					description: "Let's learn together and share the joy",
					meta: [],
				},
				vars,
			},
			revalidate: 600,
		}
	}) satisfies GetStaticProps

export default Home

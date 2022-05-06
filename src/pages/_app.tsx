import { HeadProps, MetaTag } from "@helpers/types/headers"
import { store } from "@storages/store"
import { GlobalAppWrapper } from "layouts/GlobalAppLayout.style"
import Head from "next/head"
import { FC } from "react"
import { Provider } from "react-redux"
import "../styles/globals.css"

export type PageProps = {
	head: HeadProps,
	page: any,
}
interface MyAppProps {
	Component: any,
	pageProps: PageProps,
	router: any,
}

const MyApp
	: FC<MyAppProps>
	= (props: MyAppProps) => {

		const generateMeta: any = (meta: MetaTag[]) => {
			return (
				meta.map((tag: MetaTag, index: number) => {
					return <meta key={index} name={tag.name} content={tag.content}/>
				})
			)
		}

		return (
			<>
				<Head>
					<title>{props.pageProps?.head?.title || ""}</title>
					<meta name='charset' content='utf-8' />
					<meta name='viewport' content='width=device-width, initial-scale=1.0' />
					<meta name='title' content={props.pageProps?.head?.title} />
					<meta property="og:title" content={props.pageProps?.head?.title} key="title" />
					<meta name='description' content={props.pageProps?.head?.description} />
					{ props.pageProps?.head?.meta && generateMeta (props.pageProps?.head?.meta) }
				</Head>
				<Provider store={store}>
					<GlobalAppWrapper>
						<props.Component
							{...props.pageProps}
						/>
					</GlobalAppWrapper>
				</Provider>
			</>
		)
	}

export default MyApp

import { store } from "@storages/store"
import { GlobalAppWrapper } from "layouts/GlobalAppLayout.style"
import { FC } from "react"
import { Provider } from "react-redux"
import "../styles/globals.css"

interface MyAppProps {
	Component: any,
	pageProps: any,
}

const MyApp
	: FC<MyAppProps>
	= (props: MyAppProps) => {

		return (
			<Provider store={store}>
				<GlobalAppWrapper>
					<props.Component
						{...props.pageProps}
					/>
				</GlobalAppWrapper>
			</Provider>
		)
	}

export default MyApp

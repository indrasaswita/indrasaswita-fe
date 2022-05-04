import { ReactNode } from "react"

export type NavType = "divider" | "item"

export type NavItem = {
	type: NavType,
	label?: ReactNode,
	url?: string,
	target?: string,
	onClick?: Function,
	children?: NavItem[],
}

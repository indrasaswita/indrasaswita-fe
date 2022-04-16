export type NavType = "divider" | "item"

export type NavItem = {
	type: NavType,
	label?: string,
	url?: string,
	onClick?: Function,
	children?: NavItem[],
}

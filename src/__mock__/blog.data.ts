import { ReactNode } from "react"
import { codingForKids } from "./blog/coding-for-kids.data"
import { whatIsReactForMe } from "./blog/what-is-react-for-me.data"
import { whyTypescript } from "./blog/why-typescript.data"

export interface BlogData {
	image?: string,
	title: string,
	subtitle?: string,
	titlePostItems?: ReactNode[],
	sidebar?: ReactNode,
	content?: ReactNode,
}

export const blogData
	: {[k: string]: BlogData}
	= {
		"why-typescript": whyTypescript,
		"coding-for-kids": codingForKids,
		"what-is-react-for-me": whatIsReactForMe,
	}

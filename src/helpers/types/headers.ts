export type MetaTag = {
	name: string
	content?: string
	property?: string
}

export type HeadProps = {
title: string
	description: string
	meta: MetaTag[]
}

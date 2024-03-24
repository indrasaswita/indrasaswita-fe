// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { get } from "@vercel/edge-config"

export default async function handler(req, res) {
	// eslint-disable-next-line @typescript-eslint/typedef
	let greeting = await get(greeting)

	res.status(200).json({ name: greeting })
}

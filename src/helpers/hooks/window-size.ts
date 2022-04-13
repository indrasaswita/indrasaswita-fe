import { useEffect, useState } from "react"

export type WindowSize = {
	width: number,
	height: number,
}

export const useWindowSize: () => WindowSize = () => {
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	})
	useEffect(() => {
		const handleResize: () => void = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			})
		}
		window.addEventListener("resize", handleResize)
		handleResize()
		return () => window.removeEventListener("resize", handleResize)
	}, [])

	return windowSize
}

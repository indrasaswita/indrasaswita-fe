type RGBType = {
	r: number,
	g: number,
	b: number,
}

// eslint-disable-next-line no-unused-vars
const hexToRgb: (hex: string) => RGBType = (hex: string) => {
	// http://stackoverflow.com/a/5624139
	var shorthandRegex: RegExp = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
	hex = hex.replace(shorthandRegex, (m: string, r: string, g: string, b: string) => {
		return r + r + g + g + b + b
	})

	var result: RegExpExecArray = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
	return result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16),
	} : null
}

// eslint-disable-next-line no-unused-vars
const rgba: (hex: string, alpha: any) => string = (hex: string, alpha: any) => {
	const color: RGBType = hexToRgb(hex)
	return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`
}

export default rgba

/* eslint-disable no-unused-vars */
export enum EnumFileType {
	JS="js",
	TXT="txt",
	JSX="jsx",
	TS="ts",
	TSX="tsx",
	HTML="html",
	CSS="css",
	SCSS="scss",
	JSON="json",
}

export const getFileTypeLabel
	: (value: EnumFileType) => string
	= (value: EnumFileType) => {
		switch (value) {
		case EnumFileType.JS:
			return "Javascript"
		case EnumFileType.TXT:
			return "Text"
		case EnumFileType.JSX:
			return "React Javascript"
		case EnumFileType.TS:
			return "Typescript"
		case EnumFileType.TSX:
			return "React Typescript"
		case EnumFileType.HTML:
			return "HTML"
		case EnumFileType.CSS:
			return "CSS"
		case EnumFileType.SCSS:
			return "SCSS"
		case EnumFileType.JSON:
			return "JSON"
		}
	}

export const getHighlighterLanguage
	: (value: EnumFileType) => string
	= (value: EnumFileType) => {
		switch (value) {
		case EnumFileType.JSX:
		case EnumFileType.JS:
			return "javascript"
		case EnumFileType.TXT:
			return "plaintext"
		case EnumFileType.TS:
		case EnumFileType.TSX:
			return "typescript"
		case EnumFileType.HTML:
			return "HTML"
		case EnumFileType.CSS:
			return "CSS"
		case EnumFileType.SCSS:
			return "SCSS"
		case EnumFileType.JSON:
			return "json"
		}
	}

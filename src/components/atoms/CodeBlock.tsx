import React from "react"
import { Wrapper } from "./CodeBlock.style"
import Highlighter from "react-syntax-highlighter"
import {
	faClipboard as fasClipboard,
} from "@fortawesome/pro-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { EnumFileType, getFileTypeLabel, getHighlighterLanguage } from "@helpers/types/file-type"

export interface CodeBlockProps {
	children: string,
	title?: string,
	fileType?: EnumFileType,
	showCopy?: boolean,
}

export const CodeBlock
	: React.FunctionComponent<CodeBlockProps>
	= (props: CodeBlockProps) => {

		const copyCode
			: () => void
			= () => {
				navigator
					.clipboard
					.writeText(props.children.trim())
			}

		return (
			<Wrapper>
				<div className="identifier-wrapper">
					<div
						className="language"
					>
						<div className="short">
							{props.fileType.toUpperCase()}
						</div>
						<div className="long">
							{getFileTypeLabel(props.fileType)}
						</div>
					</div>
				</div>
				<Highlighter language={
					getHighlighterLanguage(props.fileType)
				}>
					{props.children}
				</Highlighter>
				<div
					className="copy-clipboard-wrapper"
					onClick={() => {
						copyCode()
					}}
				>
					<FontAwesomeIcon
						icon={fasClipboard}
						fixedWidth
					/>
				</div>
			</Wrapper>
		)
	}

export default CodeBlock

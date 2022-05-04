import React, { ReactNode } from "react"
import { Wrapper } from "./Paragraph.style"

type ParagraphType = "code"| "blog"

export interface ParagraphProps {
	type?: ParagraphType,
	children?: ReactNode | ReactNode[],
	style?: object,
}

export const Paragraph
	: React.FunctionComponent<ParagraphProps>
	= (props: ParagraphProps) => {
		return (
			<Wrapper
				className={
					"p "
					+ (props.type ? props.type : "")
				}
				style={props.style}
			>
				{props.children}
			</Wrapper>
		)
	}

export default Paragraph

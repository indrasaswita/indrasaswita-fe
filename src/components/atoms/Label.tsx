import React, { ReactNode } from "react"
import { Wrapper } from "./Label.style"

type LabelType = "title code" | "title code2" | "title blog" | "title blog2"

export interface LabelProps {
	type?: LabelType,
	children?: ReactNode | ReactNode[],
	style?: object,
}

export const Label
	: React.FunctionComponent<LabelProps>
	= (props: LabelProps) => {
		return (
			<Wrapper
				className={
					"label "
					+ (props.type ? props.type : "")
				}
				style={props.style}
			>
				{props.children}
			</Wrapper>
		)
	}

export default Label

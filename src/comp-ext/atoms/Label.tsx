import React, { ReactNode } from "react"
import { Wrapper } from "./Label.style"

type LabelType = "title code" | "title code2" | "title blog" | "title blog2" | "title section" | "title page"

export interface LabelProps {
	type?: LabelType,
	children?: ReactNode,
	subChildren?: ReactNode,
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
				<div
					className={
						"label "
						+ (props.type ? props.type : "")
					}
				>{props.children}</div>
				<div
					className={
						"sublabel "
						+ (props.type ? props.type : "")
					}
				>{props.subChildren}</div>
			</Wrapper>
		)
	}

export default Label

import React, { ReactNode } from "react"
import { Wrapper } from "./Button.style"

export interface ButtonProps {
	children?: ReactNode,
}

export const Button
	: React.FunctionComponent<ButtonProps>
	= (props: ButtonProps) => {
		return (
			<Wrapper>
				{props.children}
			</Wrapper>
		)
	}

export default Button

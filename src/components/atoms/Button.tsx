import React, { ReactNode } from "react"
import { Wrapper } from "./Button.style"

export interface ButtonProps {
	children?: ReactNode,
	// eslint-disable-next-line no-unused-vars
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}

export const Button
	: React.FunctionComponent<ButtonProps>
	= (props: ButtonProps) => {
		return (
			<Wrapper
				onClick={props.onClick}
			>
				{props.children}
			</Wrapper>
		)
	}

export default Button

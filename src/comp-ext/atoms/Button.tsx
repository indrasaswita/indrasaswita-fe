import React, { ReactNode, useEffect, useState } from "react"
import { Wrapper } from "./Button.style"
import { EnumButtonOverflow, EnumButtonType } from "./Button.type"

interface ButtonProps {
	title?: string | JSX.Element,
	children?: ReactNode,
	icon?: any,
	type?: EnumButtonType,
	disabled?: boolean,
	minWidth?: string,
	width?: string,
	height?: string,
	borderRadius?: string,
	padding?: string,
	overflow?: EnumButtonOverflow,
	href?: string,
	target?: string,
	centeredContent?: boolean,
	/* eslint-disable-next-line no-unused-vars */
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}

const Button
	: React.FunctionComponent<ButtonProps>
	= (props: ButtonProps) => {

		const [cls, setCls] = useState("")

		useEffect(() => {
			let tmp: string = "btn "
			tmp += props.type ? "btn-" + props.type + " " : "",
			tmp += props.disabled ? "disabled " : "",

			tmp += props.overflow ? "overf-" + props.overflow + " " : "",
			tmp += props.centeredContent ? "centered-content " : "",

			setCls(tmp)
		}, [props])

		return (
			<Wrapper
				padding={props.padding}
				minWidth={props.minWidth}
				width={props.width}
				height={props.height}
				borderRadius={props.borderRadius}
			>
				{!props.href && (
					<button
						className={cls}
						onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
							props.onClick(e)
						}}
						disabled={props.disabled}
					>
						{props.title}
						{props.children}
					</button>
				)}

				{props.href && (
					<a
						className={
							cls
						+ "link"
						+ (props.disabled ? " disabled " : "")
						}
						href={
							props.disabled ? "" : props.href
						}
						target={
							props.target ? props.target : "_self"
						}
					>
						{props.title}
						{props.children}
					</a>
				)}
			</Wrapper>
		)
	}

export default Button

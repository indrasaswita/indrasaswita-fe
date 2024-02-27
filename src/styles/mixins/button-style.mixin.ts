/* eslint-disable no-unused-vars */
/**
 * Border Radius Mixin
 * @author IS
 * @since 2021-01-17
 */

import { css, Interpolation } from "styled-components"

export type ButtonStyleProps = {
	borderColor: string,
	backgroundColor: string,
	color: string,
	backgroundColorHover: string,
	colorHover: string,
}

export const buttonStyle
: (props: ButtonStyleProps) => Interpolation<ButtonStyleProps>
= (props: ButtonStyleProps): Interpolation<ButtonStyleProps> => css`
	border-color: ${props.borderColor};
	background-color: ${props.backgroundColor};
	color: ${props.color};
	&:hover{
		background-color: ${props.backgroundColorHover};
		border-color: ${props.backgroundColorHover};
		color: ${props.colorHover};
	}
	&:focus {
		box-shadow: 0 0 3px ${props.backgroundColorHover};
	}
	&.btn-block {
		display: inline-block;
		width: 100%
	}
 `

export const buttonStyleInvert
: (props: ButtonStyleProps) => Interpolation<ButtonStyleProps>
= (props: ButtonStyleProps): Interpolation<ButtonStyleProps> => css`
	border-color: ${props.backgroundColor};
	background-color: white;
	color: ${props.backgroundColor};
	&:hover{
		background-color: ${props.backgroundColor};
		color: white;
	}
	&:focus {
		box-shadow: 0 0 3px ${props.backgroundColor};
	}
	&.btn-block {
		display: inline-block;
		width: 100%
	}
 `


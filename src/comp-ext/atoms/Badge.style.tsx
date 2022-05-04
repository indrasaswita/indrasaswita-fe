import Color from "@styles/themes/default/variable.mixin"
import styled, { StyledComponent } from "styled-components"

export interface WrapperProps {
	color?: string,
	padding?: string,
	backgroundColor?: string,
	fontSize?: string,
	fontWeight?: string | number,
	letterSpacing?: string | number,
}

export const Wrapper
	: StyledComponent<"div", any, WrapperProps, never>
	= styled.div<WrapperProps>`
	
		font-size: ${(p: WrapperProps) => p.fontSize ? p.fontSize : "80%"};
		background-color: ${(p: WrapperProps) => p.backgroundColor ? p.backgroundColor : Color.primary};
		color: ${(p: WrapperProps) => p.color ? p.color : "white"};
		padding: ${(p: WrapperProps) => p.padding ? p.padding : "calc(4px + .2vw) calc(5px + .4vw)"};
		font-weight: ${(p: WrapperProps) => p.fontWeight ? p.fontWeight : "normal"};
		letter-spacing: ${(p: WrapperProps) => p.letterSpacing ? p.letterSpacing : "0"};
		display: inline-block;
		border-radius: 4px;
		line-height: 1;
	
		.btn-close {
			font-size: 90%;
			margin-left: calc(3px + .1vw);
			padding: 2px;
			cursor: pointer;
			opacity: .7;
		}
	
	`


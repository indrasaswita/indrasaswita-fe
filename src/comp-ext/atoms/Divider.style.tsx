import styled, { StyledComponent } from "styled-components"

interface WrapperProps {
	width?: string | number,
	lineWidth?: string | number,
	lineLength?: string | number,
	lineColor?: string,
	color?: string,
	fontSize?: string,
	fontWeight?: string | number,
}

export const Wrapper
	: StyledComponent<"div", any, WrapperProps, never>
	= styled.div`

		max-width: ${(p: WrapperProps) => (!p.lineWidth && p.width) ? (typeof p.width === "number" ? p.width + "px" : p.width) : "auto"};

		display: flex;
		flex-direction: row;
		align-items: center;
		gap: calc(4px + .4vw);
		margin: calc(2px + .2vw) 0;
		padding: calc(4px + .4vw) 0;
		line-height: 1;

		> .line {
			display: block;
			height: ${(p: WrapperProps) => p.lineWidth ? (typeof p.lineWidth === "number" ? p.lineWidth + "px" : p.lineWidth) : "1px"};
			width: ${(p: WrapperProps) => p.lineLength ? (typeof p.lineLength === "number" ? p.lineLength + "px" : p.lineLength) : "100%"};
			content: "\\0020";
			background-color: ${(p: WrapperProps) => p.lineColor ? p.lineColor : "#AAA"};
		}

		> .text {
			font-weight: 400;
			white-space: nowrap;
			color: ${(p: WrapperProps) => p.color ? p.color : "inherit"};
			font-size: ${(p: WrapperProps) => p.fontSize ? p.fontSize : "100%"};
			font-weight: ${(p: WrapperProps) => p.fontWeight ? p.fontWeight : "500"};
		}

	`

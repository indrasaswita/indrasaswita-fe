import { ComponentProps } from "react"
import styled, { IStyledComponent } from "styled-components"

interface WrapperProps {
	$width?: string | number,
	$lineWidth?: string | number,
	$lineLength?: string | number,
	$lineColor?: string,
	$color?: string,
	$fontSize?: string,
	$fontWeight?: string | number,
}

type Props = ComponentProps<"div"> & WrapperProps
export const Wrapper
	: IStyledComponent<"web", Props>
	= styled.div<Props>`
		max-width: ${(p: Props) => (!p.$lineWidth && p.$width) ? (typeof p.$width === "number" ? p.$width + "px" : p.$width) : "auto"};

		display: flex;
		flex-direction: row;
		align-items: center;
		gap: calc(4px + .4vw);
		margin: calc(2px + .2vw) 0;
		padding: calc(4px + .4vw) 0;
		line-height: 1;

		> .line {
			display: block;
			height: ${(p: Props) => p.$lineWidth ? (typeof p.$lineWidth === "number" ? p.$lineWidth + "px" : p.$lineWidth) : "1px"};
			width: ${(p: Props) => p.$lineLength ? (typeof p.$lineLength === "number" ? p.$lineLength + "px" : p.$lineLength) : "100%"};
			content: "\\0020";
			background-color: ${(p: Props) => p.$lineColor ? p.$lineColor : "#AAA"};
		}

		> .text {
			font-weight: 400;
			white-space: nowrap;
			color: ${(p: Props) => p.$color ? p.$color : "inherit"};
			font-size: ${(p: Props) => p.$fontSize ? p.$fontSize : "100%"};
			font-weight: ${(p: Props) => p.$fontWeight ? p.$fontWeight : "500"};
		}

	`

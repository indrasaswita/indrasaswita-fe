import React from "react"
import { Wrapper } from "./Divider.style"

export interface DividerProps {
	text?: string,
	width?: string | number,
	lineWidth?: string | number,
	lineLength?: string | number,
	lineColor?: string,
	color?: string,
	fontSize?: string,
	fontWeight?: string,
}

export const Divider
	: React.FunctionComponent<DividerProps>
	= (props: DividerProps) => {
		return (
			<Wrapper
				$width={props.width}
				$lineWidth={props.lineWidth}
				$lineColor={props.lineColor}
				$lineLength={props.lineLength}
				$color={props.color}
				$fontSize={props.fontSize}
				$fontWeight={props.fontWeight}
			>
				<div className="line"></div>
				{props.text && (
					<div className="text">
						{props.text}
					</div>
				)}
			</Wrapper>
		)
	}

export default Divider

import {
	faTimes as fasTimes,
} from "@fortawesome/pro-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Wrapper } from "./Badge.style"

export interface BadgeProps {
  content: string,
  color?: string,
  backgroundColor?: string,
	padding?: string,
  fontSize?: string,
	fontWeight?: string | number,
	showClose?: boolean,
	onClose?: () => void,
	letterSpacing?: string | number,
}

export const Badge: React.FunctionComponent<BadgeProps> = (props: BadgeProps) => {
	return (
		<Wrapper
			color={props.color}
			padding={props.padding}
			backgroundColor={props.backgroundColor}
			fontSize={props.fontSize}
			fontWeight={props.fontWeight}
			letterSpacing={props.letterSpacing}
		>
			{props.content}
			{props.showClose && (
				<span
					className="btn-close"
					onClick={() => {
						props.onClose()
					}}
				>
					<FontAwesomeIcon
						icon={fasTimes}
					/>
				</span>
			)}
		</Wrapper>
	)
}

export default Badge

import React, { ReactNode } from "react"
import { Wrapper } from "./ContentWrapper.style"

export interface ContentWrapperProps {
	children?: ReactNode | ReactNode[],
	className?: string,
}

export const ContentWrapper
	: React.FunctionComponent<ContentWrapperProps>
	= (props: ContentWrapperProps) => {
		return (
			<Wrapper
				className={props.className}
			>
				{props.children}
			</Wrapper>
		)
	}

export default ContentWrapper

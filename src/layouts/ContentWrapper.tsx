import React, { ReactNode } from "react"
import { Wrapper } from "./ContentWrapper.style"

export interface ContentWrapperProps {
	backgroundColor?: string,
	children?: ReactNode | ReactNode[],
}

export const ContentWrapper
	: React.FunctionComponent<ContentWrapperProps>
	= (props: ContentWrapperProps) => {
		return (
			<Wrapper
				backgroundColor={props.backgroundColor}
			>
				<div className="content">
					{props.children}
				</div>
			</Wrapper>
		)
	}

export default ContentWrapper

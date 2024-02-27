import { ComponentProps } from "react"
import styled, { IStyledComponent } from "styled-components"

type Props = ComponentProps<"div">
export const Wrapper
	: IStyledComponent<"web", Props>
	= styled.div`

		margin: 0 calc(-2px - .2vw);
		
		> * {
			margin: calc(2px + .2vw);
		}

	`

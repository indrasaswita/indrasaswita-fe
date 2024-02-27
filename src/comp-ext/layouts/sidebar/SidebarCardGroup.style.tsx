import { ComponentProps } from "react"
import styled, { IStyledComponent } from "styled-components"

type Props = ComponentProps<"div">
export const Wrapper
	: IStyledComponent<"web", Props>
	= styled.div`

		display: flex;
		flex-direction: column;
		gap: calc(5px + .5vw);

	`

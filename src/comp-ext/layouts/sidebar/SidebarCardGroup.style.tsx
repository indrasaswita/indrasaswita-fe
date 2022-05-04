import styled, { StyledComponent } from "styled-components"

export const Wrapper
	: StyledComponent<"div", any, {}, never>
	= styled.div`

		display: flex;
		flex-direction: column;
		gap: calc(5px + .5vw);

	`

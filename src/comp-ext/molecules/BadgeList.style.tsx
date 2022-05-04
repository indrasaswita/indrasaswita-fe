import styled, { StyledComponent } from "styled-components"

export const Wrapper
	: StyledComponent<"div", any, {}, never>
	= styled.div`

		margin: 0 calc(-2px - .2vw);
		
		> * {
			margin: calc(2px + .2vw);
		}

	`

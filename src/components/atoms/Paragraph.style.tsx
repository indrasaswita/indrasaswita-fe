import styled, { StyledComponent } from "styled-components"

export const Wrapper
	: StyledComponent<"div", any, {}, never>
	= styled.div`

		&.p {

			margin-top: calc(5px + .5vw);

			&.blog {
				font-size: 100%;
			}

		}

	`

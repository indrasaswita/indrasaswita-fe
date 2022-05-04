import Color from "@styles/themes/default/variable.mixin"
import styled, { StyledComponent } from "styled-components"

export const Wrapper
	: StyledComponent<"div", any, {}, never>
	= styled.div`

		padding: 0;
		border-radius: 6px;
		border: 1px solid ${Color.border};
		background-color: white;

		.content {
			padding: calc(6px + .6vw);
			font-size: 92%;
		}

	`

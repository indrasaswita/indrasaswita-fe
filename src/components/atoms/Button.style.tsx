import Color from "@styles/themes/default/variable.mixin"
import styled, { StyledComponent } from "styled-components"

export const Wrapper
	: StyledComponent<"button", any, {}, never>
	= styled.button`

		padding: calc(6px + .6vw) calc(8px + .8vw);
		transition: .2s all;
		cursor: pointer;
		border-radius: 8px;
		display: block;
		border: 0;
		background-color: ${Color.primary};
		color: white;

		svg {
			&:first-child {
				margin-right: calc(3px + .2vw);
			}
			&:last-child {
				margin-left: calc(3px + .2vw);
			}
		}

		&:hover {
			text-decoration: none;
			background-color: #FFFFFF22;
		}

	`

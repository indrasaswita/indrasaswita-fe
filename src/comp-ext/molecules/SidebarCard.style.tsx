import Color from "@styles/themes/default/variable.mixin"
import { ComponentProps } from "react"
import styled, { IStyledComponent } from "styled-components"

type Props = ComponentProps<"div">
export const Wrapper
	: IStyledComponent<"web", Props>
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

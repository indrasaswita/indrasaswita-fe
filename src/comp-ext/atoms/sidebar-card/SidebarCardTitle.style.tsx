import Color from "@styles/themes/default/variable.mixin"
import { lighten } from "polished"
import { ComponentProps } from "react"
import styled, { IStyledComponent } from "styled-components"

type Props = ComponentProps<"div">
export const Wrapper
	: IStyledComponent<"web", Props>
	= styled.div`

		line-height: 1.4;
		padding: calc(4px + .4vw) calc(6px + .6vw) calc(3px + .3vw);
		border-bottom: 1px solid rgba(0,0,0,.1);
		background-color: ${lighten(.1, Color.border)};
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;

		.title {
			font-size: 110%;
		}

		.subtitle {
			opacity: .5;
			font-size: 90%;
		}

	`

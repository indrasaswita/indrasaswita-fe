import Color from "@styles/themes/default/variable.mixin"
import { lighten } from "polished"
import { ComponentProps } from "react"
import styled, { IStyledComponent } from "styled-components"

type Props = ComponentProps<"div">
export const Wrapper
	: IStyledComponent<"web", Props>
	= styled.div`

		&.p {

			margin-top: calc(5px + .5vw);

			&.blog {
				font-size: 100%;
			}

			a {
				font-weight: 500;
				color: ${Color.primary};
				padding: calc(1px + .1vw) calc(2px + .2vw);
				transition: .2s all;

				&:hover {
					background-color: ${lighten(.47, Color.primary)};
				}
			}

		}

	`

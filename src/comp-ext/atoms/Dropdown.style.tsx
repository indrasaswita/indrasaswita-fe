import { ComponentProps } from "react"
import styled, { IStyledComponent } from "styled-components"

interface WrapperProps {
	readonly show?: boolean,
}

type Props = ComponentProps<"div"> | WrapperProps
export const Wrapper
	: IStyledComponent<"web", Props>
	= styled.div<WrapperProps>`

		${(p: WrapperProps) => !p.show ? `
			display: none;
		` : ""}

		position: absolute;
		z-index: 1002;
		margin-top: 5px;
		left: auto;
		right: 0;
		padding: calc(5px + .5vw) 0;
		width: 160px;
		background-color: #555;
		border-radius: 8px;
		box-shadow: 0 2px 5px rgba(0,0,0,.5);

		.dropdown-list {

			.item {
				display: block;
				padding: calc(4px + .4vw) calc(6px + .6vw);
				transition: .2s all;
				cursor: pointer;

				&:hover {
					background-color: #999;
				}
			}

			hr {
				border-color: rgba(255,255,255,.4);
			}
		}

	`

import styled, { StyledComponent } from "styled-components"

export const Wrapper
	: StyledComponent<"div", any, {}, never>
	= styled.div`

		position: absolute;
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

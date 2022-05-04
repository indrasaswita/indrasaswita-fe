import styled, { StyledComponent } from "styled-components"

export const Wrapper
	: StyledComponent<"div", any, {}, never>
	= styled.div`

		display: block;
		position: relative;
		padding: calc(10px + 1vw) 0;

		.identifier-wrapper {
			width: 100%;
			display: flex;
			justify-content: flex-end;
			position: absolute;
			z-index: 1;

			.language {
				font-weight: 600;
				padding: calc(2px + .2vw) calc(4px + .4vw);

				> .short {
					opacity: .5;
				}

				> .long {
					opacity: .35;
				}

				&:hover {
					> .short {
						display: none;
					}
				}

				&:not(:hover) {
					> .long {
						display: none;
					}
				}
			}
		}

		> pre {
			border-radius: 4px;
			line-height: 1.3;
			position: relative;
			z-index: 0;
			margin: 0;
		}

		.copy-clipboard-wrapper {
			position: absolute;
			z-index: 1;
			color: #444;
			margin-top: -38px;
			right: 13px;

			font-size: 150%;
			opacity: .6;
			cursor: pointer;
			transition: .2s all;

			&:hover {
				opacity: 1;
			}
		}

	`

import Color from "@styles/themes/default/variable.mixin"
import { lighten } from "polished"
import { ComponentProps } from "react"
import styled, { IStyledComponent } from "styled-components"

type Props = ComponentProps<"div">
export const Wrapper
	: IStyledComponent<"web", Props>
	= styled.div`

		> * {
			padding: calc(4px + .4vw) 0;
		}

		.very-top-wrapper {
			background-color: ${lighten(.15, Color.primary)};
			.very-top-info {
				display: flex;

				.info-text {
					flex: 1;
				}

				.location {
					svg {
						margin-right: calc(3px + .2vw);
					}
				}
			}
		}

		.nav-wrapper {
			display: flex;

			.navs {
				padding: 0;
				margin: 0 calc(-4px - .4vw);
				display: flex;
				flex: 1;

				li {
					list-style: none;
					padding: 0 calc(4px + .4vw);
					a {
						padding: calc(4px + .4vw) calc(8px + .8vw);
						display: block;
						border-radius: 8px;
						transition: .2s all;

						&:hover {
							text-decoration: none;
							background-color: rgba(0,0,0,.1);
						}
					}

					&:not(:first-child) {
						border-left: 1px solid #FFFFFF22;
					}
				}
			}

		}

	`

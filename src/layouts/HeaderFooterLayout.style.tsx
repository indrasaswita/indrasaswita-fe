import Color from "@styles/themes/default/variable.mixin"
import styled, { StyledComponent } from "styled-components"

export const Wrapper
	: StyledComponent<"div", any, {}, never>
	= styled.div`

		min-height: 100vh;
		width: 100vw;

		display: flex;
		flex-direction: column;
		align-items: stretch;

		> .header-wrapper {
			border-bottom: 1px solid rgba(0,0,0,.1);
			background-color: ${Color.primary};
			color: white;
			line-height: 1;
		}

		> .content-wrapper {
			flex: 1;
		}

		> .footer-wrapper {
			border-top: 1px solid rgba(0,0,0,.1);
			background-color: rgba(0,0,0,.1);
			line-height: 1;

			.footer {
				padding: calc(10px + 1vw) 0;

				display: flex;
				align-items: center;

				.center {
					flex: 1;
					text-align: center;
				}

				.right {
					text-align: right;
					display: flex;
					gap: calc(4px + .4vw);
					font-size: 150%;

					a {
						transition: .2s color;
						&:hover {
							color: ${Color.primary};
						}
					}
				}
			}
		}

	`

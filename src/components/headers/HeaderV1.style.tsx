import styled, { StyledComponent } from "styled-components"

export const Wrapper
	: StyledComponent<"div", any, {}, never>
	= styled.div`

		> * {
			padding: calc(4px + .4vw) 0;
		}

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
						padding: calc(6px + .6vw) calc(8px + .8vw);
						display: block;
						border-radius: 8px;
						transition: .2s all;

						&:hover {
							text-decoration: none;
							background-color: #FFFFFF22;
						}
					}

					&:not(:first-child) {
						border-left: 1px solid #FFFFFF22;
					}
				}
			}

		}

	`

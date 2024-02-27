import { device } from "@styles/mixins/media-width.mixin"
import { ComponentProps } from "react"
import styled, { IStyledComponent } from "styled-components"

type Props = ComponentProps<"div">
export const Wrapper
	: IStyledComponent<"web", Props>
	= styled.div`

		@media ${device.tabletLUp} {
			flex-direction: row;
		}

		@media ${device.tabletPDown} {
			flex-direction: column;
		}

		font-size: 110%;
		padding: calc(20px + 2vw) 0;

		display: flex;
		gap: calc(10px + 1vw);
		flex-direction: row;
		
		.blog-content {
			line-height: 1.5;

			.cover-wrapper {
				display: block;
				img {
					width: 100%;
				}
			}

			.title-wrapper {
				margin-bottom: calc(15px + 1.5vw);

				.post-title {
					display: block;
					margin: 0 calc(-3px - .3vw);
					> * {
						margin: 0 calc(3px + .3vw);
					}
				}
			}
		}

		.sidebar-wrapper {
			max-width: calc(220px + 3vw);
			display: none;
		}

	`

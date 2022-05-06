import { device } from "@styles/mixins/media-width.mixin"
import Color from "@styles/themes/default/variable.mixin"
import styled, { StyledComponent } from "styled-components"

interface WrapperProps {
	maxColumn?: number,
}

export const Wrapper
	: StyledComponent<"div", any, WrapperProps, never>
	= styled.div<WrapperProps>`

		@media ${device.mobileP} {
			.blog-list-wrapper {
				grid-template-columns: repeat(min(1, ${(p: WrapperProps) => p.maxColumn}), 1fr);
			}
		}

		@media ${device.mobileL} {
			.blog-list-wrapper {
				grid-template-columns: repeat(min(2, ${(p: WrapperProps) => p.maxColumn}), 1fr);
			}
		}

		@media ${device.tabletP} {
			.blog-list-wrapper {
				grid-template-columns: repeat(min(3, ${(p: WrapperProps) => p.maxColumn}), 1fr);
			}
		}

		@media ${device.tabletL} {
			.blog-list-wrapper {
				grid-template-columns: repeat(min(4, ${(p: WrapperProps) => p.maxColumn}), 1fr);
			}
		}

		@media ${device.desktopS} {
			.blog-list-wrapper {
				grid-template-columns: repeat(min(4, ${(p: WrapperProps) => p.maxColumn}), 1fr);
			}
		}

		@media ${device.desktopMUp} {
			.blog-list-wrapper {
				grid-template-columns: repeat(min(5, ${(p: WrapperProps) => p.maxColumn}), 1fr);
			}
		}

		.blog-list-wrapper {
			display: grid;
			gap: calc(3px + .3vw);
			padding: calc(5px + .5vw) 0;

			> .list {
				background-color: #e8e8e8;
				border-radius: 6px;
				position: relative;
				cursor: pointer;
				text-align: center;
				padding-bottom: calc(6px + .6vw);
				display: flex;
				flex-direction: column;
				gap: calc(2px + .2vw);
				line-height: 1.25;


				&:hover {
					.cover:before {
						opacity: 0;
					}
				}

				.cover {
					border-top-left-radius: inherit;
					border-top-right-radius: inherit;
					width: 100%;
					height: 140px;
					background-size: cover;
					background-position: center;
					background-color: #ccc;

					&:before {
						content: ' ';
						display: block;
						position: absolute;
						left: 0;
						top: 0;
						width: 100%;
						height: 100%;
						opacity: 0.12;
						border-radius: 6px;
						background-color: black;
						background-repeat: no-repeat;
						background-position: 50% 0;
						background-size: cover;
						transition: .2s all;
					}
				}

				.title {
					font-weight: 500;
					font-size: 105%;
					margin: calc(2px + .2vw) calc(4px + .4vw);
					color: ${Color.primary};

					text-overflow: ellipsis;
					overflow: hidden;
					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical;
				}

				.subtitle {
					font-weight: 500;
					font-size: 87%;
					opacity: .6;
					margin: 0 calc(4px + .4vw);

					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}
			}
		}

		.action-wrapper {
			text-align: center;
			padding: calc(4px + .4vw);
		}

	`

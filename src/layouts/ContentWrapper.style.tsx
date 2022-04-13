import styled, { StyledComponent } from "styled-components"
import { device } from "@styles/mixins/media-width.mixin"

export interface WrapperProps {
	readonly backgroundColor?: string,
}

export const Wrapper
	: StyledComponent<"div", any, WrapperProps, never>
	= styled.div<WrapperProps>`

		width: 100%;

		${(p: WrapperProps) => p.backgroundColor ? `
			background-color: ${p.backgroundColor};
		` : ""}

		@media ${device.mobileP} {
			> .content {
				width: calc(${device.widthMobileP});
			}
		}

		@media ${device.mobileL} {
			> .content {
				width: calc(${device.widthMobileL});
			}
		}

		@media ${device.tabletP} {
			> .content {
				width: calc(${device.widthTabletP});
			}
		}

		@media ${device.tabletL} {
			> .content {
				width: calc(${device.widthTabletL});
			}
		}

		@media ${device.desktopS} {
			> .content {
				width: calc(${device.widthDesktopS});
			}
		}

		@media ${device.desktopM} {
			> .content {
				width: calc(${device.widthDesktopM});
			}
		}

		@media ${device.desktopL} {
			> .content {
				width: calc(${device.widthDesktopL});
			}
		}

		@media ${device.desktopXL} {
			> .content {
				width: calc(${device.widthDesktopXL});
			}
		}

		.content {
			display: block;
			margin-inline: auto;
		}
		
	`

import styled, { IStyledComponent } from "styled-components"
import { device } from "@styles/mixins/media-width.mixin"
import { ComponentProps } from "react"

type Props = ComponentProps<"div">
export const Wrapper
	: IStyledComponent<"web", Props>
	= styled.div`

		width: 100%;

		@media ${device.mobileP} {
			width: calc(${device.widthMobileP});
		}

		@media ${device.mobileL} {
			width: calc(${device.widthMobileL});
		}

		@media ${device.tabletP} {
			width: calc(${device.widthTabletP});
		}

		@media ${device.tabletL} {
			width: calc(${device.widthTabletL});
		}

		@media ${device.desktopS} {
			width: calc(${device.widthDesktopS});
		}

		@media ${device.desktopM} {
			width: calc(${device.widthDesktopM});
		}

		@media ${device.desktopL} {
			width: calc(${device.widthDesktopL});
		}

		@media ${device.desktopXL} {
			width: calc(${device.widthDesktopXL});
		}

		display: block;
		margin-inline: auto;
		
	`

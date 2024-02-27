import { device } from "@styles/mixins/media-width.mixin"
import { ComponentProps } from "react"
import styled, { IStyledComponent } from "styled-components"

type Props = ComponentProps<"div">
export const GlobalAppWrapper
	: IStyledComponent<"web", Props>
	= styled.div`

		@media ${device.mobileP} {
			font-size: 11.5px;
		}

		@media ${device.mobileL} {
			font-size: 12px;
		}

		@media ${device.tabletP} {
			font-size: 12.5px;
		}

		@media ${device.tabletP} {
			font-size: 13px;
		}

		@media ${device.desktopS} {
			font-size: 14px;
		}

		@media ${device.desktopM} {
			font-size: 15px;
		}

		@media ${device.desktopL} {
			font-size: 16px;
		}

		@media ${device.desktopXL} {
			font-size: 16px;
		}

	`

import styled, { IStyledComponent } from "styled-components"
import { buttonStyle, buttonStyleInvert, ButtonStyleProps } from "@styles/mixins/button-style.mixin"
import { darken } from "polished"
import Color from "@styles/themes/default/variable.mixin"
import { ComponentProps } from "react"

export type WrapperProps = {
  readonly width?: string,
	readonly minWidth?: string,
	readonly padding?: string,
	readonly height?: string,
	readonly borderRadius?: string,
}

const transpDarkProps: ButtonStyleProps = {
	color: Color.btnTranspDarkColor,
	backgroundColor: Color.btnTranspDarkBackgroundColor,
	borderColor: Color.btnTranspDarkBackgroundColor,
	backgroundColorHover: Color.btnTranspDarkHoverBackgroundColor,
	colorHover: "white",
}

const transpProps: ButtonStyleProps = {
	color: "inherit",
	backgroundColor: "transparent",
	borderColor: "transparent",
	backgroundColorHover: "rgba(0,0,0,.1)",
	colorHover: "inherit",
}

const white2Props: ButtonStyleProps = {
	color: Color.btnPrimaryBackgroundColor,
	backgroundColor: Color.btnPrimaryColor,
	borderColor: "transparent",
	backgroundColorHover: Color.btnPrimaryBackgroundColor,
	colorHover: Color.btnPrimaryColor,
}

const whiteProps: ButtonStyleProps = {
	color: "#444",
	backgroundColor: "#fcfcfa",
	borderColor: "#aaa",
	backgroundColorHover: "#aaa",
	colorHover: "white",
}

const primaryProps: ButtonStyleProps = {
	color: Color.btnPrimaryColor,
	backgroundColor: Color.btnPrimaryBackgroundColor,
	borderColor: Color.btnPrimaryBackgroundColor,
	backgroundColorHover: Color.btnPrimaryHoverBackgroundColor,
	colorHover: Color.btnPrimaryColor,
}

const secondaryProps: ButtonStyleProps = {
	color: Color.btnSecondaryColor,
	backgroundColor: Color.btnSecondaryBackgroundColor,
	borderColor: Color.btnSecondaryBackgroundColor,
	backgroundColorHover: Color.btnSecondaryHoverBackgroundColor,
	colorHover: Color.btnSecondaryColor,
}

const infoProps: ButtonStyleProps = {
	color: Color.btnInfoColor,
	backgroundColor: Color.btnInfoBackgroundColor,
	borderColor: Color.btnInfoBackgroundColor,
	backgroundColorHover: Color.btnInfoHoverBackgroundColor,
	colorHover: Color.btnInfoColor,
}

const successProps: ButtonStyleProps = {
	color: Color.btnSuccessColor,
	backgroundColor: Color.btnSuccessBackgroundColor,
	borderColor: Color.btnSuccessBackgroundColor,
	backgroundColorHover: Color.btnSuccessHoverBackgroundColor,
	colorHover: Color.btnSuccessColor,
}

const warningProps: ButtonStyleProps = {
	color: Color.btnWarningColor,
	backgroundColor: Color.btnWarningBackgroundColor,
	borderColor: Color.btnWarningBackgroundColor,
	backgroundColorHover: Color.btnWarningHoverBackgroundColor,
	colorHover: Color.btnWarningColor,
}

const dangerProps: ButtonStyleProps = {
	color: Color.btnDangerColor,
	backgroundColor: Color.btnDangerBackgroundColor,
	borderColor: Color.btnDangerBackgroundColor,
	backgroundColorHover: Color.btnDangerHoverBackgroundColor,
	colorHover: Color.btnDangerColor,
}

const whatsappProps: ButtonStyleProps = {
	color: "white",
	backgroundColor: Color.brandWhatsapp,
	borderColor: Color.brandWhatsapp,
	backgroundColorHover: darken(.1, Color.brandWhatsapp),
	colorHover: "white",
}

type Props = ComponentProps<"div"> | WrapperProps
export const Wrapper
	: IStyledComponent<"web", Props>
	= styled.div<WrapperProps>`
		.btn {
			width: ${(props:WrapperProps) => props.width ? props.width : "auto"};
			min-width: ${(props:WrapperProps) => props.minWidth ? props.minWidth : "0"};
			height: ${(props:WrapperProps) => props.height ? props.height : "auto"};
			padding: ${(p: WrapperProps) => p.padding ? p.padding : "calc(6px + .6vw) calc(10px + 1vw)"};
			border-radius: ${(p:WrapperProps) => p.borderRadius ? p.borderRadius : "10px"};
			border-width: 1px;
			border-style: solid;
			transition: .2s all;
			cursor: pointer;
			line-height: 1;
			font-size: inherit;
			font-weight: inherit;
			
			&.link {
				display: inline-block;
				text-align: center;
			}
			&.btn-white {
				${buttonStyle(whiteProps)}
			}
			&.btn-white2 {
				${buttonStyle(white2Props)}
				box-shadow: 0 3px 6px rgba(0,0,0,.2);
			}
			&.btn-primary {
				${buttonStyle(primaryProps)}
			}
			&.btn-outline-primary {
				${buttonStyleInvert(primaryProps)}
			}
			&.btn-secondary {
				${buttonStyle(secondaryProps)}
			}
			&.btn-outline-secondary {
				${buttonStyleInvert(secondaryProps)}
			}
			&.btn-info {
				${buttonStyle(infoProps)}
			}
			&.btn-outline-info {
				${buttonStyleInvert(infoProps)}
			}
			&.btn-success {
				${buttonStyle(successProps)}
			}
			&.btn-outline-success {
				${buttonStyleInvert(successProps)}
			}
			&.btn-warning {
				${buttonStyle(warningProps)}
			}
			&.btn-outline-warning {
				${buttonStyleInvert(warningProps)}
			}
			&.btn-danger {
				${buttonStyle(dangerProps)}
			}
			&.btn-outline-danger {
				${buttonStyleInvert(dangerProps)}
			}
			&.btn-whatsapp {
				${buttonStyle(whatsappProps)}
			}
			&.btn-outline-whatsapp {
				${buttonStyleInvert(whatsappProps)}
			}
			&.btn-transparent,
			&.btn-transparant {
				${buttonStyle(transpProps)}
			}
			&.btn-transparent-dark,
			&.btn-transparant-dark {
				${buttonStyle(transpDarkProps)}
			}
			&.disabled {
				background-color: ${Color.btnDisabledBackgroundColor};
				color: ${Color.btnDisabledColor};
				border-color: ${Color.btnDisabledBorderColor};
				cursor: not-allowed;
				&:hover {
					background-color: ${Color.btnDisabledBackgroundColor};
					color: ${Color.btnDisabledColor};
					border-color: ${Color.btnDisabledBorderColor};
				}
			}
			&.overf-ellipsis {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis; 
			}
			&.overf-hidden {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: hidden; 
			}

			&.centered-content {
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	`

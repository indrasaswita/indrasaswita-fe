import { darken } from "polished"

const PRIMARY: string = "#2961C3"
const DANGER: string = "#D92C44"
const INFO: string = "#10eaff"
const SECONDARY: string = "#888"
const SUCCESS: string = "#38BAA7"
const WARNING: string = "#ffb521"

const Color: {
	primary: string,
	primaryText: string,
	danger: string,
	dangerText: string,
	info: string,
	infoText: string,
	secondary: string,
	secondaryText: string,
	success: string,
	successText: string,
	warning: string,
	warningText: string,

	mutedText: string,
	unactiveObject: string,

	border: string,
	brandWhatsapp: string,

	// button themes
	btnSuggestionBackgroundColor: string,
	btnSuggestionColor: string,
	btnSuggestionHoverBackgroundColor: string,
	btnPrimaryBackgroundColor: string,
	btnPrimaryColor: string,
	btnPrimaryHoverBackgroundColor: string,
	btnSecondaryBackgroundColor: string,
	btnSecondaryColor: string,
	btnSecondaryHoverBackgroundColor: string,
	btnInfoBackgroundColor: string,
	btnInfoColor: string,
	btnInfoHoverBackgroundColor: string,
	btnSuccessBackgroundColor: string,
	btnSuccessColor: string,
	btnSuccessHoverBackgroundColor: string,
	btnWarningBackgroundColor: string,
	btnWarningColor: string,
	btnWarningHoverBackgroundColor: string,
	btnDangerBackgroundColor: string,
	btnDangerColor: string,
	btnDangerHoverBackgroundColor: string,
	btnTranspDarkBackgroundColor: string,
	btnTranspDarkColor: string,
	btnTranspDarkHoverBackgroundColor: string,
	btnDisabledBackgroundColor: string,
	btnDisabledColor: string,
	btnDisabledBorderColor: string,
} = {
	primary: PRIMARY,
	primaryText: "#444",
	danger: DANGER,
	dangerText: "#A90C24",
	info: INFO,
	infoText: "#00caef",
	secondary: SECONDARY,
	secondaryText: "#666",
	success: SUCCESS,
	successText: "#239073",
	warning: WARNING,
	warningText: "#cf9501",

	mutedText: "#999",
	unactiveObject: "#BBBBBB",
	border: "#CFD1D7",

	//brand
	brandWhatsapp: "#00994F",

	// button themes
	btnSuggestionBackgroundColor: "#E5EFF9",
	btnSuggestionColor: "black",
	btnSuggestionHoverBackgroundColor: darken(0.2, "#E5EFF9"),
	btnPrimaryBackgroundColor: PRIMARY,
	btnPrimaryColor: "white",
	btnPrimaryHoverBackgroundColor: darken(.2, PRIMARY),
	btnSecondaryBackgroundColor: "#777",
	btnSecondaryColor: "white",
	btnSecondaryHoverBackgroundColor: darken(.2, "#777"),
	btnInfoBackgroundColor: INFO,
	btnInfoColor: "white",
	btnInfoHoverBackgroundColor: darken(.2, INFO),
	btnSuccessBackgroundColor: SUCCESS,
	btnSuccessColor: "white",
	btnSuccessHoverBackgroundColor: darken(.2, SUCCESS),
	btnWarningBackgroundColor: WARNING,
	btnWarningColor: "white",
	btnWarningHoverBackgroundColor: darken(.2, WARNING),
	btnDangerBackgroundColor: DANGER,
	btnDangerColor: "white",
	btnDangerHoverBackgroundColor: darken(.2, DANGER),
	btnTranspDarkBackgroundColor: "rgba(0,0,0,.5)",
	btnTranspDarkColor: "white",
	btnTranspDarkHoverBackgroundColor: "rgba(0,0,0,.8)",
	btnDisabledBackgroundColor: "#E8E8E8",
	btnDisabledColor: "#738492",
	btnDisabledBorderColor: "#DDD",
}

export default Color

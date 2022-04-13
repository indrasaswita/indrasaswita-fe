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
		}

		> .content-wrapper {
			flex: 1;
		}

		> .footer-wrapper {
			height: 200px;
			border-top: 1px solid rgba(0,0,0,.1);
			background-color: rgba(0,0,0,.1);
		}

	`

import Color from "@styles/themes/default/variable.mixin"
import { darken } from "polished"
import styled, { StyledComponent } from "styled-components"

const gradCol1: string = darken(.1, Color.danger)
const gradCol2: string = darken(.35, Color.danger)

export const Wrapper
	: StyledComponent<"div", any, {}, never>
	= styled.div`

		background-image: url('https://indrasaswita.com/assets/images/cover-is.png');
		background-position: top center;
		background-size: cover;
		background-color: #E3E3E3;
		
		padding: calc(40px + 3vw) 0;

		.intro-text {

			width: 40%;
			display: flex;
			flex-direction: column;

			gap: calc(6px + .6vw);

			> .title {
				font-size: 250%;
				font-weight: 600;
				color: #555;
				line-height: 1;
			}

			> .subtitle {
				font-weight: 800;
				font-size: 150%;
				color: #444;
			}


			.grad {
				background-color: ${gradCol1};
				background: ${gradCol1};
				background: linear-gradient(0deg,${gradCol2},${gradCol1} 50%,${gradCol1});

				color: transparent;

				-webkit-background-clip: text;
				-moz-background-clip: text;
				background-clip: text;
			}

			> .description {
				color: #777;
				line-height: 1.5;
			}

			> .action {
				font-size: 180%;
				display: flex;
				gap: calc(3px + .3vw);

				> a {
					color: inherit;
					transition: .2s all;

					&:hover,
					&:focus {
						color: ${Color.primary};
					}
				}
			}

		}

	`

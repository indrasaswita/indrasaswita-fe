import styled, { StyledComponent } from "styled-components"

export const Wrapper
	: StyledComponent<"div", any, {}, never>
	= styled.div`

		&.label {


			&.title {
				font-weight: 600;
				line-height: 1.5;

				&.blog {
					font-size: 230%;
				}
				&.blog2 {
					opacity: .65;
					font-size: 140%;
				}

				&.code {
					font-size: 150%;
				}
				&.code2 {
					opacity: .65;
					font-size: 120%;
				}

			}

		}

	`

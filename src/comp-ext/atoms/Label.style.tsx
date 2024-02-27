import { ComponentProps } from "react"
import styled, { IStyledComponent } from "styled-components"

type Props = ComponentProps<"div">
export const Wrapper
	: IStyledComponent<"web", Props>
	= styled.div`

		> .label {


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

				&.section {
					font-size: 160%;
					font-weight: 500;
				}

			}

		}

		> .sublabel {

			&.section {
				color: #0007;
				font-weight: 700;
			}

		}

	`

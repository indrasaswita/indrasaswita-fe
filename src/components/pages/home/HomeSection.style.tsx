import styled, { StyledComponent } from "styled-components"

export interface WrapperProps {
	backgroundColor?: string,
	color?: string,
	padding?: string,
	margin?: string,
}

export const Wrapper
	: StyledComponent<"div", any, WrapperProps, never>
	= styled.div`

		background-color: ${(p: WrapperProps) => p.backgroundColor ? p.backgroundColor : "inherit"};
		color: ${(p: WrapperProps) => p.color ? p.color : "inherit"};
		padding: ${(p: WrapperProps) => p.padding ? p.padding : "calc(8px + .8vw) 0"};
		margin: ${(p: WrapperProps) => p.margin ? p.margin : "0"};

		> .flex-box {

			display: flex;
			gap: calc(8px + .8vw);

			> * {
				flex: 1;
			}

			> .section-headline {
				background-position: center;
				background-size: cover;
				background-repeat: no-repeat;

				border-radius: 6px;
			}
	
			>.section-main-wrapper {
	
				.section {
					&-category-wrapper {
						margin: 0 calc(-2px - .2vw);
	
						> * {
							margin: calc(2px + .2vw);
						}
					}
	
					&-content-wrapper {
						padding: calc(5px + .5vw) 0;
					}
	
				}
	
			}
		}


	`

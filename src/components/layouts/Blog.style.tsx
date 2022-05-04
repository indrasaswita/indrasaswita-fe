import styled, { StyledComponent } from "styled-components"

export const Wrapper
	: StyledComponent<"div", any, {}, never>
	= styled.div`

		font-size: 110%;
		padding: calc(20px + 2vw);

		display: flex;
		gap: calc(10px + 1vw);
		flex-direction: row;
		
		.blog-content {
			width: 80%;
			line-height: 1.5;

			.title-wrapper {
				margin-top: calc(6px + .6vw);
				margin-bottom: calc(15px + 1.5vw);

				.post-title {
					display: block;
					margin: 0 calc(-3px - .3vw);
					> * {
						margin: 0 calc(3px + .3vw);
					}
				}
			}
		}

		.sidebar-wrapper {
			width: 40%;
		}

	`

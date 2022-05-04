import styled, { StyledComponent } from "styled-components"

export const Wrapper
	: StyledComponent<"div", any, {}, never>
	= styled.div`

		padding: calc(8px + .8vw) 0;

		.exp {
			flex: 1;
			border-left: 2px solid #e4e4e4;
			border-bottom-right-radius: 4px;
			border-top-right-radius: 4px;
			position: relative;
			padding: 10px 20px;
			list-style: none;
			text-align: left;
			line-height: 28px;
			margin: calc(10px + 1vw) 0 0 105px;

			.list {
				margin-top: 3vw;
				position: relative;
				line-height: 1.4;

				&:first-child {
					margin-top: 0;
    			padding-bottom: 0;
				}

				.data-date {
					left: -157.5px;
					text-align: right;
					min-width: 120px;
					color: rgba(0,0,0,.5);
					font-style: italic;
					font-weight: 900;
					font-size: 87%;
					position: absolute;
					display: block;
				}

				.type {
					font-weight: 800;
					text-transform: uppercase;
					font-size: 80%;
					opacity: .4;
				}

				.title {
					text-transform: uppercase;
					font-weight: 600;
					opacity: .9;
					margin-bottom: 10px;
					font-size: 110%;
					display: flex;
					align-items: center;
				}

				&:after {
					left: -23.85px;
					background: #905;
					border-radius: 50%;
					height: 6px;
					width: 6px;
					content: " ";
					top: 7px;
					position: absolute;
					display: block;
				}
			}
		}

	`

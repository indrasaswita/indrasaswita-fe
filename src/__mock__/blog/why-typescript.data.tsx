import { EnumFileType } from "@helpers/types/file-type"
import CodeBlock from "@is-style/atoms/CodeBlock"
import Divider from "@is-style/atoms/Divider"
import Paragraph from "@is-style/atoms/Paragraph"
import SidebarCardGroup from "@is-style/layouts/sidebar/SidebarCardGroup"
import SidebarCard from "@is-style/molecules/SidebarCard"
import Color from "@styles/themes/default/variable.mixin"
import { BlogData } from "../blog.data"

export const whyTypescript
	: BlogData
	= {
		image: "https://www.syncfusion.com/blogs/wp-content/uploads/2018/08/typescript_2d66c7c3.png",
		title: "Why Typescript?",
		subtitle: "For me, typescript sometimes is better. Why?",
		titlePostItems: [
			<span key={0}>#react</span>,
			<span key={0}>#angular</span>,
			<span key={1}>#typescript</span>,
			<span key={1}>#javascript</span>,
		],
		sidebar: (
			<SidebarCardGroup>
				<SidebarCard
					title="Hello"
					subtitle="Subtitle"
				>
					Testing Hello WOrld
				</SidebarCard>
				<SidebarCard>
					Testing Hello WOrld
				</SidebarCard>
			</SidebarCardGroup>
		),
		content: (
			<>
				<Paragraph
					type="blog"
				>
					For me both javascript and typescript are really mature languages, also each of them have their own benefit. As we know that typescript have similar behavior and syntax with javascript, but it is stricter. <br /><br />

					Let&apos;s see a different between them. On javascript, we can use <b>any</b> as data type.

					<CodeBlock
						fileType={EnumFileType.JS}
						showCopy={false}
					>
						{"var a = 'Learning with IS'"}
					</CodeBlock>

					But in typescript, we should avoid using any on our codes. So we can use string, number, or custom types.

					<CodeBlock
						fileType={EnumFileType.TS}
						showCopy={false}
					>
						{"var a: string = 'Learning with IS'"}
					</CodeBlock>

					At first, I hate typescript so much. I really hate to type all the data type during development. The first 3 months, codes run really well and we have no issue on our development. As time goes by, codes is going bigger and we have more developers on that time, the development have run slower than before. <br /><br />

					We have some trouble on javascript: <br />
					<ol>
						<li>Each developer has their own style of props (arguments). All arguments are written without any type. It is the biggest obstacle of javascript when the program getting bigger.</li>
						<li>In javascript, we are able to create variables without any type, interface or template. It make us harder on using autocomplete.</li>
						<li>We facing so many errors about data parsing repeatedly.</li>
					</ol><br />

					<Divider
						color={Color.primary}
						lineColor={Color.primary}
						lineWidth={3}
						text="CONCLUSION"
						lineLength={50}
						fontWeight="600"
					/><br />

					Both of typescript and javascript have their own strength. Typescript is really a powerful features, but typescript need to be compiled to run, otherwise javascript offers the option to explore and create code without a build step. <br /><br />

					You can find the strengths and weaknesses between them, to have a better decision. Remember, right choice will make development faster.
				</Paragraph>

			</>
		),
	}

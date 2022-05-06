import { EnumFileType } from "@helpers/types/file-type"
import CodeBlock from "@is-style/atoms/CodeBlock"
import Divider from "@is-style/atoms/Divider"
import Paragraph from "@is-style/atoms/Paragraph"
import SidebarCardGroup from "@is-style/layouts/sidebar/SidebarCardGroup"
import SidebarCard from "@is-style/molecules/SidebarCard"
import Color from "@styles/themes/default/variable.mixin"
import { BlogData } from "../blog.data"

const code: string = `const [value, setValue] = useState<number>(1)

useEffect(() => {
  setValue(10) // it will be have any effect
  setValue(value + 1) // here, the value is 1, not 10
}, [])
`

const code2: string = `const [value, setValue] = useState<number>(1)

useEffect(() => {
  let temp: number = value

  // setValue(10)
  temp = 10

  // setValue(value + 1)
  temp = temp + 1

  setValue(temp)
}, [])
`

export const whatIsReactForMe
	: BlogData
	= {
		image: "https://i.pinimg.com/originals/a6/96/6d/a6966db4a107eecb401ba0061ce58cda.png",
		title: "What is React for me?",
		subtitle: "React in my oppinion is awesome",
		titlePostItems: [
			<span key={0}>#react</span>,
			<span key={1}>#javascript</span>,
			<span key={2}>#typescript</span>,
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
					As we know, there are three popular frameworks for frontend development which based on javascript and typescript. They are <b>React</b>, <b>Vue</b>, and <b>Angular</b>. Each frameworks and libraries have their own pros and cons depends on the project situation.<br /><br />

					According to <a href="https://trends.builtwith.com/javascript/React" target="_blank" rel="noreferrer">BuiltWith</a>, React&apos;s popularity is double compared to Vue. At the second place there is Vue and followed by Angular on third. Then, why is React popularity higher than others?<br /><br />

					On React, developers are not forced to use a specific project structures. Also React have the smallest building blocks or chunks. Plus, currently React provides hooks or functional based system since 2019. <br /><br />

					For me, React hook has a better structure than class. React hooks provides more reusable code compared to React class and Angular CLI. React (class) and Angular CLI (class) have similar style of component and lifecycle, on my oppinion both of them are less flexible, unlike the hook. On hook, we can send multiple elements in argument without maintaining its lifecycle in it. It helped me to solve number of problems when using class. <b>But</b>, never call hooks inside of any logic.

					<CodeBlock
						fileType={EnumFileType.TSX}
					>
						{code}
					</CodeBlock>

					The latest setValue hook will only the one that has an effect to the value. The previous hooks, will be replaced by the new one, and the value was not updated yet on the second hooks. React hooks need more tricky treats to do this. <br />

					<CodeBlock
						fileType={EnumFileType.TSX}
					>
						{code2}
					</CodeBlock> <br />

					<Divider
						color={Color.primary}
						lineColor={Color.primary}
						lineWidth={3}
						text="CONCLUSION"
						lineLength={50}
						fontWeight="600"
					/><br />

					For me React is the best choice, because it has more communities. <br />
					How about you? What is your favourite library?

				</Paragraph>
			</>
		),
	}

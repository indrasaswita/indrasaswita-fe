import { EnumFileType } from "@helpers/types/file-type"
import CodeBlock from "@is-style/atoms/CodeBlock"
import Paragraph from "@is-style/atoms/Paragraph"
import SidebarCardGroup from "@is-style/layouts/sidebar/SidebarCardGroup"
import SidebarCard from "@is-style/molecules/SidebarCard"
import { BlogData } from "../blog.data"

const code: string = `function a (b: string): string {
  var a = 'hellow'
  const j = {
    a: 'test',
  };
  
  let = ['a', 'b'];
  
  console.log("test");
  // hello world
}
`

export const codingForKids
	: BlogData
	= {
		title: "Coding for kids",
		subtitle: "Why does every child need to learn coding?",
		titlePostItems: [
			<span key={0}>Hello</span>,
			<span key={1}>Hello</span>,
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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. In libero arcu, fermentum non enim id, aliquam lacinia mauris. Maecenas condimentum tellus ac consectetur sollicitudin. Quisque nisi diam, mollis at pellentesque non, viverra sed odio. Sed eget ultrices orci, non pellentesque arcu. Praesent cursus nunc ut lacus placerat tincidunt. Maecenas consequat sapien hendrerit, sagittis risus eleifend, tempor neque. Donec sed commodo urna. Etiam et diam ac augue cursus condimentum. Mauris iaculis cursus lobortis. Sed pulvinar odio ut urna finibus vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ullamcorper nisl sit amet arcu mollis vestibulum. Proin efficitur leo laoreet tincidunt convallis. Nam et ultricies lorem. Sed nec mattis mi. Donec vitae accumsan elit, et aliquam lectus.<br /><br />

					Phasellus condimentum dignissim dignissim. Pellentesque consectetur aliquam congue. Morbi et pellentesque lorem. Cras diam lacus, laoreet eget libero vitae, hendrerit dignissim velit. Duis ac lacinia dolor. Donec eu dui eget urna lobortis pulvinar et nec enim. Sed placerat ornare leo ac lacinia. Vivamus non eros ullamcorper, lacinia orci a, rhoncus tellus.<br /><br />

					Mauris porta velit enim, eu tempus elit faucibus ut. Fusce commodo orci et nunc volutpat euismod. Quisque consectetur dictum neque. Aliquam a orci sed magna feugiat cursus in eu nisi. Proin eu dapibus leo, eget mattis eros. Nulla vulputate in dui quis facilisis. Sed consequat ultrices fermentum.<br /><br />

					Ut diam metus, euismod quis quam sit amet, viverra luctus velit. Quisque euismod, magna at ullamcorper fermentum, tortor nulla maximus purus, ac tempus magna est tincidunt odio. Proin quis pellentesque massa. Proin tempus imperdiet bibendum. Aenean blandit hendrerit lectus id pulvinar. Curabitur iaculis tortor et risus cursus, vel aliquet diam interdum. Duis ut facilisis lectus. Maecenas ut cursus quam, eu vulputate justo. Praesent auctor dolor in metus commodo aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In laoreet pharetra congue. Nulla ut posuere ligula. Aliquam pellentesque sapien ultricies, egestas purus eget, pulvinar ipsum. Fusce lacinia lacus non lectus mattis consectetur.
				</Paragraph>

				<CodeBlock
					fileType={EnumFileType.JSX}
				>
					{code}
				</CodeBlock>
			</>
		),
	}

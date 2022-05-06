import Divider from "@is-style/atoms/Divider"
import Paragraph from "@is-style/atoms/Paragraph"
import SidebarCardGroup from "@is-style/layouts/sidebar/SidebarCardGroup"
import SidebarCard from "@is-style/molecules/SidebarCard"
import Color from "@styles/themes/default/variable.mixin"
import { BlogData } from "../blog.data"

export const codingForKids
	: BlogData
	= {
		image: "https://static.vecteezy.com/system/resources/previews/002/871/498/large_2x/concept-of-computer-technology-for-education-and-business-vector.jpg",
		title: "Coding for kids",
		subtitle: "Why does every child need to learn coding?",
		titlePostItems: [
			<span key={0}>#programming</span>,
			<span key={1}>#coding</span>,
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
					I have worked as a programmer based in Indonesia since 2011. During my spare time, I teach algorithms and basic programming. It helps me to realize that programming is not the most demanded lesson in my country. The lack of parents&apos; knowledge about programming makes it the biggest obstacle for their children to learn programming since adolescence.<br /><br />

					In my opinion, programming is not the same as playing games or making a simple webpage using CMS (Content Management System). Programming is based on a concept to create simple instruction, which asks us to practice it regularly. Based on my experience, learning programming is not fixated its result but rather on the process.<br /><br />

					<Divider
						color={Color.primary}
						lineColor={Color.primary}
						lineWidth={3}
						text="Long short story"
						lineLength={50}
						fontWeight="600"
					/><br />
					Long short story, I want to tell you about my experience at university. In my first semester, I had an initial examination to enter a teaching organization that I want the most. This exam ask me to create a tic-tac-toe game based on console application. When the exam started, I had no knowledge regarding to string (text) validation. Also, I didn&apos;t know that string (text) is a collection of characters and how to calculate the length of string, made me failed on these part. Let&apos;s assume these part (string validation) only takes 3–5 percents portions of its mark, but this kind of error made me not passed on that examination. (Note: perhaps I still got 95% of total score)<br /><br />

					I think I can passed the test with my score. But fate says otherwise, I didn&apos;t pass, perhaps it&apos;s caused by the program cannot be compiled on IDE due to string validation error. Actually, I don&apos;t feel happy if all logic and algorithms were not calculated because of a single error. Why didn&apos;t they appreciate to all efforts? It is quite strange to me. And from this experience, makes me <b>appreciate every single effort besides on the final result</b>.<br /><br />

					<Divider
						color={Color.primary}
						lineColor={Color.primary}
						lineWidth={3}
						text="Coding is not a drag and drop"
						lineLength={50}
						fontWeight="600"
					/><br />
					Some people think that drag-drop is the same as coding. Actually, it is a very different process. Coding is to make instructions that allow the computer to run it sequentially, and drag-drop is to use a very user-friendly program that helping us on managing our content.<br /><br />

					Let&apos;s discuss what is drag-drop that most of people talking about, it is a CMS, the abbreviation of Content Management System. More than 90% of the process use drag-drop on its development. There are several application that known as CMS, like Joomla, Wix.com, and many more. CMS allows us &quot;managing&quot; contents based on this application regulations and syntaxes.<br /><br />

					Both of drag-drop and coding can develop a program on the platform you choose.<br /><br />

					<Divider
						color={Color.primary}
						lineColor={Color.primary}
						lineWidth={3}
						text="Why do we need Coding?"
						lineLength={50}
						fontWeight="600"
					/><br />
					I will try to explain this on a global perspective. CMIIW please.<br /><br />

					Benefit of Coding when compared to CMS:
					<ol>
						<li>During the coding lesson, programmers can learn better structure and mindset along with the development process.</li>
						<li>With coding based, applications can be develop much more flexible. You can do all things manually based on your concept.</li>
						<li>The running cost of a program should be lower than CMS.</li>
						<li>Coding can make a program which have better security system.</li>
						<li>Coding can make lighter applications, which could make better experiences to users.</li>
					</ol><br />
					Benefit of CMS when compared to Coding:
					<ol>
						<li>CMS is so simple, no need programming skillset.</li>
						<li>CMS have no bugs, a very minimal bugs on CMS. But it depends on the platform you choose.</li>
						<li>CMS allow you to develop very fast.</li>
						<li>Also CMS is easy to develop for advance feature like payments, and some CMS support script programming.</li>
					</ol><br />

					<Divider
						color={Color.primary}
						lineColor={Color.primary}
						lineWidth={3}
						text="Then, what is Coding?"
						lineLength={50}
						fontWeight="600"
					/><br />
					Algorithm is the most necessary knowledge that is needed in coding. Many people say that algorithm is similar to math, and some says it is applied math. Same as a language, algorithms can be learned and need to be practiced regularly.<br /><br />

					Let&apos;s talk with example, based on my experience:<br />
					<ol>
						<li>With 3 months experience of coding, I can create a simple algorithm with if-else. And need 3–5 minutes preparation to think how it works.</li>
						<li>With 2 years of coding, I can create a simple algorithm with ternary and if-else. And need 2–3 minutes for a preparation.</li>
						<li>By 5 years, I can create simple algorithm with ternary, if-else. But only need 5–60 seconds for a preparation. Also I can code in 5 programming languages.</li>
						<li>By 10 years, I can re-use some libraries which already made. And I can code more than 7 programming languages.</li>
					</ol>
					I hope this timeline can describe how important is experience in programming. With more experience, we can make better programs.<br /><br />

					Actually, I had my own regrets, I started learning programming since 18 yo. I think it is quite late for me in today&apos;s digital world.<br /><br />

					<Divider
						color={Color.primary}
						lineColor={Color.primary}
						lineWidth={3}
						text="Conclusion"
						lineLength={50}
						fontWeight="600"
					/><br />
					So as my suggestion, you need to start programming since early. Junior or Senior High School? Since when it is up to you, it is depends on your personality and mindset. Actually it need 5–10 years to be fluent in coding. Learning programming or coding is not instant, there is a “very” long process to expertise in it.<br /><br />

					Believe me, <b>coding is worth to learn</b>. Also it is never too late to learn coding, better now than never. Let&apos;s code!
				</Paragraph>
			</>
		),
	}

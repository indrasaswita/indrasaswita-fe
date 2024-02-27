import Badge from "@is-style/atoms/Badge"
import Label from "@is-style/atoms/Label"
import BadgeList from "@is-style/molecules/BadgeList"
import ContentWrapper from "@layouts/ContentWrapper"
import Color from "@styles/themes/default/variable.mixin"
import { darken } from "polished"
import React from "react"
import { connect } from "react-redux"
import { Wrapper } from "./AboutMePage.style"

interface AboutMePageProps {

}

interface DispatchProps {

}

export type Props = AboutMePageProps & DispatchProps
export const AboutMePage
	: React.FunctionComponent<Props>
	= () => {
		return (
			<ContentWrapper>
				<Wrapper>

					<BadgeList>
						{[
							"about",
							"milestone"
						].map((value: string) => 
							<Badge
								content={value.toUpperCase()}
								fontWeight={700}
								letterSpacing="1px"
							/>
						)}
					</BadgeList>
					<Label
						type="title section"
						subChildren={"Want to get better every day, so I'm still learning beyond yesterday"}
					>
						MY EXPERIENCE
					</Label>

					<ul className="exp">
						<li className="list">
							<div className="data-date"> 2022-now </div>
							<div className="type"> DKATALIS - FULLTIME </div>
							<div className="title">
								SENIOR ENGINEER&nbsp;&nbsp;
								<Badge
									content="current"
									fontWeight={700}
									backgroundColor={darken(.2, Color.info)}
									padding="calc(2px + .2vw) calc(4px + .4vw)"
								/>
							</div>
							<div className="text">
								Work close with PO and principal engineer to solve loan and banking transaction. <br /><br />

								2024: Improve the pocket system for overdraft and loan. <br />
								2023: Develop for direct lending for Jago loan. <br />
								2023: Learn how to solve and handle the production issues. <br />
								2023: Develop the request from user in part of loan services.
							</div>
						</li>

						<li className="list">
							<div className="data-date"> 2022 </div>
							<div className="type"> Scholarindo NFT Service </div>
							<div className="title">
								SENIOR ENGINEER&nbsp;&nbsp;
							</div>
							<div className="text">
								Ask to help refactoring the structure and system of NFT transactional website. <br /><br />

								2022: Manage the front-end own libraries and tools, hope it will easier to have a horizontal scaling.
							</div>
						</li>

						<li className="list">
							<div className="data-date"> 2021-2022 </div>
							<div className="type"> Rumah123 (99 Group) - Fulltime </div>
							<div className="title">
								FULLSTACK ENGINEER&nbsp;&nbsp;
							</div>
							<div className="text">
								Create and maintain the system for Agent Business Team. <br />
								Create documentation for frontend development. <br />
								Develop and revamp new system for rumah123 customer&apos;s pages. <br /><br />

								2021: Learn using and create new style library. <br />
								2021: Create new system backbone with NextJS, Jest, Typescript, React. <br />
								2021: Create documentation for front-end components. <br />
								2021: Learn kubernetes system. <br />
								2020: Develop new webservice system using GoLang. <br />
								2020: Develop integration system using Kafka, PostgreSQL, and GoLang. <br />
								2020: Maintain system with CakePHP, Phalcon Zephir, SASS Gulp, and MySQL. <br />
								2020: Learn dockerize system and integration.
							</div>
						</li>

						<li className="list">
							<div className="data-date"> 2021-2022 </div>
							<div className="type"> Anak Panah Cyberschool - FREELANCE </div>
							<div className="title">
								EXTRACURRICULAR TEACHER&nbsp;&nbsp;
							</div>
							<div className="text">
								Help the student understand how the code works. <br />
								Create presentation and teach in a class.  <br /><br />

								2021: Teach for desktop drag-drop project, by using VB.NET Desktop. <br />
								2020: Teach for algo and basic of programming, by using GoLang.
							</div>
						</li>

						<li className="list">
							<div className="data-date"> 2021-2021 </div>
							<div className="type"> SKYBRIDGE - FULLTIME </div>
							<div className="title"> SENIOR DEVELOPER </div>
							<div className="text">
								Lead for a small team of developers. <br />
								Manage &amp; maintain server. <br />
								Delegating work &amp; assignment to team members, via Jira & Miro. <br />
								Creating goals, with the director and product team. <br />
								Control system modification and code review. <br />
								Encourage team members to achieve goals. <br />
								Research for technical things which new for team. <br />
								Do technical documentation and create TSD. <br />
								Maintain GIT (Bitbucket), Google Analytics, Firebase, DataStudio. <br /><br />

								2021: Create MyJPCC backbone with Ionic 5. <br />
								2021: Implement Miro for discussion, make flow and diagrams. <br />
								2021: Research for Websocket service for payment notification.
							</div>
						</li>

						<li className="list">
							<div className="data-date"> 2020-2021 </div>
							<div className="type"> SKYBRIDGE - FULLTIME </div>
							<div className="title"> SENIOR BACKEND DEVELOPER </div>
							<div className="text">
								Work in a company which provides for the various needs of the church. <br />
								Maintain projects&apos; package versions. <br />
								Learn to lead a small programming team. <br />
								Creating database diagrams based on business process. <br /> <br />

								2021: Make Whatsapp Bot (non-business account) with Python-Selenium-Pusher (socket). <br />
								2021: Use pusher.js to create chatroll system. <br />
								2020: Upgrade several programs to Angular CLI and maintain SEO. <br />
								2020: Learn &amp; implement SMS gateway, payment gateway, and some third party connection app. <br />
								2020: Initiate a church web streamer, with primarily using video.js <br />
								2020: Create script for auto downloading from Youtube videos with youtube-dl. <br />
								2020: Create Google Analytics and Google DataStudio system for <a href="https://jpcc.tv">JPCC TV</a>. <br />
								2020: Improve the CI/CD system and manage staging environment. <br />
								2020: Maintain logs for automatic Cron Job. <br />
								2020: Learn &amp; utilize EXIM to send bulk email.
							</div>
						</li>

						<li className="list">
							<div className="data-date"> 2014-2020 </div>
							<div className="type"> RAHAYU PRINTING - FULLTIME </div>
							<div className="title"> FULL STACK ENGINEER & TECHNICAL MANAGER </div>
							<div className="text">
								Develop programs which support the printing business.<br />
								Create all flows, data, and relations, also manage database on MySQL. <br />
								Manage for technical things on Printing System.<br /><br />

								2019: Create an Android program for manage transaction, used by internal only. <br />
								2018: Do reasearch and implementation on SEO and Google Analytics. <br />
								2017: Make online calculations, shopping carts, and transactions for online sales. <br />
								2016: Develop JAKARTABROSUR website for sell printing online. <br />
								2015: Creating printer integration with socketprogramming on C#.NET Desktop. <br />
								2014: Creating a simple desktop POS system using C#.NET, VB.NET and Crystal Report.
							</div>
						</li>
						<li className="list">
							<div className="data-date"> 2013-2014 </div>
							<div className="type"> UNDERGRADUATE PROGRAMME (S1) - THESIS </div>
							<div className="title"> MOBILE GAME PROGRAMMING </div>
							<div className="text">
								Creating a game called PHOSTER, a game like a Pokémon that we can catch, train monsters and do battle which directly depends on the weather around the player. <br />
								Learning multiple threading works in mobile Android platform.
							</div>
						</li>

						<li className="list">
							<div className="data-date"> 2011-2013 </div>
							<div className="type"> BINA NUSANTARA - FULLTIME </div>
							<div className="title"> TEACHING ASSISTANT SLC </div>
							<div className="text">
								One of my best places and jobs to learn more about programming. <br />
								Also I can work as teacher in a same time as my lessons. <br />
								Learn how to convey aspirations and be trained in teaching.
							</div>
						</li>

					</ul>
				</Wrapper>
			</ContentWrapper>
		)
	}

export default connect(null, {

})(AboutMePage)

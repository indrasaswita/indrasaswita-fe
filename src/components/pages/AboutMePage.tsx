import Badge from "@is-style/atoms/Badge"
import Label from "@is-style/atoms/Label"
import ContentWrapper from "@layouts/ContentWrapper"
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

					<Badge
						content="MILESTONE"
						fontWeight={700}
						letterSpacing="1px"
					/>
					<Label
						type="title section"
						subChildren={"Here is my experience"}
					>
						MY EXPERIENCE
					</Label>

					<ul className="exp">
						<li className="list">
							<div className="data-date"> 2021-now </div>
							<div className="type"> Rumah123 (99 Group) - Fulltime </div>
							<div className="title"> FULLSTACK ENGINEER </div>
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
							<div className="data-date"> 2021-2021 </div>
							<div className="type"> SKYBRIDGE - FULLTIME </div>
							<div className="title"> SENIOR DEVELOPER </div>
							<div className="text">
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
							<div className="title"> SENIOR DEVELOPER </div>
							<div className="text">
								Work in a company which provides for the various needs of the church. <br />
								Maintain projects&apos; package versions. <br />
								Learn to lead a small programming team. <br />
								Creating database diagrams based on business process. <br /> <br />
								2021: Learn &amp; implement Whatsapp (non-business account) Robot with Python-Selenium-Pusher(ws).
								2021: Learn &amp; implement websocket programming (Pusher.js) for chatroll system. <br />
								2020: Upgrade several programs to Angular CLI and maintain SEO. <br />
								2020: Learn &amp; implement Midtrans for payment process. <br />
								2020: Learn &amp; implement NusaSMS and Twilio for sending SMS OTP. <br />
								2020: Create parsial backup system between two servers with Laravel-Angularjs. <br />
								2020: Learn how to use Firewall WHM system. <br />
								2020: Create <a href="https://jpcc.tv">JPCC TV</a> backend system based on Laravel 7. <br />
								2020: Create <a href="https://jpcc.tv">JPCC TV</a> frontend with Angular 10, implementing video.js, Nginx, Redhat, OBS for livestreaming. <br />
								2020: Create script for auto downloading from Youtube videos with youtube-dl. <br />
								2020: Create Google Analytics and Google DataStudio system for <a href="https://jpcc.tv">JPCC TV</a>. <br />
								2020: Create hosting environment in a VPS based on CentOS 7. <br />
								2020: Implement staging step and version control for some repositories. <br />
								2020: Maintain logs for automatic Cron Job. <br />
								2020: Learn &amp; use EXIM to send bulk email.
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
								2015:Creating printer integration with socketprogramming on C#.NET Desktop. <br />
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

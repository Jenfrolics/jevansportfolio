const About = () => {
	return (
		<section className="about main-section flex-column-mobile" id="about">
			{/* INFO HOLDER STARTS */}
			<div className="info flex-column-mobile">
				{/* IMAGE STARTS */}
				<div
					className="img-container animated-layer image-animation my-photo-container fadeInUp wow"
					data-wow-offset={200}
					id="my-photo"
				>
					<div>
						<div>
							<img
								className="my-photo"
								src="assets/jenn-pfp.jpg"
								alt=""
							/>
						</div>
					</div>
				</div>
				{/* IMAGE ENDS */}
				{/* INFO STARTS */}
				<div>
					<h2>
						<span>
							<span className="animated-layer fade-in-up-animation fadeInUp wow">
								jenn
							</span>
						</span>
						<span>
							<span className="animated-layer fade-in-up-animation fadeInUp wow">
								evans
							</span>
						</span>
					</h2>
					<div className="infos">
						<ul>
							<li>
								<span>
									<span className="animated-layer fade-in-up-animation fadeInUp wow">
										<span>Contract:</span>
										<span>Available</span>
									</span>
								</span>
							</li>
							<li>
								<span>
									<span className="animated-layer fade-in-up-animation fadeInUp wow">
										<span>Languages :</span>
										<span>English, Romanian</span>
									</span>
								</span>
							</li>
							<li>
								<span>
									<span className="animated-layer fade-in-up-animation fadeInUp wow">
										<span>Location: </span>
										<span>Vancouver Island</span>
									</span>
								</span>
							</li>
							<li>
								<span>
									<span className="animated-layer fade-in-up-animation fadeInUp wow">
										<span>Experience:</span>
										<span>7 Years</span>
									</span>
								</span>
							</li>
						</ul>
						<ul>
							<li>
								<span>
									<span className="animated-layer fade-in-up-animation fadeInUp wow">
										<span>Phone :</span>
										<span>778.861.2465</span>
									</span>
								</span>
							</li>
							<li>
								<span>
									<span className="animated-layer fade-in-up-animation fadeInUp wow">
										<span>Email :</span>
										<span>jenfrolics@gmail.com</span>
									</span>
								</span>
							</li>
						</ul>
					</div>
				</div>
				{/* INFO ENDS */}
			</div>
			{/* INFO HOLDER ENDS */}
			{/* SKILLS STARTS */}
			<div className="skills flex-column-mobile">
				{/* TITLE STARTS */}
				<div className="custom-title">
					{/* MAIN TITLE STARTS */}
					<h3>
						<span>
							<span className="animated-layer fade-in-left-animation fadeInUp wow">
								Skills
							</span>
						</span>
					</h3>
					{/* MAIN TITLE ENDS */}
				</div>
				{/* TITLE ENDS */}
				<div className="skills-content">
					<div>
						{/* SKILL ITEM STARTS */}
						<div className="animated-layer fade-in-down-animation fadeInLeft wow">
							<span>
								<i className="fa-brands fa-bootstrap"></i>{" "}
							</span>
							<h4>Bootstrap</h4>
						</div>
						{/* SKILL ITEM ENDS */}
						{/* SKILL ITEM STARTS */}
						<div className="animated-layer fade-in-up-animation fadeInRight wow">
							<span>
								<i className="fa-brands fa-git"></i>{" "}
							</span>
							<h4>Git</h4>
						</div>
						{/* SKILL ITEM ENDS */}
					</div>
					<div>
						{/* SKILL ITEM STARTS */}
						<div className="animated-layer fade-in-down-animation fadeInLeft wow">
							<span>
								<i className="fa-brands fa-angular"></i>{" "}
							</span>
							<h4>Angular JS</h4>
						</div>
						{/* SKILL ITEM ENDS */}
						{/* SKILL ITEM STARTS */}
						<div className="animated-layer fade-in-up-animation fadeInRight wow">
							<span>
								<i className="fa-solid fa-bezier-curve"></i>{" "}
							</span>
							<h4>Adobe</h4>
						</div>
						{/* SKILL ITEM ENDS */}
					</div>
					<div>
						{/* SKILL ITEM STARTS */}
						<div className="animated-layer fade-in-down-animation fadeInLeft wow">
							<span>
								<i className="fa-brands fa-react"></i>{" "}
							</span>
							<h4>React JS</h4>
						</div>
						{/* SKILL ITEM ENDS */}
						{/* SKILL ITEM STARTS */}
						<div className="animated-layer fade-in-up-animation fadeInRight wow">
							<span>
								<i className="fa-brands fa-figma"></i>{" "}
							</span>
							<h4>Figma</h4>
						</div>
						{/* SKILL ITEM ENDS */}
					</div>
					<div>
						{/* SKILL ITEM STARTS */}
						<div className="animated-layer fade-in-down-animation fadeInLeft wow">
							<span>
								<i className="fa-brands fa-node"></i>{" "}
							</span>
							<h4>Node JS</h4>
						</div>
						{/* SKILL ITEM ENDS */}
						{/* SKILL ITEM STARTS */}
						<div className="animated-layer fade-in-up-animation fadeInRight wow">
							<span>
								<i className="fa-solid fa-code"></i>{" "}
							</span>
							<h4>Html / CSS</h4>
						</div>
						{/* SKILL ITEM ENDS */}
					</div>
				</div>
			</div>
			{/* SKILLS ENDS */}
			{/* RESUME STARTS */}
			<div className="resume flex-column-mobile">
				{/* TITLE STARTS */}
				<div className="custom-title fadeInUp wow">
					{/* MAIN TITLE STARTS */}
					<h3>
						<span>
							<span className="animated-layer fade-in-left-animation">
								Resume
							</span>
						</span>
					</h3>
					{/* MAIN TITLE ENDS */}
				</div>
				{/* TITLE ENDS */}
				{/* TIMELINE STARTS */}
				<div className="timeline">
					<ol className="animated-layer fade-in-animation">
						{/* TIMELINE ITEM STARTS */}
						<li>
							<div className="animated-layer fade-in-down-animation fadeInUp wow">
								<div className="education">
									<h4>Bachelors EQ Degree</h4>
									<p>
										<i className="fa-regular fa-clock" />
										<span>2014</span>
									</p>
									<p>
										<i className="fa-regular fa-building" />
										<span>
											Vancouver College of Art and Design
										</span>
									</p>
								</div>
							</div>
						</li>
						{/* TIMELINE ITEM ENDS */}
						{/* TIMELINE ITEM STARTS */}
						<li>
							<div className="animated-layer fade-in-up-animation fadeInUp wow">
								<div className="experience">
									<h4>Web Developer</h4>
									<p>
										<i className="fa-regular fa-clock" />
										<span>2017 - 2018 - Contract</span>
									</p>
									<p>
										<i className="fa-regular fa-building" />
										<span>Juice Group</span>
									</p>
								</div>
							</div>
						</li>
						{/* TIMELINE ITEM ENDS */}
						{/* TIMELINE ITEM STARTS */}
						<li>
							<div className="animated-layer fade-in-down-animation fadeInUp wow">
								<div className="experience">
									<h4>Web Development Manager</h4>
									<p>
										<i className="fa-regular fa-clock" />
										<span>2018 - Contract</span>
									</p>
									<p>
										<i className="fa-regular fa-building" />
										<span>Forever Yours</span>
									</p>
								</div>
							</div>
						</li>
						{/* TIMELINE ITEM ENDS */}
						{/* TIMELINE ITEM STARTS */}
						<li>
							<div className="animated-layer fade-in-up-animation fadeInUp wow">
								<div className="experience">
									<h4>UX Developer</h4>
									<p>
										<i className="fa-regular fa-clock" />
										<span>2018 - 2020</span>
									</p>
									<p>
										<i className="fa-solid fa-building-columns" />
										<span>Coppertree Analytics</span>
									</p>
								</div>
							</div>
						</li>
						{/* TIMELINE ITEM ENDS */}
						{/* TIMELINE ITEM STARTS */}
						<li>
							<div className="animated-layer fade-in-down-animation fadeInUp wow">
								<div className="experience">
									<h4>UX Engineer</h4>
									<p>
										<i className="fa-regular fa-clock" />
										<span>2020 - Present</span>
									</p>
									<p>
										<i className="fa-solid fa-building-columns" />
										<span>Croquet</span>
									</p>
								</div>
							</div>
						</li>
						{/* TIMELINE ITEM ENDS */}
						<li />
					</ol>
				</div>
				{/* TIMELINE ENDS */}
			</div>
			{/* RESUME ENDS */}
			<img
				alt=""
				className="separator hide-mobile"
				src="assets/separator.png"
			/>
		</section>
	);
};
export default About;

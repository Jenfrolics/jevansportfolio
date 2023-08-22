const Home = () => {
	return (
		<section className="home image" id="home">
			<div>
				<div className="position-relative title">
					<h1>
						<span>
							<span className="animated-layer">
								Hi<span>.</span>
							</span>
						</span>
						<span className="position-relative">
							<span className="animated-layer">I'm</span>
						</span>
						<span>
							<span className="animated-layer">jenn</span>
						</span>
					</h1>
				</div>
			</div>
			{/* CALL TO ACTION STARTS */}
			<span className="animated-layer animated-btn cta" id="cta">
				<span></span>
			</span>
			{/* CALL TO ACTION ENDS */}
		</section>
	);
};
export default Home;

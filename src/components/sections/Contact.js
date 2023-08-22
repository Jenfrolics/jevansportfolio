const Contact = () => {
	return (
		<section
			className="contact main-section flex-column-mobile"
			id="contact"
		>
			{/* TITLE STARTS */}
			<div className="custom-title">
				{/* MAIN TITLE STARTS */}
				<h3>
					<span>
						<span className="animated-layer fade-in-left-animation fadeInUp wow">
							Get in touch
						</span>
					</span>
				</h3>
				{/* MAIN TITLE ENDS */}
			</div>
			{/* TITLE ENDS */}
			{/* CONTACTS STARTS */}
			<div className="boxes">
				<div>
					{/* CONTACT ITEM STARTS */}
					<div className="animated-layer fade-in-down-animation fadeInUp wow">
						<i className="fa fa-phone" />
						<p>
							<span className="small-text">phone</span>
							+1 778 861 2465
						</p>
					</div>
					{/* CONTACT ITEM ENDS */}
					{/* CONTACT ITEM STARTS */}
					<div className="animated-layer fade-in-up-animation fadeInUp wow">
						<i className="fa-regular fa-dove" />
						<p>
							<span className="small-text">carrier pigeon</span>
							Vancouver Island
						</p>
					</div>
					{/* CONTACT ITEM ENDS */}
				</div>
				<div>
					{/* CONTACT ITEM STARTS */}
					<div className="animated-layer fade-in-down-animation fadeInUp wow">
						<i className="fa fa-envelope" />
						<p>
							<span className="small-text">email</span>
							jenfrolics@gmail.com
						</p>
					</div>
					{/* CONTACT ITEM ENDS */}
				</div>
			</div>
			{/* CONTACTS ENDS */}
			<img
				alt=""
				className="separator hide-mobile"
				src="assets/separator.png"
			/>
		</section>
	);
};
export default Contact;

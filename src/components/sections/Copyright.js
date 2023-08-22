const Copyright = () => {
	return (
		<section className="copyright">
			<img
				alt=""
				className="z-1 hide-mobile"
				src="assets/separator-copyright.png"
			/>
			<div>
				<span>© {new Date().getFullYear()} jenn evans</span>
			</div>
		</section>
	);
};
export default Copyright;

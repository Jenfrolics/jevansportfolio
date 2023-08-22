import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Portfolio = () => {
	return (
		<section
			className="portfolio main-section flex-column-mobile"
			id="portfolio"
		>
			<div className="custom-title">
				<h3>
					<span>
						<span className="animated-layer fade-in-left-animation fadeInUp wow">
							My Portfolio
						</span>
					</span>
				</h3>
			</div>
			<Swiper
				{...salimovSlider.portfolio}
				className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow"
				data-wow-offset={200}
			>
				<SwiperSlide className="single-item swiper-slide">
					<div className="main-content">
						<Swiper
							{...salimovSlider.portfolioItems}
							className="swiper swiper-portfolio-item"
						>
							<SwiperSlide className="swiper-slide">
								<img
									src="assets/portfolio/universal-studios/us-1.png"
									title="img"
								/>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<img
									src="assets/portfolio/universal-studios/us-2.png"
									title="img"
								/>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<img
									src="assets/portfolio/universal-studios/us-3.png"
									title="img"
								/>
							</SwiperSlide>
							<div className="swiper-pagination" />
						</Swiper>
					</div>
					<div className="details">
						<h4>Universal Studios</h4>
						<div>
							<p>
								<span className="portfolio-headers">
									Project:
								</span>
								Audio Sync Dashboard
							</p>
							<p>
								<span className="portfolio-headers">
									About:
								</span>{" "}
								A custom built audio sync dashboard for
								Universal Studios.
							</p>
						</div>
						<a href="#" target="_blank" className="custom-btn">
							<span>
								preview{" "}
								<i className="fa-solid fa-arrow-up-right-from-square" />
							</span>
						</a>
					</div>
				</SwiperSlide>

				<div className="nav-item next-item animated-btn">
					<span />
				</div>
				<div className="nav-item prev-item animated-btn">
					<span />
				</div>
			</Swiper>
			<img
				alt=""
				className="separator hide-mobile"
				src="assets/separator.png"
			/>
		</section>
	);
};
export default Portfolio;

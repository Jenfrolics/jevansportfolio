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
							Portfolio
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
							<p className="swipe">swipe</p>
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
					</div>
				</SwiperSlide>

				<SwiperSlide className="single-item swiper-slide">
					<div className="main-content">
						<Swiper
							{...salimovSlider.portfolioItems}
							className="swiper swiper-portfolio-item"
						>
							<SwiperSlide className="swiper-slide">
								<img
									src="assets/portfolio/corridor/corridor-1.jpg"
									title="img"
								/>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<img
									src="assets/portfolio/corridor/corridor-2.jpg"
									title="img"
								/>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<img
									src="assets/portfolio/corridor/corridor-3.png"
									title="img"
								/>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<img
									src="assets/portfolio/corridor/corridor-4.jpg"
									title="img"
								/>
							</SwiperSlide>{" "}
							<SwiperSlide className="swiper-slide">
								<img
									src="assets/portfolio/corridor/corridor-5.jpg"
									title="img"
								/>
							</SwiperSlide>{" "}
							<SwiperSlide className="swiper-slide">
								<img
									src="assets/portfolio/corridor/corridor-6.jpg"
									title="img"
								/>
							</SwiperSlide>
							<div className="swiper-pagination" />
							<p className="swipe">swipe</p>
						</Swiper>
					</div>
					<div className="details">
						<h4>Corridor</h4>
						<div>
							<p>
								<span className="portfolio-headers">
									Project:
								</span>
								Virtual Meeting Room
							</p>
							<p>
								<span className="portfolio-headers">
									About:
								</span>{" "}
								Virtual meeting room nicknamed "The Corridor"
								built using ReactJS and Reactstrap on Croquet.
							</p>
						</div>
					</div>
				</SwiperSlide>

				<SwiperSlide className="single-item swiper-slide">
					<div className="main-content">
						<Swiper
							{...salimovSlider.portfolioItems}
							className="swiper swiper-portfolio-item"
						>
							<SwiperSlide className="swiper-slide">
								<img
									src="assets/portfolio/greenlight/greenlight-1.jpg"
									title="img"
								/>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<img
									src="assets/portfolio/greenlight/greenlight-2.jpg"
									title="img"
								/>
							</SwiperSlide>{" "}
							<SwiperSlide className="swiper-slide">
								<img
									src="assets/portfolio/greenlight/greenlight-3.png"
									title="img"
								/>
							</SwiperSlide>{" "}
							<SwiperSlide className="swiper-slide">
								<img
									src="assets/portfolio/greenlight/greenlight-4.png"
									title="img"
								/>
							</SwiperSlide>
							<div className="swiper-pagination" />
							<p className="swipe">swipe</p>
						</Swiper>
					</div>
					<div className="details">
						<h4>Greenlight</h4>
						<div>
							<p>
								<span className="portfolio-headers">
									Project:
								</span>
								Virtual Meeting Rooms
							</p>
							<p>
								<span className="portfolio-headers">
									About:
								</span>{" "}
								Fully synchronized virtual meeting room
								nicknamed "Greenlight" built using ReactJS and
								Reactstrap on Croquet. Still used daily for
								internal communications.
							</p>
						</div>
					</div>
				</SwiperSlide>

				<SwiperSlide className="single-item swiper-slide">
					<div className="main-content">
						<Swiper
							{...salimovSlider.portfolioItems}
							className="swiper swiper-portfolio-item"
						>
							<SwiperSlide className="swiper-slide">
								<img
									src="assets/portfolio/dashboard/dashboard-1.png"
									title="img"
								/>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<img
									src="assets/portfolio/dashboard/dashboard-2.png"
									title="img"
								/>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<img
									src="assets/portfolio/dashboard/dashboard-3.png"
									title="img"
								/>
							</SwiperSlide>

							<div className="swiper-pagination" />
							<p className="swipe">swipe</p>
						</Swiper>
					</div>
					<div className="details">
						<h4>API Key Dashboard</h4>
						<div>
							<p>
								<span className="portfolio-headers">
									Project:
								</span>
								API Key Retrieval Dashboard
							</p>
							<p>
								<span className="portfolio-headers">
									About:
								</span>{" "}
								A dashboard built using ReactJS for the
								retrieval of an API key and to view metrics per
								key. This dashboard is currently fully
								operational.
							</p>
						</div>
					</div>
				</SwiperSlide>

				<SwiperSlide className="single-item swiper-slide">
					<div className="main-content">
						<Swiper
							{...salimovSlider.portfolioItems}
							className="swiper swiper-portfolio-item"
						>
							<SwiperSlide className="swiper-slide">
								<img
									src="assets/portfolio/game-ui/demolition-before.png"
									title="img"
								/>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<img
									src="assets/portfolio/game-ui/demolition-1.png"
									title="img"
								/>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<img
									src="assets/portfolio/game-ui/demolition-2.png"
									title="img"
								/>
							</SwiperSlide>

							<div className="swiper-pagination" />
							<p className="swipe">swipe</p>
						</Swiper>
					</div>
					<div className="details">
						<h4>Game UI: Demolition</h4>
						<div>
							<p>
								<span className="portfolio-headers">
									Project:
								</span>
								Game UI Revamp: Demolition
							</p>
							<p>
								<span className="portfolio-headers">
									About:
								</span>{" "}
								A Game UI created in Unity for a game called
								Demolition. The first beige image is the game's
								state prior to the revamp. This game is fully
								operational.
							</p>
						</div>
					</div>
				</SwiperSlide>

				<SwiperSlide className="single-item swiper-slide">
					<div className="main-content">
						<Swiper
							{...salimovSlider.portfolioItems}
							className="swiper swiper-portfolio-item"
						>
							<SwiperSlide className="swiper-slide">
								<img
									src="assets/portfolio/game-ui/guardians-before.png"
									title="img"
								/>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<img
									src="assets/portfolio/game-ui/guardians-logo.png"
									title="img"
								/>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<img
									src="assets/portfolio/game-ui/guardians-after.jpg"
									title="img"
								/>
							</SwiperSlide>

							<div className="swiper-pagination" />
							<p className="swipe">swipe</p>
						</Swiper>
					</div>
					<div className="details">
						<h4>Game UI: Guardians</h4>
						<div>
							<p>
								<span className="portfolio-headers">
									Project:
								</span>
								Game UI Revamp: Guardians
							</p>
							<p>
								<span className="portfolio-headers">
									About:
								</span>{" "}
								A Game UI created in Unity for a game called
								Guardians. The first beige image is the game's
								state prior to the revamp. This game is fully
								operational.
							</p>
						</div>
					</div>
				</SwiperSlide>

				<SwiperSlide className="single-item swiper-slide">
					<div className="main-content">
						<Swiper
							{...salimovSlider.portfolioItems}
							className="swiper swiper-portfolio-item"
						>
							<SwiperSlide className="swiper-slide">
								<img
									src="assets/portfolio/website/website-both.jpg"
									title="img"
								/>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<img
									src="assets/portfolio/website/website-2.jpg"
									title="img"
								/>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<img
									src="assets/portfolio/website/website-3.png"
									title="img"
								/>
							</SwiperSlide>

							<div className="swiper-pagination" />
							<p className="swipe">swipe</p>
						</Swiper>
					</div>
					<div className="details">
						<h4>Website</h4>
						<div>
							<p>
								<span className="portfolio-headers">
									Project:
								</span>
								Croquet Website Revamp
							</p>
							<p>
								<span className="portfolio-headers">
									About:
								</span>{" "}
								A new website design created in Figma for
								Croquet's new Metaverse project. This website is
								currently in its development stage using NextJS.
							</p>
						</div>
						<a
							href="assets/portfolio/website/website-1.png"
							target="_blank"
							className="custom-btn"
						>
							<span>
								preview{" "}
								<i className="fa-solid fa-arrow-up-right-from-square" />
							</span>
						</a>
					</div>
				</SwiperSlide>

				<SwiperSlide className="single-item swiper-slide">
					<div className="main-content">
						<Swiper
							{...salimovSlider.portfolioItems}
							className="swiper swiper-portfolio-item"
						>
							<SwiperSlide className="swiper-slide">
								<img
									src="assets/portfolio/metaverse/microverse-1.png"
									title="img"
								/>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<img
									src="assets/portfolio/metaverse/microverse-2.png"
									title="img"
								/>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<img
									src="assets/portfolio/metaverse/microverse-4.png"
									title="img"
								/>
							</SwiperSlide>

							<div className="swiper-pagination" />
							<p className="swipe">swipe</p>
						</Swiper>
					</div>
					<div className="details">
						<h4>Metaverse</h4>
						<div>
							<p>
								<span className="portfolio-headers">
									Project:
								</span>
								Croquet: Microverse UI
							</p>
							<p>
								<span className="portfolio-headers">
									About:
								</span>{" "}
								A UI created for Croquet's Microverse project.
								This includes 2D and 3D elements, settings
								menus, avatar selection and the navigation user
								experience.
							</p>
						</div>
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

import "../CarsPage/Cars.css";
import { CgChevronRightO } from "react-icons/cg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/global-context";

export default function Cars() {
	// Use Context
	const { data } = useGlobalContext();

	return (
		<section className="max-w-[1540px] bg-[#272933]">
			{data?.map((category) => (
				<div key={category.id} className="py-8 max-w-[1248px] mx-auto">
					<div>
						<div className="flex text-white justify-between">
							<h2 className="text-[34px] uppercase leading-none">
								{category.name_en} RENTAL DUBAI
							</h2>
							<Link
								to={`/${category.id}`}
								className="group cursor-pointer flex items-center gap-x-3"
							>
								<span className="text-[20px]">SEE ALL</span>
								<CgChevronRightO className="size-7 group-hover:translate-x-1 transition-all" />
							</Link>
						</div>

						<Swiper className="mt-10" slidesPerView={3} spaceBetween={70}>
							{category.cars.map((car) => (
								<SwiperSlide
									key={car.id}
									className="max-w-[350px] h-[440px] bg-gradient cursor-pointer p-4 text-white rounded-[20px]"
								>
									<Link to={`carinfo/${car.id}`}>
										<div className="flex items-center h-[320px]">
											<img
												alt="car img"
												src={`https://api.autozoomrental.com/api/uploads/images/${car.car_images[1].image.src}`}
											/>
										</div>

										<div>
											<h3 className="text-[22px] tracking-wider leading-none opacity-95">
												{car.brand.title} {car.model.name}
											</h3>
											<div className="border-t my-2 space-x-1">
												<span className="font-bold text-[20px]">
													AED {car.price_in_aed}
												</span>
												<span className="text-[18px] opacity-65">
													/ $ {car.price_in_usd}
												</span>
											</div>
											<span className="opacity-65">per day</span>
										</div>
									</Link>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			))}
		</section>
	);
}

import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../../context/global-context";
import { MdOutlineDateRange, MdShutterSpeed } from "react-icons/md";
import { SlSpeedometer } from "react-icons/sl";
import {
	TbAutomaticGearbox,
	TbCar4Wd,
	TbEngine,
	TbUserOff,
} from "react-icons/tb";
import { IoCarSportOutline, IoColorPaletteOutline } from "react-icons/io5";
import { BsFuelPump } from "react-icons/bs";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import CarImageGallery from "./Car-Image-Gallery";

export default function CarDetail() {
	const { data } = useGlobalContext();
	const { id } = useParams();

	// Find correct id and return objects
	const carDetails = data
		.map((info) => info.cars.find((car) => car.id === String(id)))
		.filter(Boolean);

	// Define category and checking its text,
	const defineCategory = (categoryId) => {
		const category = data.find((category) => category.id === categoryId);
		let definedCategory = category ? category.name_en : undefined;

		if (definedCategory && !definedCategory.includes("Cars")) {
			definedCategory += "Cars";
		}
		return definedCategory;
	};

	// Checking active car id
	if (!carDetails) {
		return <p>Car not found</p>;
	}

	// Scrolling to top
	const scrollTop = () => {
		window.scrollTo({
			top: 0,
		});
	};

	return (
		<section className="max-w-[1540px] bg-[#1E1F27]">
			{carDetails?.map((car) => (
				<div key={car.id} className="pt-10 max-w-[1248px] mx-auto">
					<div>
						<h2 className="leading-none text-white font-bold tracking-wider text-[48px]">
							{car.brand.title} {car.model.name} ({car.color})
						</h2>

						<div className="flex items-start justify-between mt-10">
							<div className="w-[700px] space-y-4 no-scrollbar overflow-y-auto cursor-pointer">
								<CarImageGallery images={car.car_images} />
							</div>

							<div className="w-[500px] text-white">
								<div className="flex justify-between border-stone-400 border-b pb-5">
									<div className="flex flex-col">
										<div>
											<span className="font-bold">AED {car.price_in_aed} </span>
											<span className="font-bold opacity-60">
												/ $ {car.price_in_usd}
											</span>
										</div>
										<span className="opacity-60 text-[14px]">per day</span>
										<span className="font-medium line-through">AED / $</span>
									</div>

									<div className="opacity-60 text-[14px] flex flex-col">
										<span>Deposit</span>
										<span className="mt-8">Premium protection</span>
									</div>

									<div className="flex flex-col">
										<span className="font-bold">AED 0</span>
										<span className="opacity-60 text-[14px]">
											AED 0 for credit cards payment
										</span>
										<span className="font-bold">
											AED {car.price_in_aed_sale ? car.price_in_aed_sale : 0}
										</span>
										<span className="opacity-60 text-[14px]">
											AED {car.price_in_aed_sale ? car.price_in_aed_sale : 0}{" "}
											price for 1 day
										</span>
									</div>
								</div>

								<div className="grid grid-cols-5 gap-x-16 gap-y-5 text-[18px] px-5 border-stone-400 border-b mt-10 pb-4">
									<div className="flex flex-col items-center gap-y-1">
										<MdOutlineDateRange className="opacity-60 size-6" />
										<span>{car.year}</span>
									</div>
									<div className="flex flex-col items-center gap-y-1">
										<MdShutterSpeed className="opacity-60 size-6" />
										<span>{car.seconds}</span>
									</div>
									<div className="flex flex-col items-center gap-y-1">
										<SlSpeedometer className="opacity-60 size-6" />
										<span>{car.max_speed}</span>
									</div>
									<div className="flex flex-col items-center gap-y-1">
										<TbUserOff className="opacity-60 size-6" />
										<span>{car.max_people}</span>
									</div>
									<div className="flex flex-col items-center gap-y-1">
										<IoColorPaletteOutline className="opacity-60 size-6" />
										<span>{car.color}</span>
									</div>
									<div className="flex flex-col items-center gap-y-1">
										<TbEngine className="opacity-60 size-6" />
										<span>{car.motor}</span>
									</div>
									<div className="flex flex-col items-center gap-y-1">
										<TbAutomaticGearbox className="opacity-60 size-6" />
										<span>{car.transmission}</span>
									</div>
									<div className="flex flex-col items-center gap-y-1">
										<TbCar4Wd className="opacity-60 size-6" />
										<span>front</span>
									</div>
									<div className="flex flex-col items-center gap-y-1">
										<BsFuelPump className="opacity-60 size-6" />
										<span>{car.petrol}</span>
									</div>
									<div className="flex flex-col items-center gap-y-1">
										<IoCarSportOutline className="opacity-60 size-6" />
										<span>{defineCategory(car.category_id)}</span>
									</div>
								</div>

								<div className="flex justify-center gap-x-4 mt-9">
									<button className="px-5 py-3 bg-[#5AEC5A] rounded-[12px]">
										<a
											href="https://api.whatsapp.com/send/?phone=971527030189&text&type=phone_number&app_absent=0"
											target="blank"
										>
											<FaWhatsapp className="size-8" />
										</a>
									</button>

									<button className="px-5 py-3 bg-[#2374F8] rounded-[12px]">
										<a href="https://t.me/+971527030189" target="blank">
											<FaTelegramPlane className="size-8" />
										</a>
									</button>

									<button className="px-5 py-3 bg-[#FFB630] rounded-[12px]">
										<a href="tel:971527030189" target="blank">
											<LuPhone className="size-8" />
										</a>
									</button>
								</div>
							</div>
						</div>

						<div className="flex flex-col text-white hidden">
							<div className="flex justify-between border">
								<div>
									<h2>
										Good to know about {car.brand.title} {car.model.name} (
										{car.color})
									</h2>
									<p className="flex flex-col">
										<span>Kilometrage limit per day</span>
										{car.max_speed} KM (Every extra km will be charged 20
										AED/km)
									</p>
									<p>
										<span>Car rental deposit amount</span>
										The deposit is refunded within 28 days
									</p>
								</div>

								<div>
									<form className="flex flex-col">
										<input
											type="text"
											required
											placeholder="Name"
											autoComplete="off"
										/>
										<input
											type="tel"
											required
											placeholder="Phone"
											autoComplete="off"
										/>
										<input
											type="text"
											required
											placeholder="Period"
											autoComplete="off"
										/>
										<input
											type="text"
											required
											placeholder="Details"
											autoComplete="off"
										/>

										<button type="submit" className="self-start">
											Send
										</button>
									</form>
								</div>
							</div>

							<div className="flex flex-col self-end">
								<span>The price doesnt include additional 5% VAT.</span>
								<span>
									There is a 3% transaction fee when paying by credit/debit
									card.
								</span>
								<span>
									There is a 7% transaction fee when paying with American
									Express.
								</span>
							</div>
						</div>

						<div className="text-white">
							<h2 className="uppercase text-[24px] font-semibold tracking-wide">
								Similar Offers
							</h2>
							{data?.map((category) => (
								<div key={category.id} className="py-2 max-w-[1248px] mx-auto">
									<div className="grid grid-cols-4 gap-4">
										{category.cars.map((car) => (
											<div
												key={car.id}
												className="max-w-[350px] bg-[#2D2E34] border border-zinc-500 cursor-pointer p-4 text-white rounded-xl"
											>
												<Link to={`/carinfo/${car.id}`} onClick={scrollTop}>
													{car.car_images.map(
														(img, index) =>
															img.is_main && (
																<div
																	key={index}
																	className="flex items-center h-[200px]"
																>
																	<img
																		alt="selected car img"
																		className="mx-auto w-[210px]"
																		src={`https://api.autozoomrental.com/api/uploads/images/${img.image.src}`}
																	/>
																</div>
															),
													)}

													<div className="mt-14">
														<h3 className="text-[22px] tracking-wider leading-none opacity-95">
															{car.brand.title} {car.model.name}
														</h3>
														<div className="border-t border-zinc-400 my-3 space-x-1">
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
											</div>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			))}
		</section>
	);
}

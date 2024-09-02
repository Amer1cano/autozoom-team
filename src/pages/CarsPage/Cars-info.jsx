import { useParams } from "react-router-dom";
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

export default function CarDetail() {
	const { data } = useGlobalContext();
	const { id } = useParams();

	const carDetails = data
		.map((info) => {
			return info.cars.find((car) => car.id === id);
		})
		.filter(Boolean);

	if (!carDetails) {
		return <p>Car not found</p>;
	}

	console.log(carDetails);

	return (
		<section className="max-w-[1540px] h-screen bg-[#1E1F27]">
			{carDetails?.map((car) => (
				<div key={car.id} className="pt-14 max-w-[1248px] mx-auto">
					<div>
						<h2 className="text-white font-bold tracking-wider text-[48px]">
							{car.brand.title} {car.model.name} ({car.color})
						</h2>
						<div className="flex">
							<img
								alt="selected car img"
								className="w-[500px]"
								src={`https://api.autozoomrental.com/api/uploads/images/${car.car_images[1].image.src}`}
							/>

							<div className="w-[550px] text-white">
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
										<span className="font-bold">AED 0</span>
										<span className="opacity-60 text-[14px]">
											AED 0 price for 1 day
										</span>
									</div>
								</div>

								<div className="grid grid-cols-5 gap-x-16 gap-y-5 text-[18px] px-5 border-stone-400 border-b mt-10 pb-5">
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
										<span>Budget cars</span>
									</div>
								</div>

								<div className="flex justify-center gap-x-4 mt-9">
									<button className="px-5 py-3 bg-[#5AEC5A] rounded-[12px]">
										<a href="#" target="blank">
											<FaWhatsapp className="size-8" />
										</a>
									</button>

									<button className="px-5 py-3 bg-[#2374F8] rounded-[12px]">
										<a href="#" target="blank">
											<FaTelegramPlane className="size-8" />
										</a>
									</button>

									<button className="px-5 py-3 bg-[#FFB630] rounded-[12px]">
										<a href="#" target="blank">
											<LuPhone className="size-8" />
										</a>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</section>
	);
}

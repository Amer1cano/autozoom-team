import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/scrollbar";
import PropTypes from "prop-types";

export default function CarImageGallery({ images }) {
	const [carImages, setCarImages] = useState(images);

	const handleThumbnailClick = (index) => {
		const updatedImages = carImages.map((img, i) => ({
			...img,
			is_main: i === index,
		}));
		setCarImages(updatedImages);
	};

	return (
		<div className="flex space-x-5">
			<Swiper
				mousewheel={true}
				direction="vertical"
				slidesPerView={4}
				className="h-[62vh] w-[200px]"
				spaceBetween={0}
				modules={[FreeMode, Mousewheel]}
			>
				{carImages.map(
					(img, index) =>
						!img.is_main && (
							<SwiperSlide key={index}>
								<img
									alt="car thumbnail"
									onClick={() => handleThumbnailClick(index)}
									className="h-[14vh] w-full object-cover rounded-md"
									src={`https://api.autozoomrental.com/api/uploads/images/${img.image.src}`}
								/>
							</SwiperSlide>
						),
				)}
			</Swiper>

			<Swiper className="h-[60vh] w-full">
				{carImages.map(
					(img, index) =>
						img.is_main && (
							<SwiperSlide key={index}>
								<img
									alt="selected car img"
									className="w-full h-[100%] object-cover rounded-md"
									src={`https://api.autozoomrental.com/api/uploads/images/${img.image.src}`}
								/>
							</SwiperSlide>
						),
				)}
			</Swiper>
		</div>
	);
}

CarImageGallery.propTypes = {
	images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

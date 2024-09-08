import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="bg-[rgb(18,19,25)] mx-auto py-12 ">
            <div className=" m-auto flex flex-row">
                <div className="w-auto">
                    <img
                        src="https://www.autozoomrental.com/static/media/logo1.cd0ee2ea64bdb4e351d6eb2c72171d12.svg"
                        alt=""
                        className="w-[110px] h-[80px]"
                    />
                    <h1 className="text-4xl text-white w-[265px] pt-8">ПРОКАТ АВТОМОБИЛЕЙ В ДУБАЕ</h1>
                    <p className="text-[1rem] text-gray-400 w-[265px] pt-8 pb-8">
                        Аренда спортивных и лакшери авто напрямую без посредников. Аренда авто Дубай с Auto Zoom Car
                        Rental это безопастность и удовольствие от вождения
                    </p>
                    <a
                        href="tel:+998948999949"
                        className="w-36 h-20  border rounded-lg  py-4 text-white px-6 footerBtn"
                    >
                        ЗВОНИТЕ
                    </a>
                </div>
                <div>
                    <div className="flex flex-row gap-5">
                        <div className="flex flex-col  gap-4">
                            <p className="text-white">МАШИНЫ</p>
                            <p className="text-gray-400">Suv</p>
                            <p className="text-gray-400">Спортивные автомобили</p>
                            <p className="text-gray-400">Роскошные автомобили</p>
                            <p className="text-gray-400">Кабриолеты</p>
                            <p className="text-gray-400">Бюджетные автомобили</p>
                            <p className="text-gray-400">Американские бренды</p>
                            <p className="text-gray-400">Muscle</p>
                        </div>
                        <div className="flex flex-col   justify-between">
                            <p className="text-white">БЛОГ</p>
                            <p className="text-white">УСЛУГИ</p>
                            <ul className="flex flex-col gap-2">
                                <li>
                                <p className="text-white">КОНТАКТЫ</p>

                                </li>
                                <li>
                                <p className="text-gray-400">Elite 3 Sports City, Dubai 26W8 24J, United Arab <br /> Emirates</p>

                                </li>
                                <li>
                                <p className="text-gray-400">+971 52 7030189</p>

                                </li>
                                <li>
                                <p className="text-gray-400">Режим работы: 24/7</p>

                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col  gap-4">
                            <p className="text-white">МАШИНЫ</p>
                            <p className="text-gray-400">Suv</p>
                            <p className="text-gray-400">Спортивные автомобили</p>
                            <p className="text-gray-400">Роскошные автомобили</p>
                            <p className="text-gray-400">Кабриолеты</p>
                            <p className="text-gray-400">Бюджетные автомобили</p>
                            <p className="text-gray-400">Американские бренды</p>
                            <p className="text-gray-400">Muscle</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

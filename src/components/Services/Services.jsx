/* eslint-disable react/no-unescaped-entities */

import SportCar from '../../assets/img/images.jpg'
import Vector from '../../assets/img/vector.svg'
import Royce from '../../assets/img/rolls royce.jpg'
import './Services.css'

const Services = () => {
    return (
        <>
            <div className='bg-slate-900 mt-10 pt-10 pb-10'>
                <div className='container mx-auto'>
                    <h1 className='text-4xl pb-10 text-white'>SERVICES</h1>
                    <div className="flex">
                        <div className="service-card w-96 me-5">
                            <img className='w-full min-h-24' src={SportCar} alt="img" />
                            <h3 className="text-2xl text-white pt-5 pb-5 pe-10">Sports Car Rental Dubai Style Tour in Dubai</h3>
                            <p className="text-white text-xl">Experience the thrill of a dune buggy tour in Dubai with us. We offer free hotel pick-up & drop-off service. Book now!</p>
                            <button className="text-white  text-lg flex m-5 click-btn items-center">LEARN MORE
                                <img className='ps-3' src={Vector} alt="" />
                            </button>
                        </div>

                        <div className="service-card w-96">
                            <img className='w-full min-h-24' src={Royce} alt="img" />
                            <h3 className="text-2xl text-white pt-5 pb-5 pe-10">Photoshoot with luxury car rental Dubai</h3>
                            <p className="text-white text-xl">Professional car photoshoot as an additional type of service at Auto Zoom Car Rental</p>
                            <button className="text-white text-lg  flex m-5 click-btn items-center">LEARN MORE
                                <img className='ps-3' src={Vector} alt="images" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-slate-800">
                <div className="container mx-auto pt-10 pb-10">
                    <h1 className="text-5xl text-white pt-5 pb-8">LUXURY CAR RENTAL IN DUBAI</h1>
                    <p className="text-xl text-white">Are you ready to feel the adrenaline rush and unleash your inner speed demon? Look no further than Auto Zoom luxury car rental Dubai, the city where dreams become reality. In this ultimate guide to sports car rental Dubai, we will take you on a thrilling journey through the world of luxury and supercar rental Dubai. Imagine cruising down the iconic Sheikh Zayed Road in a sleek and powerful sports car rental Dubai style, turning heads and leaving everyone in awe of your style. Whether you are a car enthusiast or simply looking to</p>
                    <h1 className="text-5xl text-white pt-8 pb-8">What are the requirements to rent a luxury car in Dubai?</h1>
                    <p className="text-xl text-white">To rent a car Dubai, it's enough to have a valid driving license and enough funds. & you'll need to show your foreign passport and prove that you have come of age and have driving experience.The age limit and the requirements for the license depend on where you're from. Visitors from Europe, the UK, the US and the Middle East can drive with their national licenses. People from other parts of the world need an international license. The age limit for the driver might vary from 21 to 25 years. Please get in touch with us before placing an order to discuss your individual situation.Cars in the UAE have steering wheels on the left side. Drivers stick to the right side of the road.If needed, you can add a second driver to your rental contract. The requirements for this person will be the same as for the first driver. If you let someone who isn't mentioned in your rental contract take a place behind the wheel, you can get a fine.The duration of a premium car rental in Dubai can vary from one day to several weeks. Discounts are common for luxury car rental Dubai monthly car rental plan. Use this chance to have fun, increase your high social status and please your dearest and nearest!Please avoid smoking inside the rented vehicle.</p>
                </div>
            </div>

            <div className="bg-slate-900 pt-10 pb-10">
                <div className="container mx-auto w-full flex">
                    <iframe className='w-3/5 youtube-video' src="https://www.youtube.com/embed/6Bcg46rxqAE?si=oUOIn81REX0sL4RT&start=2"></iframe>
                    <div className="w-2/5 ms-5">
                        <h1 className="text-5xl pb-8 text-white">SPORTS CAR RENTAL DUBAI</h1>
                        <p className="text-xl text-white">Auto Zoom L L C a Car is a Top Luxury Car Rental Dubai based company, We offer sports car rental, and supercar rental in Dubai. The best luxury car rental process provided by our fleet . We own a diverse range of luxury supercar rental and sports car rental Dubai style , including Rolls Royce, Lamborghini, Maserati, Ferrari, Mercedes Benz, Porsche, and Range Rover, to name a few. Rent a car with the best car rental company in Dubai.</p>
                        <button className="text-white text-lg flex mt-10 click-btn items-center">ALL CARS
                            <img className='ps-3' src={Vector} alt="images" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;

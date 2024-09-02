import React, { useState } from 'react';
import './Faq.css'
import Vector from '../../assets/img/vector.svg'
import Aventador from '../../assets/img/aventador.webp'
import Urus from '../../assets/img/urus.webp'
import Uruss from '../../assets/img/Uruss.webp'
import Ferrari from '../../assets/img/ferrari.webp'
import Huracan from '../../assets/img/huracan.webp'
import Orangy from '../../assets/img/orangy.webp'

const Faq = () => {

    const accordionData = [
        {
            title: "What is the minimum age requirements to rent a car in Dubai ?",
            description: "Drivers under 25 must have a license for a minimum of three years. The same applies for the person(s) whose name(s) is/are mentioned as additional driver."
        },
        {
            title: "What do you need for a luxury car rental in Dubai ?",
            description: "Drivers shall be required to have a valid driver's license and Passport copy."
        },
        {
            title: "How much is the Insurance limit on luxury car rental Dubai?",
            description: "Includes an overall Motor Vehicle Insurance. 3000-5000 AED for Excess Luxury Cars. 7000-10000 AED for Sports Cars."
        },
        {
            title: "What are the driving licenses that can be used in Arab countries ?",
            description: "Local driving license for UAE citizens. International driving licenses issued by the following countries: 1. Kingdom of Saudi Arabia, 2. Egypt, 3. Bahrain, 4. Jordan, 5. Kuwait, 6. Tunisia, 7. Sultanate of Oman, 8. Algeria, 9. Qatar, 10. Morocco, 11. Sudan, 12. Somalia, 13. Palestine, 14. Lebanon, 15. Libya, 16. Syria, 17 Yemen, 18. Iraq, 19. Djibouti, 20. Comoros, 21. Mauritania."
        },
        {
            title: "Can anyone else drive the car i rent?",
            description: "The contract prescribes two drivers, but at the time of filling out the contract, you must provide a driver's license and passport."
        }

    ]
    const images = [
        { id: 1, src: Aventador },
        { id: 2, src: Urus },
        { id: 3, src: Uruss },
        { id: 4, src: Huracan },
        { id: 5, src: Ferrari },
        { id: 6, src: Orangy },
    ]

    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }

        setSelected(i)
    }
    const [selectImg, setSelectImg] = useState(null)
    const imageHandle = (image) => {
        setSelectImg(image)
    }

    return (
        <div className='bg-slate-900 pt-10 pb-10'>
            <div className="container mx-auto">
                <h1 className="text-white text-4xl pt-8 pb-8">FAQ</h1>
                {
                    accordionData?.map((item, i) =>
                        <div key={i} className={`accordion ${selected == i ? 'accordion-active' : ''}`}>
                            <div onClick={() => toggle(i)} className={`accordion-title ${selected == i ? 'accordion-title-active' : ''}`}>
                                <span><img src={Vector} alt="image" /></span>
                                <h3 className='accord-title text-2xl text-white ps-5'>{item?.title}</h3>
                            </div>
                            <div id='tab-1' className={` bg-slate-800 ms-7 text-white text-xl accordion-content ${selected == i ? 'accordion-content-active' : ''}`} >
                                {item?.description}
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="container mx-auto">
                <h1 className="text-white text-4xl pt-24 pb-8">FOLLOW US ON INSTAGRAM</h1>
                <div  className="w-full flex align-center justify-center flex-wrap">
                    {
                        images.map((img, i) => (
                            <img onClick={() => imageHandle(img)} className='w-44 m-3 cursor-pointer insta-img' src={img?.src} alt="img" />
                        ))
                    }
                </div>
                {
                    selectImg && (
                        <div onClick={() => setSelectImg(null)} className="fixed top-0 left-0 w-full h-screen flex modal-img">
                            <img className='w-80 h-80 modal-image' src={selectImg?.src} alt="" />
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Faq;

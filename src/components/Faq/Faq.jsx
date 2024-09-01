import React, { useState } from 'react';
import './Faq.css'
import Vector from '../../assets/img/vector.svg'

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

    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }

        setSelected(i)
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
                            <div id='tab-1' className={`accordion-content bg-slate-800 ms-7 text-white text-xl ${selected == i ? 'accordion-content-active' : ''}`} >
                                {item?.description}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Faq;

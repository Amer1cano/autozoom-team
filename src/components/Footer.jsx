import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='bg-[rgb(18,19,25)] m-auto py-12 '>
       <div className='max-w-screen-xl m-auto'>
           <div>
               <img src="https://www.autozoomrental.com/static/media/logo1.cd0ee2ea64bdb4e351d6eb2c72171d12.svg" alt="" className='w-[110px] h-[80px]'/>
               <h1 className='text-4xl text-white w-[265px] pt-8'>
               ПРОКАТ АВТОМОБИЛЕЙ В ДУБАЕ
               </h1>
               <p className='text-[1rem] text-gray-400 w-[265px] pt-8 pb-8'>
               Аренда спортивных и лакшери авто напрямую без посредников. Аренда авто Дубай с Auto Zoom Car Rental это безопастность и удовольствие от вождения
               </p>
               <a href="tel:+998948999949" className='w-36 h-20  border rounded-lg  py-4 text-white px-6 footerBtn'>ЗВОНИТЕ</a>
           </div>
           <div>

           </div>
       </div>
    </div>
  )
}

export default Footer

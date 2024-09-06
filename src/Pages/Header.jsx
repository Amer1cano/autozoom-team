
import { Carousel } from 'flowbite-react';
import '../styles/Header.css';
import { useEffect, useState } from 'react';


const Header = () => {

  const [category,setCategory] = useState([]);

    function getFunction(){
      fetch("https://autoapi.dezinfeksiyatashkent.uz/api/categories",{
      }).then((res)=>res.json())
      .then((data)=>{
        setCategory(data?.data)
      })
    }
    
    useEffect(()=>{
      getFunction()
    },[])
    
  return (
    <div className="header">
      <div className="header-top-head">
        <h2 className="header-top-head-text">
            TOP LUXURY CAR
        </h2>
        <h2 className="header-top-head-text">
          RENTAL DUBAI
        </h2>
        <p className="header-top-extra-text">
          Best sports car&supercar rental Dubai, Exclusive offers on luxury car rental Dubai Cheap price
        </p>
        <h3 className="header-top-text">
          RENT A CAR DUBAI CATALOG
        </h3>
      </div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel leftControl=" " rightControl=" ">
          {
          category.map((item)=>{
              return <div key={item?.id} className='carousel-cont'>
                <a href="">
                  <img src={`https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/${item?.image_src}`} className='carousel-img' alt=""/>
                </a>
              </div>})
          }
        </Carousel>
      </div>
    </div>
  )
}

export default Header

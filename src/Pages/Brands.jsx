import { useEffect, useState } from "react";
import '../styles/Brands.css';

const Brands = () => {
    const [brands,setBrands] = useState([]);

    function getFunction(){
        fetch("https://autoapi.dezinfeksiyatashkent.uz/api/brands",{
        }).then((res)=>res.json())
        .then((data)=>{
            setBrands(data?.data)
        })
    }

    useEffect(()=>{
        getFunction()
    },[])
    

  return (
    <div className="brands">
      <div className="brands-top">
        <h2 className="brands-top-text">
            BRANDS
        </h2>
      </div>
      <div className="brands-cont">
        {
            brands.map((item)=>(
                <div key={item?.id} className="brands-card">
                    <img src={`https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/${item?.image_src}`} alt="" />
                    <h3 className="brands-card-text">
                        {item?.title}
                    </h3>
                </div>
            ))
        }
      </div>
      <div className="brands-cont-mobile">
        {
            brands.map((item,index)=>{
              if(index<3){
                return <div key={item?.id} className="brands-card">
                    <img src={`https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/${item?.image_src}`} alt="" />
                    <h3 className="brands-card-text">
                        {item?.title}
                    </h3>
                </div>
              }
                
            })
        }
      </div>
    </div>
  )
}

export default Brands

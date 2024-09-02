import React, { useEffect, useState } from 'react';
import './Locations.css'

const Location = () => {
    const [locations, setLocations] = useState([])

    useEffect(() => {
        fetch("https://autoapi.dezinfeksiyatashkent.uz/api/locations")
            .then((res) => {
                return res.json()
            })
            .then((item) => {
                setLocations(item?.data)
            })
    }, [])
    return (
        <div className='bg-slate-900'>
            <div className="container mx-auto flex">
                <div className="">
                    <h1 className="text-4xl text-white">LOCATION</h1>
                    <ul className="list-none flex-col">
                        {
                            locations?.map((elem, i) => (
                                <li className='pt-3'>
                                    <a href="#" className="text-slate-500 text-xl underline">{elem?.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="ms-40 city-block    ">
                    <h1 className="text-4xl text-white">CITY</h1>
                    <ul className="list-none flex-col">
                        {
                            locations?.map((elem, i) => (
                                <li className='pt-3'>
                                    <a href="#" className="text-slate-500 text-xl underline">{elem?.text}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Location;

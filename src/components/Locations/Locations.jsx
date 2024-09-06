import React, { useEffect, useState } from 'react';
import './Locations.css'

const Location = () => {
    return (
        <div className='bg-slate-900'>
            <div className="container mx-auto flex">
                <div className="">
                    <h1 className="text-4xl text-white">LOCATION</h1>
                    <ul className="list-none flex-col">
                        <li className='pt-3'>
                            <a href="#" className="text-slate-500 text-xl underline">Dubai Mall</a>
                        </li>
                        <li className='pt-3'>
                            <a href="#" className="text-slate-500 text-xl underline">Sharja Airport</a>
                        </li>
                    </ul>
                </div>

                <div className="ms-40 city-block    ">
                    <h1 className="text-4xl text-white">CITY</h1>
                    <ul className="list-none flex-col">
                        <li className='pt-3'>
                            <a href="#" className="text-slate-500 text-xl underline">Dubai</a>
                        </li>
                        <li className='pt-3'>
                            <a href="#" className="text-slate-500 text-xl underline">Sharja</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Location;

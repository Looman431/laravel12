import Header from "../../layouts/Header.jsx"
import React from 'react';


export default function Welcome(){
    return (
        <>
            <Header children={undefined} />
            <div className="flex">
                <div className="flex justify-center">
                    <img src="/image_2025-05-15_15-05-58%201.png" className="w-full object-cover" alt=""></img>
                    <img src="/2022-07-16_18-40-19-removebg-preview.png" className="absolute mx-auto" alt=""></img>
                </div>
                <div className="flex justify-center">
                    <h1 className="absolute mx-auto">Креаторс</h1>
                </div>
            </div>

        </>
    );
}

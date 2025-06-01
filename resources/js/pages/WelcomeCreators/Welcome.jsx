import Header from "../../layouts/Header.jsx"
import React from 'react';


export default function Welcome(){
    return (
        <>
            <Header children={undefined} />
            <div className="relative w-full flex justify-center items-center flex-col">
                <img src="/image_2025-05-15_15-05-58%201.png" className="w-full object-cover" alt=""></img>
                <img src="/2022-07-16_18-40-19-removebg-preview.png" className="absolute top-1/2 transform -translate-y-1/2 z-10 max-w-[300px]" alt=""></img>
            </div>

            <div className="flex justify-center mt-8">
                <h1 className="absolute mx-auto">Креаторс</h1>
            </div>
        </>
    );
}

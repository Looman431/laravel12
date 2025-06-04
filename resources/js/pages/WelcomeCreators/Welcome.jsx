import Header from "../../layouts/Header.jsx"
import React from 'react';


export default function Welcome(){
    return (
        <>
            <Header children={undefined} />
            <div className="flex justify-center">
                <img src="/site-bg.png" className="
                w-700 h-200
                object-cover
                rounded-2xl
                mt-10" alt=""></img>
                <img src="/2022-07-16_18-40-19-removebg-preview.png" className="absolute" alt=""></img>
                <h1 className="absolute mx-auto">Креаторс</h1>
            </div>

        </>
    );
}

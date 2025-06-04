import Header from "../../layouts/Header.jsx"
import React from 'react';


export default function Welcome(){
    return (
        <>
            <Header children={undefined} />
            <div className="flex justify-center">
                <div className="w-1/2 h-1/2">
                    <img src="/site-bg.png" alt=""></img>
                </div>
                <img src="/2022-07-16_18-40-19-removebg-preview.png" className="absolute mx-auto" alt=""></img>
                <h1 className="absolute mx-auto">Креаторс</h1>
            </div>

        </>
    );
}

import React from 'react';
import Header from "../../layouts/Header.jsx"

function CreatorsDescription(){
    return(
        <>
           <h1 className="title">Креаторс... ну это штука такая крутая, ну рил крутая</h1>
        </>
    )
}

CreatorsDescription.layout = page => <Header children={page}/>

export default CreatorsDescription;

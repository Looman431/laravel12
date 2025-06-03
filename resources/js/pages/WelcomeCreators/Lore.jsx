import React from 'react';
import Header from "../../layouts/Header.jsx"

function Lore({Test}){
    return(
        <>
            <h1 className="title">Давным давно, в далекой далекой галактике был креаторс</h1>
            <h1>{Test}</h1>
        </>
        )
}

Lore.layout = page => <Header children={page}/>

export default Lore;

import React from 'react';
import Header from '@/layouts/Header.jsx';
import Projects from '@/pages/Projects.jsx';

function Lore(){
    return(
        <>
            <h1 className="title">Testik</h1>
        </>
        )
}

Lore.layout = page => <Header children={page}/>

export default Lore;

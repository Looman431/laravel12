import Header from "../layouts/Header.jsx"
import React from 'react';

function Projects({CreatorsModel}){
    return(
        <>
            <h1 className="title">Тест передачи данных</h1>
            <br/>
            <h1>{CreatorsModel.ProjectName}</h1>
            <h1>{CreatorsModel.ProjectShortDescription}</h1>
        </>
        )
}

Projects.layout = page => <Header children={page}/>

export default Projects

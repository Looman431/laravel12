import Header from "../layouts/Header.jsx";
import React from 'react';
import { Link } from "@inertiajs/react";

function Projects({CreatorsModel}){
    return(
        <>
            <h1 className="title">Тест передачи данных</h1>
            <br/>
            <h1>{CreatorsModel.ProjectName}</h1>
            <h1>{CreatorsModel.ProjectShortDescription}</h1>

            <Link className="
            h-14 w-28
            ml-10
            rounded
            bg-neutral-950
            border-b-6 border-black" href="/projects/create">
                Создать проект
            </Link>
        </>
        )
}

Projects.layout = page => <Header children={page}/>

export default Projects;

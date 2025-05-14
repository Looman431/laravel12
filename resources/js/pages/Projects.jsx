import Header from "../layouts/Header.jsx";
import React from 'react';
import { Link } from "@inertiajs/react";

function Projects({CreatorsModel}){
    return(
        <>
            <div className="
            w-full
            flex justify-center items-center">
                <Link className="
                h-16 w-124
                mt-5
                rounded
                bg-black
                text-lg text-white font-semibold
                flex justify-center items-center" href="/projects/create">
                    Создать проект
                </Link>
            </div>

            <h1 className="title">Тест передачи данных</h1>
            <br/>
            <h1>{CreatorsModel.ProjectName}</h1>
            <h1>{CreatorsModel.ProjectShortDescription}</h1>
        </>
        )
}

Projects.layout = page => <Header children={page}/>

export default Projects;

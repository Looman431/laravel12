import Header from "../layouts/Header.jsx";
import React from 'react';
import { Link } from "@inertiajs/react";

function Projects({Project}){
    return(
        <>
            <div className="
            w-full
            flex justify-center items-center">
                <Link className="
                h-16 w-124
                mt-5
                rounded
                bg-black/60
                text-lg text-white font-semibold
                flex justify-center items-center
                transition ease-in-out
                hover:bg-white hover:text-black hover:-translate-y-1" href="/projects/create">
                    Создать проект
                </Link>
            </div>
            <h1 className="title">Проекты</h1>
            <div>
                {Project.data.map(projects => (
                    <div key={projects.id} className="p-4 border-b">
                        <div className="text-sm text-slate-600">
                            <span>
                                Created at:
                            </span>
                            <span>
                                {new Date(projects.created_at).toLocaleTimeString()}
                            </span>
                        </div>
                        <p className="font-medium">{projects.ProjectName}</p>
                        <p className="font-medium">{projects.ProjectShortDescription}</p>
                        <br/>
                    </div>
                ))}
            </div>
        </>
        )
}

Projects.layout = page => <Header children={page}/>

export default Projects;

import Header from "../../layouts/Header.jsx";
import React from 'react';
import { Link } from "@inertiajs/react";
import { route } from 'ziggy-js';

function Projects({Project}){
    return(
        <>
            <div>
                {Project.data.map(projects => (
                    <div key={projects.id} className="p-4 border-b">
                        <div className="text-sm text-slate-600">
                            <span>
                                Проект создан:
                            </span>
                            <span>
                                {new Date(projects.created_at).toLocaleTimeString()}
                            </span>
                        </div>
                        <p className="font-medium">{projects.ProjectName}</p>
                        <p className="font-medium">{projects.ProjectShortDescription}</p>
                        <Link className="font-bold text-blue-400 " href={`/projects/${projects.id}`}>Подробнее</Link>
                        <br/>
                    </div>
                ))}
            </div>

            <div className="py-12 px-4">
                {Project.links.map(link => (
                    link.url ? (
                        <Link
                            key={link.label}
                            href={link.url}
                            dangerouslySetInnerHTML={{__html: link.label }}
                            className="p-1 mx-1 focus:text-blue-500 focus:font-bold"
                        />
                    ) : (
                        <span
                            key={link.label}
                            dangerouslySetInnerHTML={{__html: link.label }}
                            className="p-1 mx-1 text-slate-300"
                        ></span>
                    )
                ))}
            </div>
        </>
        )
}

Projects.layout = page => <Header children={page}/>

export default Projects;

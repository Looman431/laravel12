import Header from "../layouts/Header.jsx";
import React from 'react';
import { Link } from "@inertiajs/react";
function ProjectsShow({Projects}){
    return(
        <>
            <h1 className="title">Testttt</h1>
            <h1>{Projects.ProjectName}</h1>
            <h1>{Projects.ProjectShortDescription}</h1>
        </>
    )
}

ProjectsShow.layout = page => <Header children={page}/>
export default ProjectsShow;

import Header from "../../layouts/Header.jsx";
import React from 'react';
import { Link } from "@inertiajs/react";
function ProjectsShow({User}){
    return(
        <>
            <h1 className="title">Testttt</h1>
            <h1>{User}</h1>
        </>
    )
}

ProjectsShow.layout = page => <Header children={page}/>
export default ProjectsShow;

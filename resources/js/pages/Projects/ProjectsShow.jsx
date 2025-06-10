import Header from "../../layouts/Header.jsx";
import React from 'react';
import { Link } from "@inertiajs/react";
function ProjectsShow({Test}){
    return(
        <>
            <h1 className="title">Testttt</h1>
            <h1>{Test}</h1>
        </>
    )
}

ProjectsShow.layout = page => <Header children={page}/>
export default ProjectsShow;

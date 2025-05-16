import Header from "../layouts/Header.jsx";
import React from 'react';
import { Link } from "@inertiajs/react";
function ProjectsShow(){
    return(
        <>
            <h1 className="title">Testttt</h1>
        </>
    )
}

ProjectsShow.layout = page => <Header children={page}/>
export default ProjectsShow;

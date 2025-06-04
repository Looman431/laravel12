import {useForm} from "@inertiajs/react";
import React from 'react';
import Header from "../../layouts/Header.jsx"

function EditProjects(){
    return(
        <>
            <h1>Давай редактируй страничку свою</h1>
        </>
    )

}

EditProjects.layout = page => <Header children={page}/>

export default EditProjects

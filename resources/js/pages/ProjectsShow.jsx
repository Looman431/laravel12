import Header from "../layouts/Header.jsx";
import React from 'react';
import { Link } from "@inertiajs/react";
function ProjectsShow({Project}){
    console.log('ProjectsShow компонент загружен'); // Увидим, если компонент начал выполняться
    console.log('Получен пропс Projects:', Projects);
    console.log('ID:', Projects ? Projects.id : 'нет ID');
    console.log('Название:', Projects ? Projects.ProjectName : 'нет Названия');
    console.log('Описание:', Projects ? Projects.ProjectShortDescription : 'нет Описания');
    console.log('Путь к изображению:', Projects ? Projects.ProjectImagePath : 'нет Пути');
    return(
        <>
            <h1 className="title">Testttt</h1>
            <h1>{Project.ProjectName}</h1>
            <h1>{Project.ProjectShortDescription}</h1>
        </>
    )
}

ProjectsShow.layout = page => <Header children={page}/>
export default ProjectsShow;

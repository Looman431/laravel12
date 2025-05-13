import {useForm} from "@inertiajs/react";

export default function CreateProject(){
    const { data, setData, post, errors, processing } = useForm({
        ProjectName: "",
        ProjectShortDescription: "",
        ProjectImage: "",
    });

    function submit (e) {
        e.preventDefault()
        post('/projects/create/check')
    }

    return(
        <>
            <h1 className="title">Форма для создания поста</h1>
            {/*data.CategoryName}<br/>
            {data.CategoryDescription*/}

            <div>
                <form onSubmit={submit}>
                    <h1>Название проекта</h1>
                    <textarea rows="3" value={data.ProjectName} onChange={(e) => setData('ProjectName', e.target.value )} className={errors.ProjectName && '!ring-red-500'}></textarea>
                    {errors.ProjectName &&  <p className="error">{errors.ProjectName}</p>}

                    <h1>Краткое описание проекта</h1>
                    <textarea rows="3" value={data.ProjectShortDescription} onChange={(e) => setData('ProjectShortDescription', e.target.value)} className={errors.ProjectShortDescription && '!ring-red-500'}></textarea>
                    {errors.ProjectShortDescription &&  <p className="error">{errors.ProjectShortDescription}</p>}

                    <h1>Икона проекта</h1>
                    <textarea rows="3" value={data.ProjectImage} onChange={(e) => setData('ProjectImage', e.target.value)} className={errors.ProjectImage && '!ring-red-500'}></textarea>
                    {errors.ProjectImage &&  <p className="error">{errors.ProjectImage}</p>}
                    <button className="primary-btn mt-4" disabled={processing}>Отправить</button>

                </form>
            </div>
        </>
    )
}

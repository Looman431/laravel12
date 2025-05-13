import {useForm} from "@inertiajs/react";

export default function CreateProject(){
    const { data, setData, post, errors, processing } = useForm({
        ProjectName: "",
        ProjectShortDescription: "",
        ProjectImage: null,
    });

    function submit (e) {
        e.preventDefault()
        post('/projects/create/store')
    }

    // Функция для обработки выбора файла
    const handleFileChange = (e) => {
        const file = e.target.files ? e.target.files[0] : null;
        // Устанавливаем файл в состояние формы.
        // useForm автоматически поймет, что это файл и отправит как FormData.
        setData('ProjectImage', file);
        // Опция { forceFormData: true } здесь обычно не нужна для useForm
        // при установке объекта File, но может быть полезной в других сценариях.
        // setData('project_image', file, { forceFormData: true }); // Можно и так, для ясности
    };

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

                    <h1>Иконка проекта</h1>
                    <input
                        type="file"
                        onChange={handleFileChange} // Используем нашу функцию для обработки файла
                        className={`border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.ProjectImage && 'border-red-500 ring-red-500'}`}
                        // Важно: у файловых полей не должно быть атрибута value в React таким образом!
                    />
                    {errors.ProjectImage &&  <p className="text-red-500 text-xs italic">{errors.ProjectImage}</p>}

                    <button className="primary-btn mt-4" disabled={processing}>Отправить</button>
                </form>
            </div>
        </>
    )
}

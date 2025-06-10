import { usePage } from '@inertiajs/react'

function Test({children}){
    const { projects } = usePage().props
    return(
        <>
            <h1>{projects.id}</h1>
        </>
    )
}
export default Test

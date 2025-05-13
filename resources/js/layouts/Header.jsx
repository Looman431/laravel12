import React from 'react';
import { Link } from '@inertiajs/react';

export default function Header({children}){
    return (
        <>
            <header>
                <nav className="h-18
                bg-neutral-900
                flex justify-center items-center
                rounded-b-xl
                space-x-7">
                    <Link className="
                    h-10 w-25
                    bg-linear-to-tr from-cyan-500 to-blue-500 rounded-md text-black text-sm font-bold
                    transform transition-all hover:text-white hover:cursor-pointer
                    items-center" href="">
                        Профиль
                    </Link>

                    <Link className="
                    h-10 w-25
                    mr-10
                    bg-linear-to-br from-blue-500 to-cyan-500 rounded-md text-black text-sm font-bold
                    transform transition-all hover:text-white hover:cursor-pointer
                    items-center" href="/projects">
                        Проекты
                    </Link>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}

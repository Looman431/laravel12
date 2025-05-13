import React from 'react';
import { Link } from '@inertiajs/react';

export default function Header({children}){
    return (
        <>
            <header>
                <nav className="
                h-16
                bg-neutral-900
                flex justify-center items-center
                rounded-b-xl
                space-x-7">
                    <div className="bg-[url(../../img/blue-shield-armor-empty-plate-vector_-fotor-bg-remover-2024011621435.png)]"></div>
                    <Link className="
                    h-10 w-38
                    rounded-lg
                    flex items-center content-center justify-center
                    text-white text-md font-semibold
                    transform transition-all hover:text-cyan-100 hover:cursor-pointer hover:backdrop-opacity-75 hover:bg-neutral-900/50" href="">
                        Профиль
                    </Link>

                    <Link className="
                    h-10 w-38
                    mr-10
                    rounded-lg
                    flex items-center content-center justify-center
                    text-white text-md font-semibold
                    transform transition-all hover:text-cyan-100 hover:cursor-pointer hover:bg-neutral-900/50" href="/projects">
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

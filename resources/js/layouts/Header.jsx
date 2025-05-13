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
                    <Link className="
                    h-8 w-38
                    rounded-lg
                    flex items-center content-center justify-center
                    text-white text-md font-semibold
                    border-b-4 border-black/70
                    transform transition-all hover:text-cyan-100 hover:cursor-pointer" href="">
                        Профиль
                    </Link>

                    <Link className="
                    h-8 w-38
                    mr-10
                    rounded-lg
                    flex items-center content-center justify-center
                    text-white text-md font-semibold
                    transform transition-all hover:text-cyan-100 hover:cursor-pointer hover:" href="/projects">
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

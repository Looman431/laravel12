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
                    h-10 w-28
                    flex items-center content-center justify-center
                    bg-neutral-950/50 rounded-md text-white text-md font-medium
                    border-b-4 border-black/70
                    transform transition-all hover:text-cyan-100 hover:cursor-pointer" href="">
                        Профиль
                    </Link>

                    <Link className="
                    h-10 w-28
                    mr-10
                    flex items-center content-center justify-center
                    bg-neutral-950/50 rounded-md text-white text-md font-medium
                    border-b-4 border-black/70
                    transform transition-all hover:text-cyan-100 hover:cursor-pointer" href="/projects">
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
